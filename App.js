import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  
  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: "AIzaSyCkmB_GUpou1P5_-y4JQXDthdeHCWioVT8",
      authDomain: "reactnativenotesjuly.firebaseapp.com",
      databaseURL: "https://reactnativenotesjuly.firebaseio.com",
      projectId: "reactnativenotesjuly",
      storageBucket: "reactnativenotesjuly.appspot.com",
      messagingSenderId: "198343956781",
      appId: "1:198343956781:web:d7e426b8c4d87234b3dba4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  })

  if(userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent/>
        {/* <LoginScreenComponent/> */}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {/* <NotesScreenComponent/> */}
        <LoginScreenComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});