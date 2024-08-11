import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


const colleges = [
  {
    id: 1,
    name: 'Harvard University',
    image: 'https://www.harvard.edu/wp-content/uploads/2019/06/harvard-yard.jpg',
    rating: 4.9,
    criteria: 'Excellent',
    location: 'Cambridge, MA',
  },
  {
    id: 2,
    name: 'Stanford University',
    image: 'https://www.stanford.edu/wp-content/uploads/2017/03/stanford-oval.jpg',
    rating: 4.8,
    criteria: 'Excellent',
    location: 'Stanford, CA',
  },
  {
    id: 3,
    name: 'Tameer e nau Public College, Quetta ',
    image: 'https://www.harvard.edu/wp-content/uploads/2019/06/harvard-yard.jpg',
    rating: 4.5,
    criteria: 'Excellent',
    location: 'Quetta, Balochistan',
  },
  {
    id: 4,
    name: 'Stanford University',
    image: 'https://www.stanford.edu/wp-content/uploads/2017/03/stanford-oval.jpg',
    rating: 4.8,
    criteria: 'Excellent',
    location: 'Stanford, CA',
  },
  // Add more colleges here...
];

const TopColleges = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedColleges, setSortedColleges] = useState(colleges);
  const [sortCriteria, setSortCriteria] = useState('rating');
  const navigation = useNavigation();

  useEffect(() => {
    const filteredColleges = colleges.filter(college =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSortedColleges(filteredColleges);
  }, [searchQuery]);

  useEffect(() => {
    const sorted = [...sortedColleges].sort((a, b) => b[sortCriteria] - a[sortCriteria]);
    setSortedColleges(sorted);
  }, [sortCriteria]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleViewDetails = (college) => {
    // Navigate to a detailed view of the college
    navigation.navigate('AboutUsCollege', { college });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Top Colleges</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search colleges..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.sortContainer}>
        <Text style={styles.sortText}>Sort by:</Text>
        <Picker
          selectedValue={sortCriteria}
          style={styles.picker}
          onValueChange={(itemValue) => setSortCriteria(itemValue)}
        >
          <Picker.Item label="Rating" value="rating" />
          <Picker.Item label="Criteria" value="criteria" />
        </Picker>
      </View>

      <FlatList
        data={sortedColleges}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.collegeContainer}>
            <Image source={{ uri: item.image }} style={styles.collegeImage} />
            <View style={styles.collegeDetails}>
              <Text style={styles.collegeName}>{item.name}</Text>
              <Text style={styles.collegeLocation}>{item.location}</Text>
              <Text style={styles.collegeRating}>Rating: {item.rating}</Text>
              <Text style={styles.collegeCriteria}>Criteria: {item.criteria}</Text>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => handleViewDetails(item)}
              >
                <Text style={styles.detailsButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:50,
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
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    borderColor: '#003F6C',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: '#000',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sortText: {
    fontSize: 16,
    marginRight: 10,
    color: '#003F6C',
  },
  picker: {
    height: 50,
    width: 150,
  },
  collegeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#e9f1f7',
    borderRadius: 10,
    padding: 10,
  },
  collegeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  collegeDetails: {
    flex: 1,
  },
  collegeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003F6C',
  },
  collegeLocation: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  collegeRating: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  collegeCriteria: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: '#003F6C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TopColleges;
