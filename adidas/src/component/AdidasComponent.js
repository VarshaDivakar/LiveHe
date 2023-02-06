import React from "react";
import {View,Image,Text, Pressable} from 'react-native';
import { COLORS } from "../constant/theme";

export default function AdidasComponent({containerStyle,imageStyle,onPress}){
    return(
     
        <View style={{
            backgroundColor:COLORS.white,
            height:100,
            width:100,
            borderRadius:100,
            justifyContent:'center',
            alignItems:'center',
            ...containerStyle
        }} >
              
            <Image resizeMode="contain" style={{
                ...imageStyle
                }} source={require('../assets/images/adidas.png')}/>
               
        </View>
       
    )
}