import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { auth, db, storage } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const SignupScreen = ({ navigation }) => {
  const [fullName, setFirstName] = useState('');
  const [fathername, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [imageUrl, setImageUrl] = useState(null); // State for image URL
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number
  const [loading, setLoading] = useState(false); // Loading state

  const handleSignup = async () => {
    if (password !== confirmedPassword) {
      Alert.alert('Passwords do not match', 'Please make sure your passwords match.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    setLoading(true); // Start loading

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("User registered successfully!");
      Alert.alert('User registered successfully!');

      // Upload image to Firebase Storage
      if (imageUrl) {
        const imageName = `${user.uid}`;
        const storageRef = ref(storage, `profileImages/${imageName}`);
        const img = await fetch(imageUrl);
        const bytes = await img.blob();
        await uploadBytes(storageRef, bytes);
        const downloadURL = await getDownloadURL(storageRef);

        // Save user data including image URL to Firestore
        await setDoc(doc(db, 'Students', user.uid), {
          fullName: fullName,
          fathername: fathername,
          email: email,
          imageUrl: downloadURL, // Save image URL
          phoneNumber: phoneNumber, // Save phone number
        });
      } 
      

      console.log("Document written with ID: ", user.uid);
      setLoading(false); // Stop loading
      navigation.navigate('LoginScreen');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false); // Stop loading

      if (errorCode === 'auth/email-already-in-use') {
        Alert.alert('This email is already registered.');
      } else {
        Alert.alert('An error occurred during registration.', errorMessage);
      }
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const pickImage = async () => {
    // Request permission to access camera roll
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need permission to access your camera roll to pick an image.');
      return;
    }

    // Open image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Image selected: ", result.assets[0].uri); // Debug log
      setImageUrl(result.assets[0].uri); // Set image URL to the selected image's URI
    } else {
      console.log("Image selection was canceled."); // Debug log
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>SignUp now</Text>
      <Text style={styles.subtitle}>Please join us by creating account</Text>
      
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <View style={styles.imageContainer}>
          {imageUrl ? (
            <Image source={{ uri: imageUrl }} style={styles.imagePreview} />
          ) : (
            <Text style={styles.imagePlaceholderText}>UPLOAD USER PROFILE</Text>
          )}
        </View>
      </TouchableOpacity>
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={text => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Father Name"
        value={fathername}
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmedPassword}
        onChangeText={text => setConfirmedPassword(text)}
      />

      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={handleSignup} disabled={loading}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('LoginScreen')} disabled={loading}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  imagePicker: {
    marginBottom: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    overflow: 'hidden',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholderText: {
    textAlign: 'center',
    color: '#aaa',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#aaa',
    marginVertical: 10,
  },
  signInButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signInButtonText: {
    fontSize: 18,
    color: '#333',
  },
  loading: {
    marginTop: 20,
  },
});

export default SignupScreen;
