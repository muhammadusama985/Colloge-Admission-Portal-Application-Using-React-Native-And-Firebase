import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Education1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.education}>
      <Image
        style={styles.educationChild}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <View style={[styles.timesignalwifi, styles.formPosition]}>
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
        <Text style={[styles.text, styles.textTypo2]}>9:20</Text>
      </View>
      <Image
        style={[styles.educationItem, styles.nextPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={[styles.applicationForm, styles.nextPosition]}>
        Application Form
      </Text>
      <Text style={[styles.schoolName, styles.nameTypo]}>School Name:</Text>
      <View style={[styles.educationInner, styles.educationBorder]} />
      <Text style={[styles.boardName, styles.nameTypo]}>Board Name:</Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.obtainedMarks, styles.percentageTypo]}>
        Obtained Marks:
      </Text>
      <View style={[styles.educationChild1, styles.educationChildPosition]} />
      <View style={[styles.educationChild2, styles.rectangleViewPosition]} />
      <Text style={[styles.field, styles.fieldTypo]}>Field:</Text>
      <Text style={[styles.percentage, styles.percentageTypo]}>
        Percentage:
      </Text>
      <Text style={[styles.division, styles.fieldTypo]}>Division:</Text>
      <View style={[styles.educationChild3, styles.educationChildLayout]} />
      <View style={[styles.educationChild4, styles.educationChildPosition]} />
      <Text style={[styles.total, styles.fieldTypo]}>Total:</Text>
      <View style={[styles.educationChild5, styles.educationChildLayout]} />
      <View style={[styles.educationChild6, styles.educationBorder]} />
      <Pressable
        style={[styles.next, styles.nextPosition]}
        onPress={() => navigation.navigate("ProgramDetails1")}
      >
        <Text style={[styles.next1, styles.textTypo2]}>Next</Text>
      </Pressable>
      <View style={[styles.form, styles.formPosition]}>
        <Image
          style={[styles.formChild, styles.formLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <Image
          style={[styles.formItem, styles.formLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-41.png")}
        />
        <Image
          style={[styles.formInner, styles.formInnerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.formInnerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.formChild1, styles.formChildLayout]}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        <Image
          style={[styles.formChild2, styles.formChildLayout]}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>1</Text>
        <Text style={[styles.text2, styles.textTypo]}>2</Text>
        <Text style={[styles.text3, styles.textTypo]}>3</Text>
        <Text style={[styles.text4, styles.textTypo]}>4</Text>
      </View>
      <Text style={styles.e}>EDUCATION</Text>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("PersonalInfo1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconEdit, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-edit1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formPosition: {
    left: 34,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  nextPosition: {
    left: "50%",
    position: "absolute",
  },
  nameTypo: {
    height: 28,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: 19,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  educationBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  rectangleViewPosition: {
    marginLeft: -101,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  percentageTypo: {
    width: 131,
    height: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: 19,
    textAlign: "left",
    position: "absolute",
  },
  educationChildPosition: {
    width: 133,
    marginLeft: 53,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  fieldTypo: {
    width: 84,
    height: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  educationChildLayout: {
    width: 126,
    marginLeft: -101,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  formLayout: {
    bottom: "9.09%",
    width: "11.33%",
    height: "90.91%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formInnerLayout: {
    bottom: "0%",
    top: "9.09%",
    width: "11.33%",
    height: "90.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formChildLayout: {
    bottom: "35.15%",
    top: "45.45%",
    width: "19%",
    height: "19.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  educationChild: {
    top: -94,
    left: -42,
    width: 468,
    height: 322,
    position: "absolute",
  },
  wifiIcon: {
    height: "47.3%",
    top: "27.03%",
    right: "8.61%",
    bottom: "25.68%",
    left: "83.98%",
    width: "7.42%",
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
    bottom: "33.78%",
    left: "92.58%",
    right: "0%",
    width: "7.42%",
    maxWidth: "100%",
  },
  text: {
    fontSize: FontSize.size_5xl_7,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  timesignalwifi: {
    top: 8,
    width: 337,
    height: 37,
  },
  educationItem: {
    marginLeft: 115,
    top: 65,
    width: 61,
    height: 52,
  },
  applicationForm: {
    marginLeft: -110,
    top: 99,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
  },
  schoolName: {
    top: 299,
    width: 125,
  },
  educationInner: {
    marginLeft: -102,
    top: 327,
    height: 38,
    width: 293,
  },
  boardName: {
    top: 379,
    width: 109,
  },
  rectangleView: {
    top: 412,
    width: 293,
  },
  obtainedMarks: {
    top: 459,
  },
  educationChild1: {
    top: 495,
    height: 37,
  },
  educationChild2: {
    top: 664,
    width: 212,
  },
  field: {
    top: 629,
    left: 47,
  },
  percentage: {
    top: 543,
  },
  division: {
    top: 546,
    left: 231,
  },
  educationChild3: {
    top: 581,
  },
  educationChild4: {
    top: 579,
    height: 38,
  },
  total: {
    left: 237,
    top: 459,
  },
  educationChild5: {
    top: 495,
  },
  educationChild6: {
    height: "4.38%",
    marginLeft: 61,
    top: "91.23%",
    bottom: "4.38%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorSteelblue,
    width: 96,
  },
  next1: {
    height: "3.79%",
    marginLeft: 85,
    fontSize: FontSize.size_xl,
    width: 76,
  },
  next: {
    top: "91.82%",
  },
  formChild: {
    right: "88.67%",
    left: "0%",
  },
  formItem: {
    right: "59%",
    left: "29.67%",
  },
  formInner: {
    right: "29%",
    left: "59.67%",
  },
  ellipseIcon: {
    left: "88.67%",
    right: "0%",
  },
  lineIcon: {
    top: "43.33%",
    right: "70.33%",
    bottom: "37.27%",
    left: "10.67%",
    width: "19%",
    height: "19.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formChild1: {
    right: "40%",
    left: "41%",
  },
  formChild2: {
    right: "9.67%",
    left: "71.33%",
  },
  text1: {
    left: "4.33%",
    top: "15.15%",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_lg,
  },
  text2: {
    left: "33.33%",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_lg,
    top: "9.09%",
  },
  text3: {
    left: "63.67%",
    top: "15.15%",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_lg,
  },
  text4: {
    left: "92.33%",
    top: "15.15%",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_lg,
  },
  form: {
    top: 146,
    width: 300,
    height: 33,
  },
  e: {
    marginLeft: -67,
    top: 245,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    left: 3,
    top: 52,
    width: 71,
    height: 47,
    position: "absolute",
  },
  iconEdit: {
    height: "5.81%",
    width: "15.9%",
    top: "24.05%",
    right: "1.79%",
    bottom: "70.14%",
    left: "82.31%",
  },
  education: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Education1;
