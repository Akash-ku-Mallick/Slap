import React from 'react';
import { View, Text, Colors } from 'react-native-ui-lib';
import { Pressable, ScrollView } from 'react-native';
import Modal from "react-native-modal";
import { Link } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';

import styles, {windowHeight, windowWidth} from '../styles/style';


const MenuDrawer = ({ isDrawerOpen, DrawerFunction }) => {


  const ProfileBtn = () => {
  }


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
                onPress={() => { ProfileBtn() }}
                style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white', margin: 30 }, styles.btnRound, styles.btnSqLarge]}>
                {({ pressed }) => (
                  <Icons name='user-circle'  size={100} color='black' />
                  
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

export default MenuDrawer;