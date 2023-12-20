import { Pressable, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { View, Text, Image } from 'react-native-ui-lib';

import styles, { windowHeight, windowWidth } from '../../styles/style';


const data = [
    {
        row: 1,
        list: [
            {
                id: 1,
                name: 'user-circle',
                path: 'avtar1'
            },
            {
                id: 2,
                name: 'user-circle',
                path: 'avtar2'
            },
            {
                id: 3,
                name: 'user-circle',
                path: 'avtar3'
            },
        ]
    },
    {
        row: 2,
        list: [
            {
                id: 4,
                name: 'user-circle',
                path: 'avtar4'
            },
            {
                id: 5,
                name: 'user-circle',
                path: 'avtar5'
            },
            {
                id: 6,
                name: 'user-circle',
                path: 'avtar6'
            },
        ]
    },
    {
        row: 3,
        list: [
            {
                id: 7,
                name: 'user-circle',
                path: 'avtar7'
            },
            {
                id: 8,
                name: 'user-circle',
                path: 'avtar8'
            },
            {
                id: 9,
                name: 'user-circle',
                path: 'avtar9'
            },
        ]
    }
]

const AvtarSelection = ({ modalVisibility, setVisibility, currentAvt, setAvt }) => {

    const SetAvtar = (id) => {
        setAvt(id)
        setVisibility(false)
    }

    const Avtar = ({ avt, condition }) => {
        return(
            <Pressable
                onPress={()=>{SetAvtar(avt.id)}}
                disabled={condition}
                style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, avtar_styles.IconBtn]}>
                {({ pressed }) => (
                    <Image assetName={avt.path} assetGroup='avtars' style={[{height: '90%', width: '90%', objectFit: 'contain'}]} />
                )}
            </Pressable>
        )
    }

  return (
    <Modal
        isVisible={modalVisibility}
        animationIn='slideInLeft'
        animationOut='slideOutLeft'
        children
        deviceWidth={windowWidth}
        deviceHeight={windowHeight}
        style={styles.drawer_container}
        onBackButtonPress={() => { setVisibility(false) }}
        onBackdropPress={() => { setVisibility(false) }}
        onModalWillHide={() => { console.log('hide'); }}
        >
            <View style={avtar_styles.container}>
                <Text>Select Avatar</Text>
                <Text>Current Avatar: {currentAvt}</Text>
                <ScrollView>
                    {data.map((row, index) => {
                        return (
                            <View key={index} row>
                                {row.list.map((avt, index) => {
                                    return (
                                        <Avtar key={index} avt={avt} condition={currentAvt == avt.id} />
                                    )
                                })}
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
    </Modal>
  )
}

const avtar_styles = StyleSheet.create({
    container: {
        height: windowHeight/2,
        width: windowWidth,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    IconBtn: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 150,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        borderEndWidth: 1,
        borderColor: 'red',
    },
    img: {
        backgroundColor: 'black',
    }
})

export default AvtarSelection