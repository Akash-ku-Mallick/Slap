
import React, { useEffect } from 'react'
import { View, Text } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHandler } from 'react-native';
import { router } from 'expo-router';
// importing local files and components


const index = () => {
  useEffect(() => {
    const backAction = () => {
      router.push('/');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
    }, []);

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Profile</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default index