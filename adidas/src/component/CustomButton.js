import React from "react";
import {View,TouchableOpacity,Text, ImageBackground} from 'react-native';
import { commonFontStyle, width } from "../constant/theme";
import { COLORS } from "../constant/theme";

export default function CustomButton({title,onPress,containerStyle}){
return(
    // <View style={{
    //     height:40,
    //     width:width/3,
    //     // marginTop:20,
    //         borderRadius:10,
    //         borderBottomWidth:0.19,
    //         borderLeftWidth:0.19,
    //         borderRightWidth:0.19,
    //     // justifyContent:'center',
    //     // alignItems:'center',
    //     shadowColor:COLORS.primary,
    //     shadowOffset:{width:10,height:20},
    //     opacity:0.9,
    //     // shadowRadius:10,
    //     // // elevation:50,
    //     // marginTop:50,
    //     backgroundColor:COLORS.white,
    //     ...containerStyle
    // }}>
    <TouchableOpacity style={{
        //  height:90,
        //  width:width/3,
        //  justifyContent:'center',
        //  alignItems:'center',
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