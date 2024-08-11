import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const CardScreen = () => {
  const navigation = useNavigation();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name="star"
          size={16}
          color={i <= rating ? '#FFD700' : '#E0E0E0'}
          style={styles.star}
        />
      );
    }
    return stars;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.collegeName}>Tameer-i-nau College Quetta</Text>
          <View style={styles.row}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.subjectHeading}>Subjects:</Text>
              <Text style={styles.subjects}>Biology, Physics, Chemistry</Text>
              <Text style={styles.merit}>Merit: <Text style={styles.meritValue}>80%</Text></Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>Rating: </Text>
                {renderStars(5)}
                <Text style={styles.ratingValue}>5.0</Text>
              </View>
              <TouchableOpacity 
                style={styles.applyButton} 
                onPress={() => navigation.navigate('PersonalInfo')}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.collegeName}>Science College Quetta</Text>
          <View style={styles.row}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.subjectHeading}>Subjects:</Text>
              <Text style={styles.subjects}>Biology, Physics, Chemistry</Text>
              <Text style={styles.merit}>Merit: <Text style={styles.meritValue}>85%</Text></Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>Rating: </Text>
                {renderStars(4.7)}
                <Text style={styles.ratingValue}>4.7</Text>
              </View>
              <TouchableOpacity 
                style={styles.applyButton} 
                onPress={() => navigation.navigate('ScienceClgScreen')}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>    
          </View>
        </View>

        {/* Add more cards as needed */}
        <View style={styles.card}>
          <Text style={styles.collegeName}>Islamia Boys College Quetta</Text>
          <View style={styles.row}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.subjectHeading}>Subjects:</Text>
              <Text style={styles.subjects}>Biology, Physics, Chemistry</Text>
              <Text style={styles.merit}>Merit: <Text style={styles.meritValue}>85%</Text></Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>Rating: </Text>
                {renderStars(4.7)}
                <Text style={styles.ratingValue}>4.7</Text>
              </View>
              <TouchableOpacity 
                style={styles.applyButton} 
                onPress={() => navigation.navigate('IslamiaBoysClg')}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>    
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.collegeName}>Islamia Girls College Quetta</Text>
          <View style={styles.row}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.subjectHeading}>Subjects:</Text>
              <Text style={styles.subjects}>Biology, Physics, Chemistry</Text>
              <Text style={styles.merit}>Merit: <Text style={styles.meritValue}>85%</Text></Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>Rating: </Text>
                {renderStars(4.7)}
                <Text style={styles.ratingValue}>4.7</Text>
              </View>
              <TouchableOpacity 
                style={styles.applyButton} 
                onPress={() => navigation.navigate('IslamiaGirlsClg')}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>    
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.collegeName}>Technical Boys College Quetta</Text>
          <View style={styles.row}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.subjectHeading}>Subjects:</Text>
              <Text style={styles.subjects}>Biology, Physics, Chemistry</Text>
              <Text style={styles.merit}>Merit: <Text style={styles.meritValue}>85%</Text></Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>Rating: </Text>
                {renderStars(4.7)}
                <Text style={styles.ratingValue}>4.7</Text>
              </View>
              <TouchableOpacity 
                style={styles.applyButton} 
                onPress={() => navigation.navigate('TechnicalBoysClg')}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>    
          </View>
        </View>


        <View style={styles.card}>
          <Text style={styles.collegeName}>Degree Cant College Quetta</Text>
          <View style={styles.row}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.subjectHeading}>Subjects:</Text>
              <Text style={styles.subjects}>Biology, Physics, Chemistry</Text>
              <Text style={styles.merit}>Merit: <Text style={styles.meritValue}>85%</Text></Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>Rating: </Text>
                {renderStars(4.7)}
                <Text style={styles.ratingValue}>4.7</Text>
              </View>
              <TouchableOpacity 
                style={styles.applyButton} 
                onPress={() => navigation.navigate('CantGirlsDegreeClg')}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>    
          </View>
        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    width: 340,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    height: 250,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  collegeName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C3E50',
  },
  image: {
    width: 130,
    height: 150,
    borderRadius: 15,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  subjectHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2980B9',
  },
  subjects: {
    fontSize: 16,
    marginBottom: 10,
    color: '#34495E',
  },
  merit: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#27AE60',
  },
  meritValue: {
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E67E22',
  },
  ratingValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#E67E22',
  },
  star: {
    marginLeft: 2,
  },
  applyButton: {
    marginTop: 10,
    backgroundColor: '#3498DB',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CardScreen;
