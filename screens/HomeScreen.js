import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreen}>
      <View style={styles.homeScreenChild} />
      <Pressable
        style={styles.signup}
        onPress={() => navigation.navigate("SignupScreen")}
      >
      <Text style={styles.signup1}>Signup</Text>
      </Pressable>
      <Image
        style={[styles.leonardoDiffusionXlGenerateIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/leonardo-diffusion-xl-generate-an-image-for-the-front-end-of-m-0-1.png")}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <View style={[styles.buttonChild, styles.buttonPosition]} />
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.button1}
        onPress={() => navigation.navigate("HomeScreenCollege")}
      >
      <View style={[styles.buttonItem, styles.buttonPosition]} />
      <Text style={[styles.student, styles.loginTypo]}>Student</Text>
      </Pressable>
      
      <Text style={styles.welcomeToThe}>{`Welcome To The College         
    Admission System!`}</Text>
      <Text style={styles.student1}>Student</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    position: "absolute",
    width: "100%",
  },
  loginTypo: {
    left: "28.4%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    position: "absolute",
  },
  iconLayout: {
    width: "6.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeScreenChild: {
    height: "8.18%",
    width: "41.54%",
    top: "67.1%",
    right: "5.64%",
    bottom: "27.73%",
    left: "52.82%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorSteelblue,
    position: "absolute",
  },
  signup1: {
    textAlign: "centre",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
  },
  signup: {
    left: "64.5%",
    top: "69.5%",
    position: "absolute",
  },
  leonardoDiffusionXlGenerateIcon: {
    height: "60.07%",
    bottom: "38.98%",
    borderRadius: Border.br_23xl,
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    top: "0.95%",
    width: "100%",
  },
  buttonChild: {
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorSteelblue,
    top: "0%",
    height: "100%",
  },
  login: {
    top: "30.19%",
    
  },
  button: {
    top: 547,
    left: 21,
    width: 162,
    height: 65,
    textAlign: "center",
    position: "absolute",
  },
  buttonItem: {
    backgroundColor: Color.colorLightsteelblue,
    borderColor: Color.colorLightsteelblue,
  },
  student: {
    top: "23.27%",
    display: "none",
  },
  button1: {
    top: 63,
    left: 248,
    width: 125,
    height: 52,
    position: "absolute",
  },

  welcomeToThe: {
    marginLeft: -130,
    bottom: 40,
    left: "50%",
    fontSize: FontSize.size_9xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    width: 423,
    height: 128,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    position: "absolute",
  },
  student1: {
    top: 76,
    left: 272,
    color: Color.colorSteelblue,
    width: 105,
    height: 33,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    position: "absolute",
  },
  homeScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeScreen;
