import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const CollegeDetails = ({ route }) => {
  const { college } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: college.image }} style={styles.collegeImage} />
      <Text style={styles.collegeName}>{college.name}</Text>
      <Text style={styles.collegeMerit}>Merit: {college.merit}%</Text>
      <Text style={styles.collegeSubjects}>Subjects: {college.subjects.join(', ')}</Text>
      <Text style={styles.collegeDescription}>Here you can add more detailed information about the college, such as its history, facilities, contact details, admission process, and any other relevant information.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  collegeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    marginTop:50,
  },
  collegeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#003F6C',
  },
  collegeMerit: {
    fontSize: 18,
    marginBottom: 10,
  },
  collegeSubjects: {
    fontSize: 18,
    marginBottom: 10,
  },
  collegeDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CollegeDetails;
