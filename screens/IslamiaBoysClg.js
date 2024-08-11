import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image ,ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { collection,addDoc } from 'firebase/firestore';
import { auth } from '../firebase';
import { db } from '../firebase';
import * as ImagePicker from 'expo-image-picker'
import { storage } from '../firebase';
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage';

const IslamiaBoysClg = ({ navigation }) => {
  const [fullname, setFullName] = useState('');
  const [fathername, setFatherName] = useState('');
  const [cnic, setCnic] = useState('');
  const [contact, setContact] = useState('');
  const [fathernumber, setFatherNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [institute, setInstitute] = useState('');
  const [board, setBoard] = useState('');
  const [schooladdress, setSchoolAddress] = useState('');
  const [marks, setMarks] = useState('');
  const [percentage, setPercentage] = useState('');
  const [division, setDivision] = useState('');
  const [passingyear, setPassingYear] = useState('');
  const [extraactivities, setExtraActivities] = useState('');
  const [college, setCollege] = useState('');
  const [cboard, setCboard] = useState('');
  const [subject, setSubject] = useState('');
  const [session, setSession] = useState('');
  const [fee, setFee] = useState('');
  const [others, setOthers] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [imageName, setImageName] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleConfirmation = async () => {
    try {
      setLoading(true);
  
      const currentUser = auth.currentUser;
  
      if (!currentUser) {
        throw new Error('User not authenticated');
      }
  
      let imageUrl = '';
      if (imageUri) {
        const response = await fetch(imageUri);
        const blob = await response.blob();
        const imageRef = ref(storage, `documents/IslamiaBoysCLg/${currentUser.uid}/${imageName}`);
        await uploadBytes(imageRef, blob);
        imageUrl = await getDownloadURL(imageRef);
      }
  
      await addDoc(collection(db, 'IslamiaBoysClgStudentsInfo'), {
        userId: currentUser.uid,
        fullname: fullname,
        fathername: fathername,
        cnic: cnic,
        contact: contact,
        fathernumber: fathernumber,
        email: email,
        gender: gender,
        dob: dob,
        address: address,
        province: province,
        district: district,
        institute: institute,
        board: board,
        schooladdress: schooladdress,
        marks: marks,
        percentage: percentage,
        division: division,
        passingyear: passingyear,
        extraactivities: extraactivities,
        college: college,
        cboard: cboard,
        subject: subject,
        session: session,
        fee: fee,
        others: others,
        imageUrl: imageUrl, // Save the image URL in Firestore
      });
  
      Alert.alert('Success', 'Data stored successfully!');
      navigation.navigate('FinalForm');
    } catch (error) {
      console.error('Error saving form data:', error);
      Alert.alert('Error', 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleDocumentUpload = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
  
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.cancelled) {
      const uri = result.assets[0].uri;
      const fileName = uri.split('/').pop();
      setImageUri(uri);
      setImageName(fileName); // Set the fileName to imageName state
    }
  };
  
  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn} exiting={FadeOut}>
        <>
          <Text style={styles.sectionTitle}>Personal Information:</Text>
          <View style={styles.section}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#666666"
              value={fullname}
              onChangeText={(text) => setFullName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Father Name"
              placeholderTextColor="#666666"
              value={fathername}
              onChangeText={(text) => setFatherName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="CNIC"
              placeholderTextColor="#666666"
              value={cnic}
              onChangeText={(text) => setCnic(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Number"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              value={contact}
              onChangeText={(text) => setContact(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Father's Number"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              value={fathernumber}
              onChangeText={(text) => setFatherNumber(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666666"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Gender"
              placeholderTextColor="#666666"
              value={gender}
              onChangeText={(text) => setGender(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              placeholderTextColor="#666666"
              value={dob}
              onChangeText={(text) => setDob(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              placeholderTextColor="#666666"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Province"
              placeholderTextColor="#666666"
              value={province}
              onChangeText={(text) => setProvince(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="District"
              placeholderTextColor="#666666"
              value={district}
              onChangeText={(text) => setDistrict(text)}
            />
          </View>
  
          <Text style={styles.sectionTitle}>Education:</Text>
          <View style={styles.section}>
            <TextInput
              style={styles.input}
              placeholder="Institute Name"
              placeholderTextColor="#666666"
              value={institute}
              onChangeText={(text) => setInstitute(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Board Name"
              placeholderTextColor="#666666"
              value={board}
              onChangeText={(text) => setBoard(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="School Address"
              placeholderTextColor="#666666"
              value={schooladdress}
              onChangeText={(text) => setSchoolAddress(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Obtained Marks"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              value={marks}
              onChangeText={(text) => setMarks(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Percentage"
              placeholderTextColor="#666666"
              value={percentage}
              onChangeText={(text) => setPercentage(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Division"
              placeholderTextColor="#666666"
              value={division}
              onChangeText={(text) => setDivision(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Passing Year"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              value={passingyear}
              onChangeText={(text) => setPassingYear(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Extracurricular Activities"
              placeholderTextColor="#666666"
              value={extraactivities}
              onChangeText={(text) => setExtraActivities(text)}
            />
          </View>
  
          <Text style={styles.sectionTitle}>Program Details:</Text>
          <View style={styles.section}>
            <TextInput
              style={styles.input}
              placeholder="College Name"
              placeholderTextColor="#666666"
              value={college}
              onChangeText={(text) => setCollege(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Board Name"
              placeholderTextColor="#666666"
              value={cboard}
              onChangeText={(text) => setCboard(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Subjects"
              placeholderTextColor="#666666"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Session"
              placeholderTextColor="#666666"
              value={session}
              onChangeText={(text) => setSession(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Fee"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              value={fee}
              onChangeText={(text) => setFee(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Others"
              placeholderTextColor="#666666"
              value={others}
              onChangeText={(text) => setOthers(text)}
            />
          </View>
  
          <Text style={styles.sectionTitle}>Document Upload:</Text>
          <View style={styles.uploadSection}>
            <TouchableOpacity style={styles.uploadButton} onPress={handleDocumentUpload}>
              <AntDesign name="cloudupload" size={20} color="black" />
              <Text style={styles.uploadButtonText}>Upload Document</Text>
            </TouchableOpacity>
            {imageUri ? <Image source={{ uri: imageUri }} style={styles.uploadedImage} /> : null}
          </View>
  
          <View style={styles.buttonContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleConfirmation}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      </Animated.View>
    </ScrollView>
  );
  };
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop:30,
  
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 20,
    color:'green',
    fontWeight: 'bold',
    textDecorationLine:'underline',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom:30,
  
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  uploadSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    marginLeft: 10,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  });
  
export default IslamiaBoysClg;


