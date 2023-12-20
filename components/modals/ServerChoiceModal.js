import { View, Text } from 'react-native'
import React , { useState, useEffect }from 'react'

import LoadingScreen from '../LoadingScreen';

const ServerChoiceModal = () => {
  const [ isLoaded, setLoaded ] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => {
      setLoaded(false);
    }
  }, []);

  return (
    <>
    <View>
      <Text>ServerChoiceModal</Text>
    </View>
    {isLoaded ? <LoadingScreen />: null}
    </>
  )
}

export default ServerChoiceModal