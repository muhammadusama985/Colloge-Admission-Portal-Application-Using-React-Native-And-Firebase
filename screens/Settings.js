import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const Settings = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const userData = {
      name: 'Abdul Musawir Khan',
      fname: 'Abdul Razaq Khilji',
      cnic: '5440097739853',
      dob: '12/02/2002',
      gender: 'Male',
      email: 'musawirkhilji88@gmail.com',
      phone: '+92353753736',
      nationality: 'Pakistani',
    };
    setUser(userData);
  }, []);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const onLogOutPress = () => {
    navigation.navigate('HomeScreen');
  };

  const onUpdatePress = () => {
    setIsEditing(false);
  };

  const onSubmitFeedback = () => {
    Alert.alert('Feedback', 'Thank you for your feedback!');
    setFeedback('');
  };

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={styles.blockContainer}>
        <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('Personaldetails')}>
          <Ionicons name="person-circle-outline" size={50} color={darkMode ? "#FFF" : "#003F6C"} />
          <Text style={[styles.blockText, darkMode && styles.darkText]}>Personal Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('FAQs')}>
          <Ionicons name="help-circle-outline" size={50} color={darkMode ? "#FFF" : "#003F6C"} />
          <Text style={[styles.blockText, darkMode && styles.darkText]}>FAQs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('changePassword')}>
          <Ionicons name="lock-closed-outline" size={50} color={darkMode ? "#FFF" : "#003F6C"} />
          <Text style={[styles.blockText, darkMode && styles.darkText]}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('CustomerSupport')}>
          <Ionicons name="headset-outline" size={50} color={darkMode ? "#FFF" : "#003F6C"} />
          <Text style={[styles.blockText, darkMode && styles.darkText]}>Customer Support</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.settingsContainer}>
        <Text style={[styles.settingsTitle, darkMode && styles.darkText]}>Settings</Text>
        <View style={styles.settingItem}>
          <Text style={[styles.settingLabel, darkMode && styles.darkText]}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
        <View style={styles.feedbackContainer}>
          <Text style={[styles.feedbackLabel, darkMode && styles.darkText]}>Feedback</Text>
          <TextInput
            style={[styles.feedbackInput, darkMode && styles.darkInput]}
            value={feedback}
            onChangeText={setFeedback}
            placeholder="Type your feedback here..."
            placeholderTextColor={darkMode ? '#BBB' : '#666'}
          />
          <TouchableOpacity style={styles.submitButton} onPress={onSubmitFeedback}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={onLogOutPress} style={[styles.button, styles.logoutButton]}>
        <AntDesign name="logout" size={24} color="white" />
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003F6C',
  },
  darkText: {
    color: '#FFF',
  },
  welcomeText: {
    fontSize: 20,
    color: '#003F6C',
  },
  blockContainer: {
    marginTop: 20,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9f1f7',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  blockText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#003F6C',
  },
  settingsContainer: {
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
  },
  settingsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003F6C',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 18,
    color: '#003F6C',
  },
  feedbackContainer: {
    marginTop: 20,
  },
  feedbackLabel: {
    fontSize: 18,
    color: '#003F6C',
    marginBottom: 10,
  },
  feedbackInput: {
    height: 100,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  darkInput: {
    backgroundColor: '#333',
    color: '#FFF',
    borderColor: '#555',
  },
  submitButton: {
    backgroundColor: '#003F6C',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
  },
  logoutButton: {
    alignSelf: 'center',
    backgroundColor: '#FF0000',
    marginBottom:40,
  },
});

export default Settings;
