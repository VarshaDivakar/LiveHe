import React, { useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import CustomStatusBar from "../component/CustomStatusBar";
import { height, width } from "../constant/theme";
export default function Splash(props){
    useEffect(()=>{
         setTimeout(()=>{
            props.navigation.navigate('Login')
         },1000)
    },[])
    return(
        <View style={style.container}>
            <CustomStatusBar/>
        <ImageBackground style={style.background} source={require('../assets/images/background.png')}>
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
          <Image style={style.logo} resizeMode={'contain'} source={require('../assets/images/logo.png')}/>
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