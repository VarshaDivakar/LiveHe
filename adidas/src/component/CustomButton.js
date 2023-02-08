import React from "react";
import {View,TouchableOpacity,Text, ImageBackground} from 'react-native';
import { commonFontStyle, width } from "../constant/theme";
import { COLORS } from "../constant/theme";

export default function CustomButton({title,onPress,containerStyle}){
return(
    <TouchableOpacity style={{
         marginTop:50,
    }}
    onPress={()=>onPress()}
    >
        <ImageBackground 
        style={{
                height:80,
        width: 180,
        justifyContent: 'center',
        alignItems:'center',
        ...containerStyle
        }}
        resizeMode={'contain'}
        source={require('../assets/images/buttonBg.png')}>
        <Text style={{
            ...commonFontStyle(20,400,COLORS.primary)
            }}>{title} </Text>
        </ImageBackground>
    </TouchableOpacity>
    // </View>
)
}