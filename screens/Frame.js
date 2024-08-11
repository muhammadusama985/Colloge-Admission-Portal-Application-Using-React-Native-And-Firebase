import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { db } from '../firebase'; // Adjust the import according to the path of your firebase.js file
import { collection, onSnapshot, addDoc, updateDoc, doc } from 'firebase/firestore';

const ApplicationReview = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Tameer-i-nauStudentsInfo'), (snapshot) => {
      const applicationsData = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          fullname: doc.data().fullname,
          fathername: doc.data().fathername,
          cnic: doc.data().cnic,
          contact: doc.data().contact,
          fathernumber: doc.data().fathernumber,
          gender: doc.data().gender,
          email: doc.data().email,
          dob: doc.data().dob,
          address: doc.data().address,
          province: doc.data().province,
          district: doc.data().district,
          institute: doc.data().institute,
          board: doc.data().board,
          schooladdress: doc.data().schooladdress,
          marks: doc.data().marks,
          percentage: doc.data().percentage,
          division: doc.data().division,
          passingyear: doc.data().passingyear,
          extraactivities: doc.data().extraactivities,
          college: doc.data().college,
          cboard: doc.data().cboard,
          subject: doc.data().subject,
          session: doc.data().session,
          fee: doc.data().fee,
          others: doc.data().others,
          userId: doc.data().userId,
          status: doc.data().status,
        }))
        .filter((application) => application.status !== 'accepted'); // Filter out accepted applications

      setApplications(applicationsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAccept = async (application) => {
    Alert.alert('Accept', `Are you sure you want to accept ${application.fullname}'s application?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Accept',
        onPress: async () => {
          try {
            // Update the status of the application in Firestore
            await updateDoc(doc(db, 'Tameer-i-nauStudentsInfo', application.id), {
              status: 'accepted',
            });

            // Add the accepted application to Firestore
            await addDoc(collection(db, 'Tameer-i-nauAcceptedApplications'), {
              ...application,
              status: 'accepted',
            });

            // Remove the accepted application from the applications state
            setApplications(prevApplications => prevApplications.filter(app => app.id !== application.id));

            Alert.alert('Accepted', `${application.fullname}'s application has been accepted.`);
          } catch (error) {
            Alert.alert('Error', 'There was an error accepting the application. Please try again.');
            console.error('Error updating document: ', error);
          }
        },
      },
    ]);
  };

  const handleReject = (application) => {
    Alert.alert('Reject', `Are you sure you want to reject ${application.fullname}'s application?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Reject',
        onPress: async () => {
          // Handle rejection logic here
          Alert.alert('Rejected', `${application.fullname}'s application has been rejected.`);
        },
      },
    ]);
  };

  const renderPersonalDetails = (application) => (
    <View style={[styles.section, { backgroundColor: '#ffcccc' }]}>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <View style={styles.detailContainer}>
        <DetailRow label="Full Name" value={application.fullname} />
        <DetailRow label="Father's Name" value={application.fathername} />
        <DetailRow label="CNIC" value={application.cnic} />
        <DetailRow label="Contact" value={application.contact} />
        <DetailRow label="Father's Contact" value={application.fathernumber} />
        <DetailRow label="Gender" value={application.gender} />
        <DetailRow label="Email" value={application.email} />
        <DetailRow label="Date of Birth" value={application.dob} />
        <DetailRow label="Address" value={application.address} />
        <DetailRow label="Province" value={application.province} />
        <DetailRow label="District" value={application.district} />
      </View>
    </View>
  );

  const renderEducationDetails = (application) => (
    <View style={[styles.section, { backgroundColor: '#ccffcc' }]}>
      <Text style={styles.sectionTitle}>Education</Text>
      <View style={styles.detailContainer}>
        <DetailRow label="Institute" value={application.institute} />
        <DetailRow label="Board" value={application.board} />
        <DetailRow label="School Address" value={application.schooladdress} />
        <DetailRow label="Marks" value={application.marks} />
        <DetailRow label="Percentage" value={application.percentage} />
        <DetailRow label="Division" value={application.division} />
        <DetailRow label="Passing Year" value={application.passingyear} />
        <DetailRow label="Extra Activities" value={application.extraactivities} />
      </View>
    </View>
  );

  const renderProgramDetails = (application) => (
    <View style={[styles.section, { backgroundColor: '#ccccff' }]}>
      <Text style={styles.sectionTitle}>Program Details</Text>
      <View style={styles.detailContainer}>
        <DetailRow label="College" value={application.college} />
        <DetailRow label="College Board" value={application.cboard} />
        <DetailRow label="Subject" value={application.subject} />
        <DetailRow label="Session" value={application.session} />
        <DetailRow label="Fee" value={application.fee} />
        <DetailRow label="Others" value={application.others} />
        <DetailRow label="User ID" value={application.userId} />
      </View>
    </View>
  );

  const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}:</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>All Applications</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : selectedApplication ? (
        <ScrollView style={styles.detailContainer}>
          {renderPersonalDetails(selectedApplication)}
          {renderEducationDetails(selectedApplication)}
          {renderProgramDetails(selectedApplication)}

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => handleAccept(selectedApplication)}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => handleReject(selectedApplication)}>
              <Text style={styles.buttonText}>Reject</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedApplication(null)}>
            <AntDesign name="left" size={24} color="white" />
            <Text style={styles.backButtonText}>Back to List</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <FlatList
          data={applications}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.applicationItem} onPress={() => setSelectedApplication(item)}>
              <Text style={styles.applicationItemText}>{item.fullname}</Text>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          style={styles.applicationList}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
    color: 'red',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 20,
  },
  applicationList: {
    marginTop: 20,
  },
  applicationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  applicationItemText: {
    fontSize: 18,
    color: '#333333',
  },
  detailContainer: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 20,
    color: 'red',
    textDecorationLine: 'underline',
  },
  section: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  detailValue: {
    fontSize: 16,
    color: '#666666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 35,
    marginHorizontal: 10,
    alignItems: 'center',
    minWidth: 120,
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
  },
  rejectButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    flexDirection: 'row',
    backgroundColor: '#003F6C',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ApplicationReview;
