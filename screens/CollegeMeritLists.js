import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { storage } from '../firebase'; // Adjust the import according to the path of your firebase.js file
import { listAll, ref, getDownloadURL, getMetadata } from 'firebase/storage';
import * as WebBrowser from 'expo-web-browser';

const ClgMeritListsScreen = () => {
  const [meritLists, setMeritLists] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const fetchMeritLists = async () => {
      try {
        const storageRef = ref(storage, 'Tameer-i-nauMeritLists');
        const result = await listAll(storageRef);
        const meritListPromises = result.items.map(async (item) => {
          const downloadURL = await getDownloadURL(item);
          const metadata = await getMetadata(item);
          const timestamp = metadata.customMetadata?.timestamp || '';
          return { name: item.name, url: downloadURL, timestamp };
        });
        const meritListsData = await Promise.all(meritListPromises);
        meritListsData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setMeritLists(meritListsData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching merit lists:', error);
        Alert.alert('Error', 'Failed to load merit lists.');
        setLoading(false); // Also set loading to false on error
      }
    };

    fetchMeritLists();
  }, []);

  const handlePress = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#003F6C" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tameer-i-nau College Merit Lists</Text>
      <FlatList
        data={meritLists}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row} onPress={() => handlePress(item.url)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 28,
    marginTop: 25,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    color: '#003F6C',
    fontWeight: '500',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ClgMeritListsScreen;
