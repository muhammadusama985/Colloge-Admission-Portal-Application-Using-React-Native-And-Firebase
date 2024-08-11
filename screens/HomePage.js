import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable, Animated, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { collection, getDoc, doc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const announcements = [
  { id: 1, text: '1. HEC fata / Balochistan scholarship phase III.' },
  { id: 2, text: '2. Tameer-e-nau public Application Form HEC fata / Balochistan scholarship phase III. HEC fata / Balochistan scholarship phase III.' },
  { id: 3, text: '1. HEC fata / Balochistan scholarship phase III.' },
  { id: 4, text: '2. Tameer-e-nau public Application Form' },
  { id: 5, text: '1. HEC fata / Balochistan scholarship phase III.' },
  { id: 6, text: '2. Tameer-e-nau public Application Form' },
  { id: 7, text: '1. HEC fata / Balochistan scholarship phase III.' },
  { id: 8, text: '2. Tameer-e-nau public Application Form' },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [darkMode, setDarkMode] = useState(false);
  const [fullName, setFullName] = useState(''); // State to store full name
  const [profileImageUrl, setProfileImageUrl] = useState(null); // State to store profile image URL

  useEffect(() => {
    // Set up the fade animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Firebase Auth and Firestore setup
    const auth = getAuth();
    const db = getFirestore();
    const storage = getStorage();
    
    // Listener for authentication state change
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, get the user document from Firestore
        const uid = user.uid;
        const userDoc = await getDoc(doc(collection(db, 'Students'), uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setFullName(userData.fullName); // Update the full name state

          // Get the profile image URL from Firebase Storage
          const profileImageRef = ref(storage, `profileImages/${uid}`);
          try {
            const url = await getDownloadURL(profileImageRef);
            setProfileImageUrl(url); // Update the profile image URL state
          } catch (error) {
            console.error("Error getting profile image URL: ", error);
          }
        } else {
          console.log("No such document!");
        }
      } else {
        // User is signed out
        console.log("User is signed out");
      }
    });
  }, []);

  return (
    <ScrollView style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={styles.header}>
          <Image source={{ uri: profileImageUrl }} style={styles.avatar} />
        
        <Text style={styles.headerText}>{fullName}</Text>
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
            <Animated.View style={{ opacity: fadeAnim }}>
              <Text style={[styles.notificationText, darkMode && styles.darkText]} key={item.id}>
                {item.text}
              </Text>
            </Animated.View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <View style={styles.linksContainer}>
        <Pressable style={styles.link} onPress={() => navigation.navigate('TopCollegesScreen')}>
          <Ionicons name="school" size={30} color="#003F6C" />
          <Text style={styles.linkText}>Colleges</Text>
        </Pressable>
        <Pressable style={styles.link} onPress={() => navigation.navigate('FAQs')}>
          <Ionicons name="information-circle" size={30} color="#003F6C" />
          <Text style={styles.linkText}>About Us!</Text>
        </Pressable>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About Us!</Text>
        <Text style={[styles.aboutText, darkMode && styles.darkText]}>
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
    backgroundColor: '#FFF',
    padding: 10,
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003F6C',
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
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickAction: {
    width: '30%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#003F6C',
    marginBottom: 10,
  },
  quickActionText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
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
  notificationText: {
    fontSize: 16,
    marginBottom: 10,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  link: {
    alignItems: 'center',
  },
  linkText: {
    color: '#003F6C',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  aboutContainer: {
    padding: 20,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003F6C',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
  },
});

export default HomeScreen;
