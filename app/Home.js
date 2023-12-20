import React, { useState, useEffect } from 'react';
import { Link, router, useNavigation, Stack } from 'expo-router';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, Button, Colors } from 'react-native-ui-lib';
import { StatusBar, Pressable, FlatList, SafeAreaView, BackHandler, Alert, TextInput } from 'react-native';
import Modal from "react-native-modal";
import CountryFlag from "react-native-country-flag";



import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/AntDesign';


import styles, {windowHeight, windowWidth} from '../styles/style';
import LoadingScreen from '../components/LoadingScreen';
import MenuDrawer from '../components/Drawer';

import NativeModuleTest from '../components/MyNativeModule';

const Home = () => {
  const [ isLinked, setLinked ] = useState(0);
  const [ isDrawerOpen, setDrawerOpen ] = useState(false);
  const [ isLocationModalOpen, setLocationModalOpen ] = useState(false);

  const [ servers, setServers ] = useState(null);

  const [ currentServer, setCurrentServer ] = useState(null);



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

  useEffect(() => {
    const FetchData = async () => {
      axios.get('https://www.vpngate.net/api/iphone/').then((res) => {
        
        let x = CsvToJson(res.data);
        setServers(x);
        }
        ).catch((err) => {
            console.log(err);
        }).finally(() => {
            console.log('done');
        })
    }
    FetchData();
  }
  , []);

  const ProfileFunction = () => {
    console.log('Profile');
  }

  const DrawerFunction = () => {
    setDrawerOpen(!isDrawerOpen);
  }

  const ConnectFunction = () => {
    if(isLinked==0){
      setLinked(1);
    }
    else if(isLinked==1){
      setLinked(2);
      setTimeout(() => {
        setLinked(3);
      }, 3000);
    }
    else{
      setLinked(0);
    }
  }

  const ChangeConnectionsFunction = () => {
    setLocationModalOpen(!isLocationModalOpen);
    
    console.log('Change Connections');
  }

  const CsvToJson = (csv) => {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[1].split(',');

    for (let i = 2; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');

        for (let j = 0; j < headers.length-2; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }

    return result;
}

// Location Modal

const LocationModal = () => {

  const [ isLoaded, setLoaded ] = useState(true);

  const [ searchText, setSearchText ] = useState('');

  const SearchFunction = () => {
  }

  useEffect(() => {
    if(servers!=null){
      setLoaded(false);
    }
    else{
      setLoaded(true);
    }
  }, [servers]);
  
  const FlagSearch = (code) => {
    
    if(typeof(code) == 'undefined' || code == undefined){
      try{
        return <CountryFlag isoCode={code.toLowerCase()} size={32} />
      }
      catch(err){
        console.log(err);
        return <CountryFlag isoCode={'US'} size={32} />
      }
    }
    else{
        return <CountryFlag isoCode={code.toLowerCase()} size={32} />
    }
  }



  return (
    <Modal
     isVisible={isLocationModalOpen}
     onBackdropPress={()=>{setLocationModalOpen(!isLocationModalOpen)}}
     animationIn='slideInUp'
     animationOut='slideOutDown'
     animationInTiming={1000}
    animationOutTiming={600}
     children
     deviceWidth={windowWidth}
     deviceHeight={windowHeight}
     style={[styles.drawer_container, {justifyContent: 'flex-end', margin: 0}]}
     onModalWillHide={()=>{console.log('hide Location');}}>
      <View style={[styles.modal, {height: '94%', width: '100%'}]}>
        <Pressable onPress={()=>{setLocationModalOpen(!isLocationModalOpen)}}
         style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icons name='minus' size={30} color='black' />
        </Pressable>
        <View style={styles.searchBar}>
          <TextInput style={[styles.textInput, {width: '90%'}]} placeholder='Search' value={searchText}
          onChangeText={(e)=>{setSearchText(e)}} />
          <Pressable style={{position: 'absolute', right: 10, top: 10}}>
            <Icons name='search' size={30} color='black' />
          </Pressable>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Connected : {(currentServer === null) ? 'auto' : currentServer.CountryLong}</Text>
        </View>
        {
          isLoaded ? null :
          <FlatList
          data={servers}
          renderItem={({item, index}) =>
          <Pressable 
          style={({pressed})=>[styles.button, styles.btnMidCurve, styles.Icon_text, styles.button, {width: '100%', backgroundColor: pressed ? Colors.rgba(100, 100, 100, 0.3) : 'white'}]}
          onPress={()=>{
            setCurrentServer(item); 
            setLocationModalOpen(false); }}>
            <>
            {FlagSearch(item.CountryShort)}
            
            <Text>{"  "}{item.CountryShort}{"  "}</Text>
            <Text>{item.CountryLong}{"  "}</Text>
            <Text>{"Ping "}{item.Ping}{"  "}</Text>
            <Text>{"Speed "}{item.Speed}{"  "}</Text>
            <Text>{item.IP}</Text>
            </>
          </Pressable>}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
          />
        }
      </View>
      {isLoaded ? <LoadingScreen />: null}
    </Modal>
  )
}

const handleNative = () => {
  const x = NativeModuleTest();
  console.log('x');
  console.log(typeof(x));
}

  return (
    <>
    <SafeAreaView style={[styles.container,  styles.home_bg]}>
      <Stack.Screen options={{
        headerShown: false, 
      }} />
    <StatusBar barStyle="dark-content" />
      <View style={[styles.header_container]}>
        <Pressable
          onPress={DrawerFunction}
          style={({ pressed }) => [{ backgroundColor: pressed ? Colors.rgba(1, 1, 1, 0.2) : 'white' }, styles.header_btn, styles.elivation]}>
          {({ pressed }) => (
              <Ionicons name='ellipsis-vertical-sharp' size={30} color='black' />
          )}
        </Pressable>
        <Pressable onPress={()=>ProfileFunction()}
          style={({ pressed }) => [{ backgroundColor: pressed ? Colors.rgba(1, 1, 1, 0.2) : 'white' }, styles.header_btn]}>
          {({ pressed }) => (
              <Icons name={isDrawerOpen ? 'user-secret' : 'user-secret'} size={30} color='black' />
          )}
        </Pressable>
      </View>

      {/* Main Screen  */}
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', gap: 50, backgroundColor: Colors.rgba(10, 10, 100, 0.8)}}>
      <View style={{justifyContent: 'center', alignItems: 'center', gap: 10, backgroundColor: Colors.rgba(0, 0, 0, 0)}}>
        <Pressable onPress={ConnectFunction} 
        style={({ pressed }) => [{
          backgroundColor: pressed? 
          Colors.rgba(200, 100, 10, 0.5)
          :Colors.rgba(160, 160, 160, 0.5)}, styles.mainBtn]}>

            <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', borderRadius: 150,
                          backgroundColor: isLinked==1 ? Colors.rgba(19, 10, 19, 0.4)
                          : isLinked==2 ? Colors.rgba(10, 199, 199, 1)
                          : Colors.rgba(19, 19, 190, 0.61)}}>
            {isLinked==1 
          ? <Icons name="link" size={30} color="#000" /> 
          :isLinked==2 ?
          <Icon name="loading2" size={40} color="#000" />
          : <Icons name="unlink" size={30} color="#000" />}
            </View>

        </Pressable>
        <Text>
          {isLinked==1 ? 'Connect' : isLinked==2 ? 'Connecting' : 'Connected'}
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center', gap: 50, backgroundColor: Colors.rgba(0, 0, 0, 0)}}>
          <View style={{flexDirection: 'row', gap: 40, backgroundColor: Colors.rgba(0, 0, 0, 0)}}>
          {(currentServer === null) ? <Text>Flag</Text> 
          : <CountryFlag isoCode={currentServer.CountryShort.toLowerCase()} size={32} />
          }
          <Text> {(currentServer === null) ? 'auto' : currentServer.CountryShort} </Text>
          </View>
          <Pressable onPress={handleNative }>
            <Text>Test out</Text>
          </Pressable>
          <Text>Speed of network</Text>
        </View>
      </View>
        <Pressable
          onPress={ChangeConnectionsFunction}
          style={({ pressed }) => [{ backgroundColor: pressed ? Colors.rgba(100, 100, 100, 0.7) : Colors.rgba(100, 100, 100, 0.4) }, styles.home_btmbtn]}>
          {({ pressed }) => (
            <>
              
              <Text style={[{ color: pressed ? 'white' : 'black' }]}>
                Connected to: {(currentServer === null) ? 'auto' : currentServer.CountryLong}
              </Text>
              </>
            
          )}
        </Pressable>
      </View>
    </SafeAreaView>
    <MenuDrawer isDrawerOpen={isDrawerOpen} DrawerFunction={DrawerFunction}/>
    <LocationModal />
    </>
  )
}


export default Home