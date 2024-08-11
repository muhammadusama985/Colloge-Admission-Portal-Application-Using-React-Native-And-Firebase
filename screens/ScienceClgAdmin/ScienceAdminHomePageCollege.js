import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, TextInput, Button, Alert, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ScinceAdminHomePageCollege = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, text: '1. HEC fata / Balochistan scholarship phase III.' },
    { id: 2, text: '2. Tameer - e - nau public Application Form' },
    { id: 3, text: '1. HEC fata / Balochistan scholarship phase III.' },
    // ... other announcements ...
  ]);

  const [newAnnouncement, setNewAnnouncement] = useState('');

  const addAnnouncement = () => {
    if (newAnnouncement.trim() === '') {
      Alert.alert('Error', 'Announcement cannot be empty');
      return;
    }
    setAnnouncements([...announcements, { id: announcements.length + 1, text: newAnnouncement }]);
    setNewAnnouncement('');
  };

  const deleteAnnouncement = (id) => {
    const updatedAnnouncements = announcements.filter(announcement => announcement.id !== id);
    setAnnouncements(updatedAnnouncements);
  };

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Science Public College</Text>
        <View style={styles.iconContainer}>
          <Pressable onPress={() => navigation.navigate('notificationsScreen')}>
            <Ionicons name="notifications" size={30} color="#003F6C" />
          </Pressable>
        </View>
      </View>

      <ScrollView horizontal style={styles.bannerContainer}>
        <Image source={{ uri: 'https://admissions.com.pk/wp-content/uploads/2023/09/bolan-university-of-medical-and-health-sciences-quetta.jpg' }} style={styles.banner} />
        <Image source={{ uri: 'https://www.quettawaly.com/wp-content/uploads/2020/02/Tameer-e-Nau-College-Quetta.jpg' }} style={styles.banner} />
        <Image source={{ uri: 'https://www.quettawaly.com/wp-content/uploads/2020/02/Tameer-e-Nau-College-Quetta.jpg' }} style={styles.banner} />
      </ScrollView>

      <View style={styles.infoContainer}>
        <View style={[styles.infoBox, { backgroundColor: '#FFC107' }]}>
          <Ionicons name="people" size={40} color="#FFF" />
          <Text style={styles.infoText}>Number of Students: 1500</Text>
        </View>
        <View style={[styles.infoBox, { backgroundColor: '#03A9F4' }]}>
          <Ionicons name="document-text" size={40} color="#FFF" />
          <Text style={styles.infoText}>Number of Applications: 500</Text>
        </View>
        <View style={[styles.infoBox, { backgroundColor: '#8BC34A' }]}>
          <Ionicons name="school" size={40} color="#FFF" />
          <Text style={styles.infoText}>Number of Teachers: 100</Text>
        </View>
        <View style={[styles.infoBox, { backgroundColor: '#FF5722' }]}>
          <Ionicons name="albums" size={40} color="#FFF" />
          <Text style={styles.infoText}>Number of Courses: 50</Text>
        </View>
      </View>

      <View style={styles.notificationsContainer}>
        <Text style={styles.sectionTitle}>Announcements:</Text>
        <FlatList
          data={announcements}
          renderItem={({ item }) => (
            <View style={styles.announcementContainer}>
              <Text style={styles.notificationText} key={item.id}>
                {item.text}
              </Text>
              <Button title="Delete" onPress={() => deleteAnnouncement(item.id)} />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
        <TextInput
          style={styles.input}
          placeholder="Add a new announcement"
          value={newAnnouncement}
          onChangeText={setNewAnnouncement}
        />
        <TouchableOpacity style={styles.addButton} onPress={addAnnouncement}>
          <Text style={styles.addButtonText}>Add Announcement</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationSection}>
        <TouchableOpacity style={styles.navigationItem} onPress={() => navigation.navigate("ScienceClgAdminFrame")}>
          <Image
            style={styles.navigationImage}
            source={require("../../assets/leonardo-diffusion-xl-generate-me-a-simple-and-beautiful-desig-0-1.png")}
          />
          <Text style={styles.navigationText}>Application Form</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationItem} onPress={() => navigation.navigate("TopCollegesScreen")}>
          <Image
            style={styles.navigationImage}
            source={require("../../assets/leonardo-diffusion-xl-generate-me-a-simple-and-beautiful-desig-1-11.png")}
          />
          <Text style={styles.navigationText}>Colleges</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationItem} onPress={() => navigation.navigate("AboutUsCollege")}>
          <Image
            style={styles.navigationImage}
            source={require("../../assets/leonardo-diffusion-xl-generate-me-a-simple-and-beautiful-desig-1-11.png")}
          />
          <Text style={styles.navigationText}>About Us!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About Us!</Text>
        <Text style={styles.aboutText}>
          Integrated admission placement system is designed with an aim to provide students a system into which they can enter
          their preferences, abilities, and other relevant data. It will match students with the most appropriate colleges, departments, and majors based on the criteria entered by the student. IAPS will also provide: an automated admissions process that helps streamline.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003F6C',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  bannerContainer: {
    marginBottom: 20,
  },
  banner: {
    width: 350,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoBox: {
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  notificationsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003F6C',
    marginBottom: 10,
  },
  announcementContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#003F6C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationSection: {
    marginBottom: 20,
  },
  navigationItem: {
    alignItems: 'center',
    marginBottom: 16,
  },
  navigationImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  navigationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003F6C',
  },
  aboutContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003F6C',
    marginBottom: 5,
  },
  aboutText: {
    fontSize: 16,
    color: '#333',
  },
});


export default ScinceAdminHomePageCollege;

