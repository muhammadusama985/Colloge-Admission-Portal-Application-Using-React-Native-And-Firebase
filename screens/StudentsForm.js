import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const StudentsForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.studentsform}>
      <View style={[styles.studentsformChild, styles.studentsformPosition]} />
      <View style={styles.timesignalwifi}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.signalsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/signals.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/battery.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>9:20</Text>
      </View>
      <Image
        style={[styles.studentsformItem, styles.applicationsPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.studentsformInner, styles.studentsformPosition]} />
      <Text style={[styles.applications, styles.applicationsPosition]}>
        Applications!
      </Text>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("HomePageCollege")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
          <View style={[styles.frameGroup, styles.frameWrapperFlexBox]}>
            <View style={[styles.sidWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.sid, styles.sidTypo]}>S.ID</Text>
            </View>
            <View style={[styles.nameWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.sid, styles.sidTypo]}>Name</Text>
            </View>
            <View style={[styles.fnameWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.sid, styles.sidTypo]}>F／NAME</Text>
            </View>
            <View style={[styles.stutusWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.sid, styles.sidTypo]}>STUTUS</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.frameView}>
            <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
              <View style={[styles.frameGroup, styles.frameWrapperFlexBox]}>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
              <View style={[styles.frameGroup, styles.frameWrapperFlexBox]}>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
              <View style={[styles.frameGroup, styles.frameWrapperFlexBox]}>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
              <View style={[styles.frameGroup, styles.frameWrapperFlexBox]}>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
              <View style={[styles.frameGroup, styles.frameWrapperFlexBox]}>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.studentsformInner1, styles.frameLayout]}>
        <View style={styles.frameContainer}>
          <View style={styles.frameView}>
            <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
              <View style={[styles.frameGroup, styles.frameWrapperFlexBox]}>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
              <View style={[styles.frameGroup, styles.frameWrapperFlexBox]}>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
              <View style={[styles.frameGroup, styles.frameWrapperFlexBox]}>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
              <View style={[styles.frameGroup, styles.frameWrapperFlexBox]}>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameContainer, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
              <View style={[styles.frameGroup, styles.frameWrapperFlexBox]}>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
                <View style={[styles.nameWrapper3, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.name1, styles.sidTypo]}>Name</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  studentsform: {
    backgroundColor: Color.white,
    flex: 1,
  },
  studentsformChild: {
    flex: 1,
    backgroundColor: Color.primary,
  },
  studentsformPosition: {
    position: "absolute",
  },
  timesignalwifi: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Padding.medium,
    paddingTop: Padding.medium,
  },
  wifiIcon: {
    width: 30,
    height: 30,
  },
  signalsIcon: {
    width: 30,
    height: 30,
  },
  batteryIcon: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    color: Color.gray,
  },
  textTypo: {
    textAlign: "center",
  },
  studentsformItem: {
    width: 30,
    height: 30,
  },
  applicationsPosition: {
    right: Padding.small,
    bottom: Padding.small,
  },
  applications: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    color: Color.white,
    position: "absolute",
  },
  back: {
    position: "absolute",
    top: Padding.medium,
    left: Padding.medium,
  },
  icon: {
    width: 30,
    height: 30,
  },
  frameParent: {
    marginHorizontal: "5%",
    marginTop: "10%",
    flex: 1,
  },
  frameLayout: {
    flexDirection: "row",
  },
  frameWrapper: {
    flexDirection: "row",
    flex: 1,
  },
  frameWrapperFlexBox: {
    flexDirection: "row",
    flex: 1,
  },
  frameGroup: {
    flexDirection: "row",
    flex: 1,
  },
  sidWrapper: {
    flexDirection: "row",
    flex: 1,
  },
  wrapperSpaceBlock: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: "5%",
  },
  sidTypo: {
    textAlign: "center",
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    color: Color.gray,
  },
  nameWrapper: {
    flexDirection: "row",
    flex: 1,
  },
  fnameWrapper: {
    flexDirection: "row",
    flex: 1,
  },
  stutusWrapper: {
    flexDirection: "row",
    flex: 1,
  },
  frameContainer: {
    flexDirection: "row",
    flex: 1,
  },
  frameView: {
    flexDirection: "row",
    flex: 1,
  },
  frameWrapper1: {
    flexDirection: "row",
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row",
    flex: 1,
  },
  name1: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    color: Color.gray,
  },
  nameWrapper3: {
    flexDirection: "row",
    flex: 1,
  },
  studentsformInner: {
    backgroundColor: Color.white,
    flex: 1,
  },
  studentsformInner1: {
    backgroundColor: Color.white,
    flex: 1,
  },
});

export default StudentsForm;
