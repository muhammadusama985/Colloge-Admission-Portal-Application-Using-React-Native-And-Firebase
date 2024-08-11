import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ScienceAdminAboutUsCollege from './screens/ScienceClgAdmin/ScienceAdminAboutUsCollege';
import ScinceAdminHomePageCollege from './screens/ScienceClgAdmin/ScienceAdminHomePageCollege';
import ScienceAdminMeritList from './screens/ScienceClgAdmin/ScienceAdminMeritlist';
import ScienceClgAdminFrame from './screens/ScienceClgAdmin/ScienceClgAdminFrame';
import ScienceCollegeAdminSetting from './screens/ScienceClgAdmin/ScienceCollegeAdminSetting';
import IslamiaBoysClg from './screens/IslamiaBoysClg';
import ScienceClgScreen from './screens/ScienceClg';
import IslamiaGirlsClg from './screens/IslamiaGirlsClg';
import ScienceClgMeritListsScreen from './screens/ScienceClgAdmin/ScienceCollegeMeritLists';
import CantGirlsDegreeClg from './screens/CantGirlsDegreeClg';
import ClgMeritListsScreen from './screens/CollegeMeritLists';
import TechnicalBoysClg from './screens/TechnicalBoysClg';
import HomeScreen from './screens/HomeScreen';
import HomeScreenCollege from './screens/HomeScreenCollege';
import LoginScreen from './screens/LoginScreen';
import LoginScreenCollege from './screens/LoginScreenCollege';
import SignupScreen from './screens/SignupScreen';
import PersonalInfo from './screens/PersonalInfo';
import Education from './screens/Education';
import ProgramDetails from './screens/ProgramDetails';
import FinalForm from './screens/FinalForm';
import HomePage from './screens/HomePage';
import HomePageCollege from './screens/HomePageCollege';
import Collegespage from './screens/Collegespage';
import AboutUsCollege from './screens/AboutUsCollege';
import StudentsForm from './screens/StudentsForm';
import Frame from './screens/Frame';
import PersonalInfo1 from './screens/PersonalInfo1';
import Education1 from './screens/Education1';
import ProgramDetails1 from './screens/ProgramDetails1';
import Personaldetails from './screens/Personaldetails';
import TopCollegesScreen from './screens/TopCollegesScreen';
import NotificationScreen from './screens/notificationsScreen';
import CollegeDetails from './screens/CollegeDetails';
import ChangePassword from './screens/changePassword';
import FAQs from './screens/FAQs';
import CustomerSupport from './screens/CustomerSupport';
import CollegeSettings from './screens/CollegeSetting';
import MeritListScreen from './screens/Meritlist';
import Settings from './screens/Settings';
import TabNavigatorScreen1 from './screens/Tamerr-i-nauAdminClg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Colleges') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#003F6C',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#003F6C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Colleges" component={Collegespage} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const CollegeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'MeritList') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#003F6C',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#003F6C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePageCollege} />
      <Tab.Screen name="MeritList" component={MeritListScreen} />
      <Tab.Screen name="Settings" component={CollegeSettings} />
    </Tab.Navigator>
  );
};

const ScienceCollegeAdminTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'MeritList') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#003F6C',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#003F6C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="Home" component={ScinceAdminHomePageCollege} />
      <Tab.Screen name="MeritList" component={ScienceAdminMeritList} />
      <Tab.Screen name="Settings" component={ScienceCollegeAdminSetting} />
    </Tab.Navigator>
  );
};


const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  const userType = 'college'; // Replace this with logic to determine user type (student or college)

  return (
    <Stack.Navigator>
      {userType === 'student' ? (
        <>
          <Stack.Screen name="HomeTabs" component={HomeTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="CollegeTabs" component={CollegeTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="ScienceCollegeTabs" component={ScienceCollegeAdminTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="ScienceClgScreen" component={ScienceClgScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TechnicalBoysClg" component={TechnicalBoysClg} options={{ headerShown: false }} />
          <Stack.Screen name="CantGirlsDegreeClg" component={CantGirlsDegreeClg} options={{ headerShown: false }} />
          <Stack.Screen name="IslamiaBoysClg" component={IslamiaBoysClg} options={{ headerShown: false }} />
          <Stack.Screen name="IslamiaGirlsClg" component={IslamiaGirlsClg} options={{ headerShown: false }} />
          <Stack.Screen name="Frame" component={Frame} options={{ headerShown: false }} />
          <Stack.Screen name="Meritlist" component={MeritListScreen} options={{ headerShown: true }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={Settings} options={{ headerShown: true }} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{ headerShown: false }} />
          <Stack.Screen name="Personaldetails" component={Personaldetails} options={{ headerShown: false }} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
          <Stack.Screen name="FAQs" component={FAQs} options={{ headerShown: true }} />
          <Stack.Screen name="CustomerSupport" component={CustomerSupport} options={{ headerShown: true }} />
        </>
      ) : (
        <>
          <Stack.Screen name="CollegeTabs" component={CollegeTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="HomeTabs" component={HomeTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Tameer-i-nauAdminClgScreen" component={TabNavigatorScreen1} options={{headerShown:false}} />
          <Stack.Screen name="ScienceCollegeTabs" component={ScienceCollegeAdminTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="ScienceAdminAboutUsCollege" component={ScienceAdminAboutUsCollege} options={{ headerShown: false }} />
          <Stack.Screen name="ScienceAdminMeritList" component={ScienceAdminMeritList} options={{ headerShown: false }} />
          <Stack.Screen name="ScienceClgAdminFrame" component={ScienceClgAdminFrame} options={{ headerShown: false }} />
          <Stack.Screen name="ScienceCollegeAdminSetting" component={ScienceCollegeAdminSetting} options={{ headerShown: false }} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{ headerShown: false }} />
          <Stack.Screen name="Personaldetails" component={Personaldetails} options={{ headerShown: false }} />
          <Stack.Screen name="ScienceClgScreen" component={ScienceClgScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TechnicalBoysClg" component={TechnicalBoysClg} options={{ headerShown: false }} />
          <Stack.Screen name="CantGirlsDegreeClg" component={CantGirlsDegreeClg} options={{ headerShown: false }} />
          <Stack.Screen name="IslamiaBoysClg" component={IslamiaBoysClg} options={{ headerShown: false }} />
          <Stack.Screen name="IslamiaGirlsClg" component={IslamiaGirlsClg} options={{ headerShown: false }} />
          <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CollegeMeritLists" component={ClgMeritListsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ScienceClgMeritList" component={ScienceClgMeritListsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreenCollege" component={HomeScreenCollege} options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreenCollege" component={LoginScreenCollege} options={{ headerShown: false }} />
          <Stack.Screen name="FAQs" component={FAQs} options={{ headerShown: true }} />
          <Stack.Screen name="changePassword" component={ChangePassword} options={{ headerShown: false }} />
          <Stack.Screen name="CustomerSupport" component={CustomerSupport} options={{ headerShown: true }} />
          <Stack.Screen name="notificationsScreen" component={NotificationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TopCollegesScreen" component={TopCollegesScreen} options={{ headerShown: true }} />
          <Stack.Screen name="Frame" component={Frame} options={{ headerShown: false }} />
          <Stack.Screen name="Meritlist" component={MeritListScreen} options={{ headerShown: true }} />
          <Stack.Screen name="HomePageCollege" component={HomePageCollege} options={{ headerShown: false }} />
          <Stack.Screen name="AboutUsCollege" component={AboutUsCollege} options={{ headerShown: false }} />
          <Stack.Screen name="CollegeDetails" component={CollegeDetails} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const isAuthenticated = true; // Replace this with actual authentication logic

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
