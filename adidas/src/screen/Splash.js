import React, { useEffect } from "react";
import { BackHandler, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import CustomStatusBar from "../component/CustomStatusBar";
import { height, width } from "../constant/theme";
import MapView from "react-native-maps";
export default function Splash(props){
    useEffect(()=>{
        BackHandler.removeEventListener("hardwareBackPress",null);
         setTimeout(()=>{
            props.navigation.replace("Login");
            // props.navigation.navigate('Login')
         },2000)
        //  return ()=> BackHandler.addEventListener(
        //     'hardwareBackPress',
        //     () => BackHandler.exitApp())
    },[])
    return(
        <View style={style.container}>
            <CustomStatusBar/>
        <ImageBackground style={style.background} source={require('../assets/images/background.png')}>
{/* <MapView
          style={{ height:500,width:500 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}></MapView>  */}
          <View style={{
            backgroundColor:'white',
            height:height,
            width:width,
            opacity:0.9,
            justifyContent:'center',
            alignItems:'center',
            // backgroundColor:'yellow',
            paddingBottom:20
            }}>
          <Image style={style.logo} resizeMode={'contain'} source={require('../assets/images/Lhive_Logo.png')}/>
            </View> 
        </ImageBackground>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
    },
    background:{
        flex:1,
        height:height,
        width:width,
    
    },
    logo:{
        // aspectRatio:(height/7.9)/(width/6.6)
        height: height/6,
        width: width/2
    }
})