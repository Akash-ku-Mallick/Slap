import { StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from 'react-native-ui-lib';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
    
const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    height_100vh:{
        height: windowHeight
    },
    width_100vw:{
        width: windowWidth
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        padding: 0,
        alignContent: 'center',
    },
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    Icon_text: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '30%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    IconBtn: {
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'black'
    },
    sub_title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'black'
    },
    inputContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    link: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 18
    },
    drawer_container: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 0,
    },
    drawer: {
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        flex: 1,
        width: '60%',
        elevation: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },
})
    

export default styles
export {windowWidth, windowHeight}