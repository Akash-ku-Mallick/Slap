
import React, { useState } from 'react'
import { View, Text } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, ScrollView } from 'react-native';
import { Items } from '../../components/Welcome';


const Settings = () => {
  const [ currentTheme, setTheme ] = useState(0)

  const List_of_data = [
    {
      title: 'theme',
      enability: true,
      currentValue: currentTheme,
      operation: setTheme()
    },
    
  ]

  return (
    <SafeAreaView>
      <ScrollView>
        {
          List_of_data.map((item)=>{
            return (
              <SettingItem title={item.title} enability={item.enability} Func={item.operation} />
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const SettingModal = ({ Content, modalVisibility, setModalVisibility }) => {
  return (
    <View>
      <ScrollView>
        <Content />
      </ScrollView>
    </View>
  )
}

const SettingItem = ({ title, enability, Func }) => {
  const [ modalVisibility, setModalVisibility ] = useState(false);

  return (
    <>
    <View>
      <Text>
        {title}
      </Text>
      <Pressable onPress={()=>Func} disabled={enability}>
        <Text>On/Off</Text>
      </Pressable>
    </View>
    <SettingModal
     modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
    </>
  )
}

export default Settings