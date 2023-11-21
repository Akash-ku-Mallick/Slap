import { StatusBar, Pressable, FlatList } from 'react-native'
import React from 'react'
import { View, Text , Image, Assets, Colors } from 'react-native-ui-lib'
import { Link } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';

// Imports from local files

import styles from '../styles/style'

Assets.loadAssetsGroup('icons', {
  pic1: require('../assets/welcome/pic1.png'),
  pic2: require('../assets/welcome/pic2.png'),
  pic3: require('../assets/welcome/pic3.png'),
});

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

const Welcome = ({setIsFirstLaunch}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const flatList_Ref = React.useRef(null);

  const RenderItem = (image, bgColour, title, sub_title, index, flatList_Ref) => {
    return (
      <View key={index} style={[styles.fullScreen, styles.height_100vh, styles.width_100vw, {backgroundColor: bgColour}]}>
        <Image assetName={image} style={{width: 300, height: 300, objectFit: 'contain'}} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.sub_title}>{sub_title}</Text>
        
          {index < Items.length - 1?
           
            <Pressable onPress={() => {
            flatList_Ref.current.scrollToIndex({index: index + 1});}}
            style={styles.button}>
            <Icon name="angle-right" size={30} color="#fff" />
        </Pressable>
        :
            <View>
              <Pressable onPress={() => {
                setIsFirstLaunch(false);
              }} style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
              </Pressable>
            </View>
          }
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