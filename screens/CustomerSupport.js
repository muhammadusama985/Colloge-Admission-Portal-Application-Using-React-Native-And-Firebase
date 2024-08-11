import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomerSupport = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    // Placeholder for API call to submit support request
    console.log('Support request submitted', { name, email, message });
    Alert.alert('Success', 'Your support request has been submitted');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Customer Support</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.contactInfo}>
        <Text style={styles.contactTitle}>Contact Information</Text>
        <View style={styles.contactRow}>
          <Ionicons name="call-outline" size={24} color="#003F6C" />
          <Text style={styles.contactText}>+123-456-7890</Text>
        </View>
        <View style={styles.contactRow}>
          <Ionicons name="mail-outline" size={24} color="#003F6C" />
          <Text style={styles.contactText}>support@example.com</Text>
        </View>
        <View style={styles.contactRow}>
          <Ionicons name="location-outline" size={24} color="#003F6C" />
          <Text style={styles.contactText}>123 Support St, Help City, CO 12345</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003F6C',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
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
  contactInfo: {
    marginTop: 30,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003F6C',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
});

export default CustomerSupport;
