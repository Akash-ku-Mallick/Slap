import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, Button } from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, Pressable, FlatList, ScrollView, BackHandler, Alert } from 'react-native';
import Modal from "react-native-modal";


import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';

import styles, {windowHeight, windowWidth} from '../styles/style';
import { Link, router, useNavigation } from 'expo-router';


const Home = () => {
  const [ isLinked, setLinked ] = useState(false);
  const [ isDrawerOpen, setDrawerOpen ] = useState(false);
  const [ isLocationModalOpen, setLocationModalOpen ] = useState(false);

  useEffect(() => {
    if(isDrawerOpen){
      BackHandler.addEventListener('hardwareBackPress', () => {
        console.log('back');
        setDrawerOpen(false);
        return true;
      });
    }
    else{
      BackHandler.addEventListener('hardwareBackPress', () => {
        Alert.alert("Exit", "Are you sure you want to exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);

        return true;
      });
    }
  }, [isDrawerOpen]);

  const ProfileFunction = () => {
    console.log('Profile');
  }

  const DrawerFunction = () => {
    setDrawerOpen(!isDrawerOpen);
  }

  const ConnectFunction = () => {
    console.log('Connect');
  }

  const ChangeConnectionsFunction = () => {
    setLocationModalOpen(!isLocationModalOpen);
    console.log('Change Connections');
  }

  return (
    <>
    <SafeAreaView style={[styles.container,  styles.home_bg]}>
    <StatusBar barStyle="dark-content" />
      <View style={[styles.header_container]}>
        <Pressable
          onPress={DrawerFunction}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.IconBtn]}>
          {({ pressed }) => (
              <Ionicons name='ellipsis-vertical-sharp' size={30} color='black' />
          )}
        </Pressable>
        <Pressable onPress={()=>ProfileFunction()}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.IconBtn]}>
          {({ pressed }) => (
              <Icons name={isDrawerOpen ? 'user-secret' : 'user-secret'} size={30} color={pressed? 'white' : 'black'} />
          )}
        </Pressable>
      </View>
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', gap: 50}}>
      <View style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
        <Pressable onPress={ConnectFunction} style={[styles.Icon_text_v, styles.btnRound, styles.btnSqLarge, styles.button]}>
          {isLinked 
          ? <Icons name="link" size={30} color="#000" /> 
          : <Icons name="unlink" size={30} color="#000" />}
        </Pressable>
        <Text>Connect</Text>
        <View style={{justifyContent: 'center', alignItems: 'center', gap: 30}}>
          <View style={{flexDirection: 'row', gap: 10}}>
          <Text>Flag</Text>
          <Text>Connect to </Text>
          </View>
          <Text>Speed of network</Text>
        </View>
      </View>
      <View >
        <Pressable
          onPress={ChangeConnectionsFunction}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.Icon_text, styles.button, styles.btnWideSmall, styles.btnSmallCurve]}>
          {({ pressed }) => (
            <>
              <Icons name="satellite" size={30} color={pressed ? 'white' : 'black'} />
              <Text style={[{ color: pressed ? 'white' : 'black' }]}>Change Connections
              </Text>
              </>
            
          )}
        </Pressable>
      </View>
      </View>
    </SafeAreaView>
    <MenuDrawer isDrawerOpen={isDrawerOpen} DrawerFunction={DrawerFunction}/>
    <LocationModal isDrawerOpen={isLocationModalOpen} DrawerFunction={setLocationModalOpen}/>
    </>
  )
}

const MenuDrawer = ({ isDrawerOpen, DrawerFunction }) => {
  return (
    <Modal
     isVisible={isDrawerOpen}
     onBackdropPress={()=>{DrawerFunction()}}
     animationIn='slideInLeft'
     animationOut='slideOutLeft'
     children
     deviceWidth={windowWidth}
     deviceHeight={windowHeight}
     style={styles.drawer_container}
     onModalWillHide={()=>{console.log('hide');}}
     >
      <View style={styles.drawer}>
          <View style={styles.drawer_header}>
            <Pressable
              onPress={() => { DrawerFunction() }}
              style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.IconBtn]}>
              {({ pressed }) => (
                <Ionicons name='ellipsis-horizontal-sharp'  size={30} color='black' />
              )}
            </Pressable>
          <Text style={styles.drawer_header_text}>Name</Text>
        </View>
        <ScrollView style={styles.drawer_body}>
          <Text style={styles.drawer_body_text}>Body</Text>
          <DrawerIconTextBtn />
        </ScrollView>
        <View style={styles.drawer_footer}>
          <Text style={styles.drawer_footer_text}>Footer</Text>
          <DrawerIconBtn />
          <Link href='/home' >
          <Text style={styles.drawer_body_text}>settings</Text>
          </Link>
        </View>
      </View>
    </Modal>
    
  )
}

const DrawerIconBtn = () => {
  return(
    <Pressable
      onPress={()=>{console.log('icon')}}
      style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.IconBtn]}>
      {({ pressed }) => (
          <Ionicons name='ellipsis-horizontal-sharp' size={30} color= {pressed ? 'white' : 'black'} />
      )}
    </Pressable>
  )
}

const DrawerIconTextBtn = () => {

  return(
    <Pressable
      onPress={()=>{router.replace('/home')}}
      style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.IconBtn]}>
      {({ pressed }) => (
        <>
        <Ionicons name='ellipsis-horizontal-sharp' size={30} color= {pressed ? 'white' : 'black'} />
        <Text style={[styles.drawer_body_text, {color: pressed ? 'white' : 'black'}]}>settings</Text>
        </>
      )}
    </Pressable>
  )
}

// Location Modal

const LocationModal = ({ isDrawerOpen, DrawerFunction }) => {
  const [ locList, setLocList ] = useState([]);


  return (
    <Modal
     isVisible={isDrawerOpen}
     onBackdropPress={()=>{DrawerFunction(!isDrawerOpen)}}
     animationIn='slideInUp'
     animationOut='slideOutDown'
     children
     deviceWidth={windowWidth}
     deviceHeight={windowHeight}
     style={[styles.drawer_container, {justifyContent: 'flex-end', margin: 0}]}
     onModalWillHide={()=>{console.log('hide');}}>
      <View style={{height: '94%', width: '100%'}}>
        <Text>Location</Text>
        <FlatList/>
      </View>
    </Modal>
  )
}

export default Home