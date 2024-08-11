import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <Text style={[styles.math, styles.bioTypo]}>Math</Text>
      <View style={[styles.frameItem, styles.frameChildLayout]} />
      <Text style={[styles.bio, styles.bioTypo]}>Bio</Text>
      <View style={[styles.frameInner, styles.frameChildLayout]} />
      <Text style={[styles.phys, styles.bioTypo]}>Phys</Text>
      <Image
        style={[styles.rectangleIcon, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <Text style={[styles.chem, styles.bioTypo]}>Chem</Text>
      <View style={[styles.rectangleView, styles.frameChildLayout]} />
      <Text style={[styles.isl, styles.bioTypo]}>Isl</Text>
      <View style={[styles.frameChild1, styles.frameChildLayout]} />
      <Text style={[styles.pak, styles.bioTypo]}>Pak</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 110,
    width: 110,
    top: 8,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  bioTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xl,
    top: 43,
    position: "absolute",
  },
  frameChild: {
    left: 17,
    backgroundColor: Color.colorLightskyblue,
  },
  math: {
    left: 37,
  },
  frameItem: {
    left: 144,
    backgroundColor: Color.colorTurquoise,
  },
  bio: {
    left: 177,
  },
  frameInner: {
    left: 271,
    backgroundColor: Color.colorMediumpurple,
  },
  phys: {
    left: 294,
  },
  rectangleIcon: {
    left: 415,
  },
  chem: {
    left: 429,
  },
  rectangleView: {
    left: 542,
    backgroundColor: Color.colorKhaki,
  },
  isl: {
    right: -215,
  },
  frameChild1: {
    left: 669,
    backgroundColor: Color.colorDarksalmon,
  },
  pak: {
    left: 702,
  },
  rectangleParent: {
    top: 46,
    left: 0,
    backgroundColor: Color.colorGainsboro_100,
    width: 390,
    height: 123,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
});

export default FrameComponent;
