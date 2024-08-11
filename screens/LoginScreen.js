import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase';
import {  collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleLogin = () => {
    setLoading(true); // Start loading
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(" User logged in successfully ! ", user.email)
        setLoading(false); // Stop loading
        navigation.navigate('HomeTabs');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false); // Stop loading
        if (errorCode === "auth/user-not-found") {
          Alert.alert("User not registered", "Please register first.");
        } else {
          Alert.alert("Login Error", errorMessage);
        }
      });
  };

  const handleForgetPassword = async () => {
    if (!email) {
      Alert.alert("Enter Email", "Please enter your email to reset the password.");
      return;
    }
    setLoading(true); // Start loading
    const q = query(collection(db, "Students"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      setLoading(false); // Stop loading
      Alert.alert("User not registered", "Please register first.");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setLoading(false); // Stop loading
          Alert.alert("Password reset link has been sent to your email");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setLoading(false); // Stop loading
          Alert.alert("Error", errorMessage);
        });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Image source={require('../assets/login-1.png')} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgetPassword} disabled={loading}>
        <Text style={styles.resetText}>Forgot your password? Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpTextContainer} onPress={() => navigation.navigate('SignupScreen')} disabled={loading}>
        <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 100,
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 65,
  },
  button: {
    backgroundColor: '#003F6C',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 35,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
  },
  resetText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 16,
  },
  signUpTextContainer: {
    marginTop: 100,
  },
  signUpText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  loading: {
    marginTop: 20,
  },
});

export default LoginScreen;
