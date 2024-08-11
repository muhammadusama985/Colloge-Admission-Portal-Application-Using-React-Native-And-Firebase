import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image, TextInput, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color,FontFamily,FontSize } from "../../GlobalStyles";

const ScienceAdminAboutUsCollege = () => {
  const navigation = useNavigation();

  const initialState = {
    established: "July 1984",
    president: "Fazal Haq Mir (S.I)",
    academicStaff: "38",
    undergraduates: "950",
    location: "Quetta, Balochistan, Pakistan",
    campus: "4.5 acres (0.5km²)",
    colors: "White shirt and Gray trousers",
    nickname: "Tameerians",
    awards: "Sitara-e-Imtiaz",
  };

  const [aboutInfo, setAboutInfo] = useState(initialState);
  const [isEditing, setIsEditing] = useState(false);
  const [editableInfo, setEditableInfo] = useState(initialState);

  const handleSave = () => {
    setAboutInfo(editableInfo);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setEditableInfo(aboutInfo);
    setIsEditing(true);
  };

  const handleChange = (key, value) => {
    setEditableInfo((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../../assets/Tameer e nau.jpg")}
          />
          <Text style={styles.collegeName}>Science Public College</Text>
        </View>

        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>About Us</Text>
          {isEditing ? (
            <>
              {Object.keys(editableInfo).map((key) => (
                <View key={key} style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}:</Text>
                  <TextInput
                    style={styles.input}
                    value={editableInfo[key]}
                    onChangeText={(value) => handleChange(key, value)}
                  />
                </View>
              ))}
              <Button title="Save" onPress={handleSave} />
            </>
          ) : (
            <>
              <Text style={styles.aboutText}>
                Science Public College is an educational institution in Balochistan, Pakistan. It was established in July 1984 with the motto "Wisdom is the base of my deen (religion) and knowledge is my power".
              </Text>
              {Object.keys(aboutInfo).map((key) => (
                <Text key={key} style={styles.aboutDetails}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {aboutInfo[key]}
                </Text>
              ))}
              <Button title="Edit" onPress={handleEdit} />
            </>
          )}
        </View>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: '#006064',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#006064',
  },
  collegeName: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    color: '#006064',
  },
  sectionTitle: {
    fontSize: 25,
    fontFamily: FontFamily.poppinsBold,
    color: '#004d40',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  aboutSection: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  aboutText: {
    fontSize: 18,
    fontFamily: FontFamily.montserratRegular,
    color: '#004d40',
    marginBottom: 10,
  },
  aboutDetails: {
    fontSize: 17,
    fontFamily: FontFamily.montserratRegular,
    color: '#004d40',
    marginBottom: 10,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: FontSize.size_m,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorBlack,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.colorGray,
    borderRadius: 5,
    padding: 10,
    fontSize: FontSize.size_m,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorBlack,
  },
});

export default ScienceAdminAboutUsCollege;
