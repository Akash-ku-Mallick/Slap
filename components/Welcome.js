import { StatusBar, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { View, Text , Image, Assets, Colors } from 'react-native-ui-lib'
import Icon from 'react-native-vector-icons/FontAwesome';

// Imports from local files

import styles from '../styles/style'


export const Items = [
  {
    title: 'Privacy',
    sub_title: 'React Native UI Lib',
    image: 'pic1',
    bgColour: 'white'
  },
  {
    title: 'Welcome to',
    sub_title: 'React Native UI Lib',
    image: 'pic2',
    bgColour: 'white'
  },
  {
    title: 'Welcome to us',
    sub_title: 'React UI Lib',
    image: 'pic3',
    bgColour: 'white'
  }
];


// Program to display the welcome screen

const Welcome = ({setIsFirstLaunch, setModalVisibility}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatList_Ref = React.useRef(null);


  const RenderItem = (image, bgColour, title, sub_title, index, flatList_Ref) => {
    return (
      <View key={index} style={[styles.fullScreen, styles.height_100vh, styles.width_100vw, { backgroundColor: bgColour }]}>
        <Image assetName={image} assetGroup='welcome' style={{ width: 300, height: 300, objectFit: 'contain' }} />
        <View style={styles.welcomeText}>
          <Text style={[styles.title]}>{title}</Text>
          <Text style={[styles.sub_title]}>{sub_title}</Text>

          {index < Items.length - 1 ?

            <Pressable onPress={() => {
              flatList_Ref.current.scrollToIndex({ index: index + 1 });
            }}
              style={({ pressed }) => [{ backgroundColor: pressed ? Colors.rgba(100, 100, 100, 0.3) : 'white' }, styles.Icon_text, styles.button, styles.btnWideSmall, styles.btnSmallCurve, styles.btnSqMid, styles.button, styles.btnRound]}>
              <Icon name="angle-right" size={40} color="#000" />
            </Pressable>
            :
            <View>
              <Pressable onPress={() => {
                setModalVisibility(true)
              }} 
              style={({ pressed }) => [{ backgroundColor: pressed ? Colors.rgba(100, 100, 100, 0.3) : 'white' }, styles.btnWideMid, styles.button, styles.btnMidCurve]}>
                <Text text60BO>Get Started</Text>
              </Pressable>
            </View>
          }
        </View>
      </View>
    );
  };

  return (
    <View style={styles.fullScreen}>
      <FlatList
        data={Items}
        renderItem={({item, index}) => RenderItem(item.image, item.bgColour, item.title, item.sub_title, index, flatList_Ref)}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const slideSize = event.nativeEvent.layoutMeasurement.width;
          const index = event.nativeEvent.contentOffset.x / slideSize;
          setCurrentIndex(index);
        }}
        
        ref={flatList_Ref}
        >
      </FlatList>
      <StatusBar style="auto" />
    </View>
    
  )
}


export default Welcome