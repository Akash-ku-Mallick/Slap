
import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHandler, Pressable } from 'react-native';
import { router } from 'expo-router';
import Icons from 'react-native-vector-icons/FontAwesome';

// importing local files and components
import styles from '../../styles/style';
import { AuthModal, Login_Screen, Signup_Screen, ForgotPassword_Screen, ResetPassword_Screen, Profile_Screen } from '../../components/modals/AuthModal';
import AvtarSelection from '../../components/modals/AvtarSelection';


const index = () => {

  const [isAvtarSelectionOpen, setAvtarSelectionOpen] = useState(false);
  const [ currentAvt, setAvt ] = useState(0);


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
          <Image assetName={`avtar${currentAvt}`} assetGroup='avtars' style={{height: 100, width: 100, objectFit: 'contain'}}/>
          <Pressable onPress={() => setAvtarSelectionOpen(true)}>
            <Icons name='pencil'  size={30} color='black' />
          </Pressable>
        </View>
      </SafeAreaView>
      <AvtarSelection modalVisibility={isAvtarSelectionOpen} setVisibility={setAvtarSelectionOpen} currentAvt={currentAvt} setAvt={setAvt}/>
    </>
  )
}

export default index