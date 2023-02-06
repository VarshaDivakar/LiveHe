import React, { useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import CustomStatusBar from "../../component/CustomStatusBar";
import { height, width } from "../../constant/theme"
export default function Auth(props){
    return(
        <View style={style.container}>
            <CustomStatusBar/>
        <ImageBackground style={style.background} source={require('../../assets/images/background.png')}>
          <View style={{
            backgroundColor:'white',
            height:height,
            width:width,
            opacity:0.9,
            justifyContent:'center',
            alignItems:'center',
            paddingTop:20
            }}>
          {props.children}
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
        height: height/6,
        width: width/2
    }
})