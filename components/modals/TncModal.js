import { Pressable, ScrollView } from 'react-native'
import React from 'react'
import Modal from "react-native-modal"
import { router } from 'expo-router'

import { View, Text, Colors } from 'react-native-ui-lib'

import styles, { windowHeight, windowWidth } from '../../styles/style'

const TncModal = ({ setIsFirstLaunch, modalVisibility, setModalVisibility }) => {
    

    let tnc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, mauris vitae aliquet consequat, nisl ante aliquet justo, eu aliquam nisl est eget nunc. Donec vitae tellus sit amet odio ultrices pretium. Nullam euismod, nunc et aliquam aliquet, odio lorem aliquam nisl, et ultrices velit augue non odio. Sed auctor, nunc id consectetur tincidunt, nunc ex ultricies augue, a lacinia sapien eros id urna. Donec auctor, mauris vitae aliquet consequat, nisl ante aliquet justo, eu aliquam nisl est eget nunc. Donec vitae tellus sit amet odio ultrices pretium. Nullam euismod, nunc et aliquam aliquet, odio lorem aliquam nisl, et ultrices velit augue non odio. Sed auctor, nunc id consectetur tincidunt, nunc ex ultricies augue, a lacinia sapien eros id urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, mauris vitae aliquet consequat, nisl ante aliquet justo, eu aliquam nisl est eget nunc. Donec vitae tellus sit amet odio ultrices pretium. Nullam euismod, nunc et aliquam aliquet, odio lorem aliquam nisl, et ultrices velit augue non odio. Sed auctor, nunc id consectetur tincidunt, nunc ex ultricies augue, a lacinia sapien eros id urna. Donec auctor, mauris vitae aliquet consequat, nisl ante aliquet justo, eu aliquam nisl est eget nunc. Donec vitae tellus sit amet odio ultrices pretium. Nullam euismod, nunc et aliquam aliquet, odio lorem aliquam nisl, et ultrices velit augue non odio. Sed auctor, nunc id consectetur tincidunt, nunc ex ultricies augue, a lacinia sapien eros id urna."

    const AcceptFunction = () => {
        router.push('/Home');
        setModalVisibility(!modalVisibility);
        setIsFirstLaunch(false);
    }


    return (
        <Modal
        isVisible={modalVisibility}
     onBackdropPress={()=>{setModalVisibility(!modalVisibility);}}
     animationIn='slideInUp'
     animationOut='slideOutDown'
     children
     deviceWidth={windowWidth}
     deviceHeight={windowHeight}
     style={[styles.modal_container, styles.center]}
     onModalWillHide={()=>{console.log('hide');}}>
            <View style={[{height: windowWidth, width: windowWidth/4*3, backgroundColor: 'white', alignItems: 'center', borderRadius: 30, elevation: 40, justifyContent: 'space-between'}]}>
                <View style={[styles.center, {height: '10%', width: '100%', backgroundColor: 'black', borderTopLeftRadius: 30, borderTopRightRadius: 30}]}>
                    <Text text60BL color='white' >Terms and conditions</Text>
                </View>
                <ScrollView
                showsVerticalScrollIndicator
                style={{height: '80%', width: '100%', paddingHorizontal: '5%'}}>
                    <Text style={{textAlign: 'justify'}}>
                        {tnc}
                    </Text>
                </ScrollView>
                <View style={{height: '14%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
                    <Pressable
                    style={({ pressed }) => [{ backgroundColor: pressed ? Colors.rgba(10, 200, 30, 0.5) : Colors.rgba(10, 170, 60, 0.8) }, styles.button, styles.btnSmallCurve]}
                     onPress={()=>{AcceptFunction()}}>
                        <Text text60BL color='black' >Accept</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default TncModal