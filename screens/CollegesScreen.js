import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import FrameComponent from "../components/FrameComponent";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Collegespage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.collegespage}>
      <View style={[styles.collegespageChild, styles.subjectsParentPosition]} />
      <View style={styles.timesignalwifi}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.signalsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/signals.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>9:20</Text>
      </View>
      <Image
        style={styles.collegespageItem}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.subjectsParent, styles.subjectsParentPosition]}>
        <Text style={[styles.subjects, styles.subjectsTypo]}>Subjects:</Text>
        <Text style={[styles.colleges, styles.subjectsTypo]}>Colleges</Text>
        <Text style={[styles.tameerENauPublicCollege, styles.collegeTypo]}>
          Tameer-E-Nau Public College
        </Text>
        <FrameComponent />
        <Image
          style={[styles.tameerENau1, styles.tameerENau1Layout]}
          contentFit="cover"
          source={require("../assets/tameer-e-nau-1.png")}
        />
        <Text style={[styles.merit80, styles.collegeTypo]}>Merit: 80%</Text>
        <Text style={[styles.islamiaBoysCollege, styles.collegeTypo]}>
          Islamia Boys College
        </Text>
        <Text style={[styles.merit79, styles.meritPosition]}>Merit: 79%</Text>
        <Image
          style={[styles.science1Icon, styles.tameerENau1Layout]}
          contentFit="cover"
          source={require("../assets/science-1.png")}
        />
        <Text style={[styles.scienceCollege, styles.collegeTypo]}>
          Science College
        </Text>
        <Text style={[styles.merit75, styles.meritPosition]}>Merit: 75%</Text>
        <Image
          style={styles.download11}
          contentFit="cover"
          source={require("../assets/download-1-1.png")}
        />
      </View>
      <Text style={[styles.colleges1, styles.textTypo]}>Colleges</Text>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("FinalForm")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  subjectsParentPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    position: "absolute",
  },
  subjectsTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    position: "absolute",
  },
  collegeTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  tameerENau1Layout: {
    width: 364,
    borderRadius: Border.br_20xl,
    left: 13,
    position: "absolute",
  },
  meritPosition: {
    marginLeft: -49,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  collegespageChild: {
    top: 0,
    backgroundColor: Color.colorSteelblue,
    height: 134,
  },
  wifiIcon: {
    height: "47.3%",
    top: "27.03%",
    right: "8.61%",
    bottom: "25.68%",
    left: "83.98%",
    width: "7.42%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  signalsIcon: {
    height: "54.05%",
    width: "6.85%",
    top: "21.62%",
    right: "17.77%",
    bottom: "24.32%",
    left: "75.37%",
  },
  batteryIcon: {
    height: "33.78%",
    top: "32.43%",
    right: "0%",
    bottom: "33.78%",
    left: "92.58%",
    width: "7.42%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text: {
    top: "0%",
    left: "0%",
  },
  timesignalwifi: {
    top: 8,
    left: 34,
    width: 337,
    height: 37,
    position: "absolute",
  },
  collegespageItem: {
    marginLeft: 115,
    top: 65,
    width: 61,
    height: 52,
    left: "50%",
    position: "absolute",
  },
  subjects: {
    top: 9,
    left: 16,
  },
  colleges: {
    marginLeft: -56,
    top: 948,
    left: "50%",
  },
  tameerENauPublicCollege: {
    marginLeft: -148,
    top: 409,
  },
  tameerENau1: {
    top: 185,
    height: 205,
  },
  merit80: {
    marginLeft: -50,
    top: 439,
  },
  islamiaBoysCollege: {
    marginLeft: -111,
    top: 696,
  },
  merit79: {
    top: 730,
  },
  science1Icon: {
    top: 795,
    height: 207,
  },
  scienceCollege: {
    marginLeft: -80,
    top: 1022,
  },
  merit75: {
    top: 1056,
  },
  download11: {
    top: 473,
    left: 20,
    borderRadius: 44,
    width: 350,
    height: 224,
    position: "absolute",
  },
  subjectsParent: {
    bottom: 0,
    backgroundColor: Color.colorWhitesmoke,
    height: 710,
  },
  colleges1: {
    marginLeft: -68,
    top: 73,
    left: "50%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    left: 1,
    top: 63,
    width: 71,
    height: 47,
    position: "absolute",
  },
  collegespage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Collegespage;
