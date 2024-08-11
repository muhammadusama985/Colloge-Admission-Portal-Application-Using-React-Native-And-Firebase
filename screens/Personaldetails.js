import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { auth, db } from '../firebase'; // Import your Firebase configuration

const Personaldetails = ({ navigation }) => {
  const [fullName, setFullName] = useState(''); 
  const [fathername, setFatherName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [user, setUser] = useState(null); // Initialize user state
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity value for the profile image
  const [profileImageUrl, setProfileImageUrl] = useState(null); // State to store profile image URL

  useEffect(() => {
    // Fade in animation for profile image
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Listener for authentication state change
    const auth = getAuth();
    const db = getFirestore();
    const storage = getStorage();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, query the user document from Firestore
        const uid = user.uid;
        const userDocRef = doc(db, 'Students', uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser(userData); // Update the user state
          setFullName(userData.fullName);
          setFatherName(userData.fathername);
          setEmail(userData.email);
          setPhoneNumber(userData.phoneNumber);

          // Fetch profile image URL from Firebase Storage
          const imageRef = ref(storage, `profileImages/${uid}`);
          try {
            const url = await getDownloadURL(imageRef);
            setProfileImageUrl(url);
          } catch (error) {
            console.log("Error fetching profile image: ", error);
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

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {profileImageUrl && (
          <Animated.Image
            source={{ uri: profileImageUrl }}
            style={[styles.profileImage, { opacity: fadeAnim }]}
          />
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{fullName}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Father Name:</Text>
        <Text style={styles.text}>{fathername}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{email}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.text}>{phoneNumber}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    backgroundColor: '#003F6C',
    padding: 20,
    borderRadius: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5,
  },
});

export default Personaldetails;
