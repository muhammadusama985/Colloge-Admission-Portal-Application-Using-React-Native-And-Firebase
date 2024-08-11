import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FinalForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          contentFit="cover"
          source={require("../assets/amk-1.png")}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>Abdul Musawir Khan</Text>
          <Text style={styles.cnic}>54400-9773985-3</Text>
        </View>
      </View>

      <Pressable
        style={styles.backButton}
        onPress={() => navigation.navigate("PersonalInfo")}
      >
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Personal Information</Text>
          <Image
            style={styles.checkIcon}
            contentFit="cover"
            source={require("../assets/solarusercheckbold.png")}
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Contact Information</Text>
          <Image
            style={styles.checkIcon}
            contentFit="cover"
            source={require("../assets/solarusercheckbold.png")}
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Education Details</Text>
          <Image
            style={styles.checkIcon}
            contentFit="cover"
            source={require("../assets/solarusercheckbold.png")}
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Program Details</Text>
          <Image
            style={styles.checkIcon}
            contentFit="cover"
            source={require("../assets/solarusercheckbold.png")}
          />
        </View>
      </View>

      <Pressable
        style={styles.submitButton}
        onPress={() => alert('Application Submitted Thank You!!')} 
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#003F6C",
    padding: 20,
    borderRadius: 10,
    marginTop:40,
  },
  profileImage: {
    width: 108,
    height: 108,
    borderRadius: 56,
  },
  headerTextContainer: {
    marginTop:50,
    marginLeft: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cnic: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFFFFF",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  infoContainer: {
    marginTop: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  checkIcon: {
    width: 24,
    height: 24,
  },
  submitButton: {
    marginTop: 40,
    backgroundColor: "#003F6C",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

export default FinalForm;
