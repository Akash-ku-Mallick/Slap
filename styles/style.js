import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import { Colors, Gradient } from 'react-native-ui-lib';

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
        paddingTop: StatusBar.currentHeight,
        alignContent: 'center',
    },
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        elevation: 20,
    },
    Icon_text: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Icon_text_v: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    header_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
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
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    btnSmallCurve: {
        borderRadius: 10,
    },
    btnMidCurve: {
        borderRadius: 15,
    },
    btnLargeCurve: {
        borderRadius: 20,
    },
    btnRound: {
        borderRadius: 150,
    },
    btnWideSmall: {
        height: 50,
        width: 240,
    },
    btnWideMid: {
        height: 80,
        width: 240,
    },
    btnWideLarge: {
        height: 120,
        width: 240,
    },
    btnSqSmall: {
        height: 50,
        width: 50,
    },
    btnSqMid: {
        height: 80,
        width: 80,
    },
    btnSqLarge: {
        height: 120,
        width: 120,
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
    modal_container: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
        margin: 0,
        zIndex: 3,
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawer_container: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 0,
        zIndex: 3,
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
    home_bg: {
        backgroundColor: Colors.dark30,
    },
    modal: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 20,
    },
    searchBar: {
        elevation: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth-20,
        height: 50,
        padding: 10,
        norderTopLeftRadius: 20,
        marginHorizontal: 10,
        marginTop: 10,
    },
    elivation: {
        elevation: 20,
    },
    mainBtn: {
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 180,
    },
    welcomeText: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        position: 'absolute',
        bottom: 10,
        
    },
    home_btmbtn: {
        padding: 20, 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute', 
        bottom: 0, 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        elevation: 190
    }
})
    

export default styles
export {windowWidth, windowHeight}