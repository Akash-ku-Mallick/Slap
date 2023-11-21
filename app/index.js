import { AppState, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Link, SplashScreen } from 'expo-router';
import { View, Text, Button } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';


import Welcome from '../components/Welcome';
import Home from '../components/Home';

SplashScreen.preventAutoHideAsync();

const index = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [isReady, setReady] = useState(false);

  // useEffect(() => {
  //   AppState.addEventListener('change', (state) => {
  //     if (state === 'foreground') {
  //       if (isFirstLaunch) {
  //         // This is the first time the app is in the foreground
  //         setIsFirstLaunch(false);
  //       }
  //     }
  //   });
  // }, []);

  useEffect(() => {
    AsyncStorage.getItem('isFirstLaunch', (err, value) => {
      if (err) {
        console.log('There was an error');
        // There was an error getting the value from AsyncStorage
      } else if (value === null) {
        // This is the first time the app has been launched
        AsyncStorage.setItem('isFirstLaunch', 'false');
        setIsFirstLaunch(false);
      }
    });
  }, []);
  
  useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      // When all loading is setup, unmount the splash screen component.
      SplashScreen.hideAsync();
      setReady(true);
    }, 1000);
  }, []);


  return (
    <>
      {isFirstLaunch ? 
      <Welcome setIsFirstLaunch={setIsFirstLaunch}/> 
      : 
      <Home/>
      }
    </>
  )
}

export default index

