import React, { useState, useEffect } from 'react'

import { SplashScreen, Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Assets } from 'react-native-ui-lib';


import Welcome from '../components/Welcome';
import TncModal from '../components/modals/TncModal';


SplashScreen.preventAutoHideAsync();

Assets.loadAssetsGroup('welcome', {
  pic1: require('../assets/welcome/pic1.png'),
  pic2: require('../assets/welcome/pic2.png'),
  pic3: require('../assets/welcome/pic3.png'),
});

Assets.loadAssetsGroup('avtars', {
  avtar0: require('../assets/avatar/0.png'),
  avtar1: require('../assets/avatar/1.png'),
  avtar2: require('../assets/avatar/2.png'),
  avtar3: require('../assets/avatar/3.png'),
  avtar4: require('../assets/avatar/4.png'),
  avtar5: require('../assets/avatar/5.png'),
  avtar6: require('../assets/avatar/6.png'),
  avtar7: require('../assets/avatar/7.png'),
  avtar8: require('../assets/avatar/8.png'),
  avtar9: require('../assets/avatar/9.png'),
});

const index = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const [isReady, setReady] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  
  


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
      <Stack.Screen 
      options={{
        headerShown: false,
      }} />
      <Welcome setIsFirstLaunch={setIsFirstLaunch} setModalVisibility={setModalVisibility}/> 
      <TncModal setIsFirstLaunch={setIsFirstLaunch} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
    </>
  )
}

export default index

