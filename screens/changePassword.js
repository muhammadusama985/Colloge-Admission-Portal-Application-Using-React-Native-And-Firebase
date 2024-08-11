import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {
  const navigation = useNavigation();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleBackPress = () => {
    navigation.navigate('Profile');
  };

  const handleChangePassword = () => {
    let valid = true;

    if (!currentPassword || !newPassword || !confirmNewPassword || !email) {
      Alert.alert('Error', 'All fields are required');
      valid = false;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (newPassword !== confirmNewPassword) {
      setPasswordError('New passwords do not match');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // Call the API to change the password and email
      // Placeholder for the actual API call
      console.log('Password and email changed successfully');
      Alert.alert('Success', 'Your password and email have been updated successfully');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Change Password</Text>
      </View>
      <Text style={styles.title}>Change Password</Text>
      <CustomTextInput
        placeholder="Current Password"
        value={currentPassword}
        secureTextEntry
        onChangeText={setCurrentPassword}
      />
      <CustomTextInput
        placeholder="New Password"
        value={newPassword}
        secureTextEntry
        onChangeText={setNewPassword}
      />
      <CustomTextInput
        placeholder="Confirm New Password"
        value={confirmNewPassword}
        secureTextEntry
        onChangeText={setConfirmNewPassword}
        errorMessage={passwordError}
      />
      <CustomTextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        errorMessage={emailError}
      />
      <CustomButton title="Update" onPress={handleChangePassword} />
    </View>
  );
};

const CustomTextInput = ({ placeholder, value, onChangeText, secureTextEntry, keyboardType, autoCapitalize, errorMessage }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
    />
    {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
  </View>
);

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: '#003F6C',
    padding: 10,
    borderRadius: 10,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003F6C',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#003F6C',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChangePassword;
