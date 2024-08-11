import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const ApplicationForm = ({ navigation }) => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [programDetails, setProgramDetails] = useState({});
  const [quotas, setQuotas] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [confirmation, setConfirmation] = useState(false);

  const handlePersonalInfoChange = (key, value) => {
    setPersonalInfo({ ...personalInfo, [key]: value });
  };

  const handleEducationInfoChange = (key, value) => {
    setEducationInfo({ ...educationInfo, [key]: value });
  };

  const handleProgramDetailsChange = (key, value) => {
    setProgramDetails({ ...programDetails, [key]: value });
  };

  const handleQuotaChange = (index, value) => {
    const newQuotas = [...quotas];
    newQuotas[index] = value;
    setQuotas(newQuotas);
  };

  const handleRequirementChange = (index, value) => {
    const newRequirements = [...requirements];
    newRequirements[index] = value;
    setRequirements(newRequirements);
  };

  const addQuota = () => {
    setQuotas([...quotas, '']);
  };

  const addRequirement = () => {
    setRequirements([...requirements, '']);
  };

  const removeQuota = (index) => {
    const newQuotas = quotas.filter((_, i) => i !== index);
    setQuotas(newQuotas);
  };

  const removeRequirement = (index) => {
    const newRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(newRequirements);
  };

  const handleConfirmation = () => {
    setConfirmation(true);
    // handle form submission or navigate to another screen
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn} exiting={FadeOut}>
        {!confirmation ? (
          <>
            <Text style={styles.sectionTitle}>Personal Information:</Text>
            <View style={styles.section}>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#666666"
                onChangeText={(value) => handlePersonalInfoChange('fullName', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Father Name"
                placeholderTextColor="#666666"
                onChangeText={(value) => handlePersonalInfoChange('fathername', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="CNIC"
                placeholderTextColor="#666666"
                onChangeText={(value) => handlePersonalInfoChange('cnic', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Contact Number"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                onChangeText={(value) => handlePersonalInfoChange('contact', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Father's Number"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                onChangeText={(value) => handlePersonalInfoChange('fathernumber', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#666666"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={(value) => handlePersonalInfoChange('email', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Gender"
                placeholderTextColor="#666666"
                onChangeText={(value) => handlePersonalInfoChange('gender', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Date of Birth"
                placeholderTextColor="#666666"
                onChangeText={(value) => handlePersonalInfoChange('dob', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#666666"
                onChangeText={(value) => handlePersonalInfoChange('address', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Province"
                placeholderTextColor="#666666"
                onChangeText={(value) => handlePersonalInfoChange('province', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="District"
                placeholderTextColor="#666666"
                onChangeText={(value) => handlePersonalInfoChange('district', value)}
              />
            </View>

            <Text style={styles.sectionTitle}>Education:</Text>
            <View style={styles.section}>
              <TextInput
                style={styles.input}
                placeholder="Institute Name"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleEducationInfoChange('Institute', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Board Name"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleEducationInfoChange('board', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="School Address"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleEducationInfoChange('schooladdress', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Obtained Marks"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                onChangeText={(value) => handleEducationInfoChange('Marks', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Percentage"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleEducationInfoChange('Percentage', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Division"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleEducationInfoChange('division', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Passing Year"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                onChangeText={(value) => handleEducationInfoChange('passingyear', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Extracurricular Activities"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleEducationInfoChange('extraactivities', value)}
              />
            </View>

            <Text style={styles.sectionTitle}>Program Details:</Text>
            <View style={styles.section}>
              <TextInput
                style={styles.input}
                placeholder="College Name"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleProgramDetailsChange('college', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Board Name"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleProgramDetailsChange('cboard', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Subject"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleProgramDetailsChange('subject', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Session"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleProgramDetailsChange('session', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Fee Structure"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleProgramDetailsChange('fee', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Others"
                placeholderTextColor="#666666"
                onChangeText={(value) => handleProgramDetailsChange('others', value)}
              />
            </View>

            <Text style={styles.sectionTitle}>Special Quotas:</Text>
            <View style={styles.section}>
              {quotas.map((quota, index) => (
                <View key={index} style={styles.quotaContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder={`Quota ${index + 1}`}
                    placeholderTextColor="#666666"
                    value={quota}
                    onChangeText={(value) => handleQuotaChange(index, value)}
                  />
                  <TouchableOpacity onPress={() => removeQuota(index)} style={styles.removeButton}>
                    <AntDesign name="close" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity onPress={addQuota} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Quota</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Specific Requirements:</Text>
            <View style={styles.section}>
              {requirements.map((requirement, index) => (
                <View key={index} style={styles.requirementContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder={`Requirement ${index + 1}`}
                    placeholderTextColor="#666666"
                    value={requirement}
                    onChangeText={(value) => handleRequirementChange(index, value)}
                  />
                  <TouchableOpacity onPress={() => removeRequirement(index)} style={styles.removeButton}>
                    <AntDesign name="close" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity onPress={addRequirement} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Requirement</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Upload Documents</Text>
            <View style={styles.section}>
              <TouchableOpacity style={styles.uploadButton} >
                <AntDesign name="upload" size={24} color="white" />
                <Text style={styles.uploadText}>Upload Documents</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleConfirmation}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View style={styles.confirmation}>
            <Text style={styles.confirmationText}>Form Updated successfully!</Text>
          </View>
        )}
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
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
  confirmation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  uploadButton: {
    flexDirection: 'row',
    backgroundColor: '#003F6C',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  quotaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  requirementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeButton: {
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#003F6C',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ApplicationForm;
