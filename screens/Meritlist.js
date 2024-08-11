import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db, storage } from '../firebase'; // Adjust the import according to the path of your firebase.js file
import { collection, onSnapshot, deleteDoc, doc, getFirestore, writeBatch } from 'firebase/firestore';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const MeritListScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [pdfName, setPdfName] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Tameer-i-nauAcceptedApplications'), (snapshot) => {
      const studentsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        fullname: doc.data().fullname,
        fathername: doc.data().fathername,
        subject: doc.data().subject,
        marks: doc.data().marks,
      }));
      studentsData.sort((a, b) => b.marks - a.marks);

      setStudents(studentsData);
      setFilteredStudents(studentsData);
    });

    return () => unsubscribe();
  }, []);

  const searchFilter = (text) => {
    setSearchTerm(text);
    if (text) {
      const newData = students.filter(item => {
        const itemData = item.fullname ? item.fullname.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredStudents(newData);
    } else {
      setFilteredStudents(students);
    }
  };

  const generatePDF = async (pdfTitle) => {
    let htmlContent = `
      <h1>${pdfTitle}</h1>
      <table border="1" style="width:100%">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Full Name</th>
            <th>Father's Name</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    filteredStudents.forEach((student, index) => {
      const serialNumber = index + 1; // Calculate serial number (starting from 1)
      htmlContent += `
        <tr>
          <td>${serialNumber}</td>
          <td>${student.fullname}</td>
          <td>${student.fathername}</td>
          <td>${student.subject}</td>
          <td>${student.marks}</td>
        </tr>
      `;
    });
  
    htmlContent += `
        </tbody>
      </table>
    `;
  
    try {
      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      return uri;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw error;
    }
  };

  const uploadPDF = async (pdfUri) => {
    const response = await fetch(pdfUri);
    const blob = await response.blob();
    const timestamp = new Date().toISOString();
    const storageRef = ref(storage, `Tameer-i-nauMeritLists/${pdfName}.pdf`);
    const metadata = {
      customMetadata: {
        timestamp: timestamp
      }
    };
    await uploadBytes(storageRef, blob, metadata);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const deleteDocuments = async () => {
    const firestore = getFirestore();
    const batch = writeBatch(firestore);
    filteredStudents.forEach(student => {
      const docRef = doc(firestore, 'Tameer-i-nauAcceptedApplications', student.id);
      batch.delete(docRef);
    });
    await batch.commit();
  };

  const handleExportPress = async () => {
    if (!pdfName) {
      Alert.alert('Error', 'Please enter a name for the PDF.');
      return;
    }

    try {
      const pdfUri = await generatePDF(pdfName); // Pass pdfName as the title
      const pdfURL = await uploadPDF(pdfUri);
      await deleteDocuments(); // Delete documents from Firestore
      setStudents([]); // Clear the students state
      setFilteredStudents([]); // Clear the filtered students state
      setPdfName(''); // Clear the PDF name input
      Alert.alert('Success', `PDF generated and uploaded! Download URL: ${pdfURL}`);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Approved Students Merit List</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchTerm}
        onChangeText={(text) => searchFilter(text)}
      />
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.fullname}</Text>
            <Text style={styles.cell}>{item.fathername}</Text>
            <Text style={styles.cell}>{item.subject}</Text>
            <Text style={styles.cell}>{item.marks}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>Full Name</Text>
            <Text style={styles.headerCell}>Father's Name</Text>
            <Text style={styles.headerCell}>Subject</Text>
            <Text style={styles.headerCell}>Marks</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.pdfNameInput}
        placeholder="Enter PDF name"
        value={pdfName}
        onChangeText={(text) => setPdfName(text)}
      />
      <TouchableOpacity style={styles.exportButton} onPress={handleExportPress}>
        <Ionicons name="download" size={24} color="#fff" />
        <Text style={styles.exportButtonText}>Export as PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pdfNameInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#003F6C',
    borderRadius: 4,
    marginTop: 16,
  },
  exportButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
  },
});

export default MeritListScreen;
