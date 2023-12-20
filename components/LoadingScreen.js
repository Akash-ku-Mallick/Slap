import { StyleSheet, View } from 'react-native'
import React, { useRef, useEffect } from 'react'
import LottieView from 'lottie-react-native'


const LoadingScreen = () => {
    const animationRef = useRef(null);

    useEffect(() => {
        animationRef.current.play();
    }, []);

  return (
    <View style={[StyleSheet.absoluteFillObject, {zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.4)', flex: 1, alignContent: 'center', justifyContent: 'center' }]}>
      <LottieView style={ {zIndex: 3, height: 100, width: 100, alignSelf: 'center'}}
        ref={animationRef}
        source={require('../assets/Animation.json')}
        autoPlay
        loop />
        </View>
  )
}


export default LoadingScreen
