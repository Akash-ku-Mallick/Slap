import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, Button } from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, Pressable, FlatList, ScrollView } from 'react-native';
import Modal from "react-native-modal";


import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';

import styles, {windowHeight, windowWidth} from '../styles/style';
import { Link, router, useNavigation } from 'expo-router';


const Home = () => {
  const [ isLinked, setLinked ] = useState(false);
  const [ isDrawerOpen, setDrawerOpen ] = useState(false);




  const ProfileFunction = () => {
    console.log('Profile');
  }

  const DrawerFunction = () => {
    setDrawerOpen(!isDrawerOpen);
    console.log('Drawer');
  }

  const ConnectFunction = () => {
    console.log('Connect');
  }

  const ChangeConnectionsFunction = () => {
    console.log('Change Connections');
  }

  return (
    <>
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
      <View style={styles.header_container}>
        <Pressable
          onPress={DrawerFunction}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.IconBtn]}>
          {({ pressed }) => (
              <Ionicons name={isDrawerOpen ? 'ellipsis-vertical-sharp' : 'ellipsis-horizontal-sharp'} size={30} color='black' />
          )}
        </Pressable>
        <Pressable onPress={()=>ProfileFunction()}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.IconBtn]}>
          {({ pressed }) => (
              <Icons name={isDrawerOpen ? 'user-secret' : 'user-secret'} size={30} color={pressed? 'white' : 'black'} />
          )}
        </Pressable>
      </View>
      <View>
        <Pressable onPress={ConnectFunction} style={styles.Icon_text}>
          {isLinked ? <Icons name="link" size={30} color="#000" /> : <Icons name="unlink" size={30} color="#000" />}
          <Text>Connect</Text>
        </Pressable>
        <View >
          <Text>Flag</Text>
          <Text>Connect to </Text>
          <Text>Speed of network</Text>
        </View>
      </View>
      <View >
        <Pressable
          onPress={ChangeConnectionsFunction}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.Icon_text]}>
          {({ pressed }) => (
            <Text style={[{ color: pressed ? 'white' : 'black' }]}>
              <Icons name="satellite" size={30} color={pressed ? 'white' : 'black'} />
              Change Connections
              </Text>
            
          )}
        </Pressable>
      </View>
    </SafeAreaView>
    <Modal
     isVisible={isDrawerOpen}
     onBackdropPress={DrawerFunction}
     animationIn='slideInLeft'
     animationOut='slideOutLeft'
     deviceWidth={windowWidth}
     deviceHeight={windowHeight}
     style={styles.drawer_container}
     >
      <View style={styles.drawer}>
        <View style={styles.drawer_header}>
          
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
    </>
  )
}

const DrawerIconBtn = () => {
  return(
    <Pressable
      onPress={()=>{console.log('icon')}}
      style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.IconBtn]}>
      {({ pressed }) => (
          <Ionicons name={pressed ? 'ellipsis-vertical-sharp' : 'ellipsis-horizontal-sharp'} size={30} color='black' />
      )}
    </Pressable>
  )
}

const DrawerIconTextBtn = () => {

  return(
    <Pressable
      onPress={()=>{router.push('/home')}}
      style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.IconBtn]}>
      {({ pressed }) => (
        <>
        <Ionicons name={pressed ? 'ellipsis-vertical-sharp' : 'ellipsis-horizontal-sharp'} size={30} color='black' />
        <Text style={styles.drawer_body_text}>settings</Text>
        </>
      )}
    </Pressable>
  )
}

export default Home