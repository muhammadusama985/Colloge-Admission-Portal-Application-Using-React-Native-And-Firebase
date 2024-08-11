import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const loginDetails = [
      { email: 'Test@gmail.com', password: 'password', screen: 'CollegeTabs' },
      { email: 'science@gmail.com', password: 'science786', screen: 'ScienceCollegeTabs' }
    ];

    const user = loginDetails.find(user => user.email === email && user.password === password);

    if (user) {
      Alert.alert('Logged in!');
      navigation.navigate(user.screen);
    } else {
      Alert.alert('Incorrect email or password');
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
        secureTextEntry={true} // Hides password characters
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signUpTextContainer} onPress={() => navigation.navigate('SignupScreen')}>
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
    marginBottom: 65, // Added for spacing from bottom
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
  signUpTextContainer: {
    marginTop: 100,
  },
  signUpText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
