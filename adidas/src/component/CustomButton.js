import React from "react";
import {View,TouchableOpacity,Text} from 'react-native';
import { width } from "../constant/theme";
import { COLORS } from "../constant/theme";

export default function CustomButton({title,onPress,containerStyle}){
return(
    <View style={{
        height:40,
        width:width/3,
        marginTop:20,
        borderRadius:10,
        borderBottomWidth:0.19,
        borderLeftWidth:0.19,
        borderRightWidth:0.19,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'white',
        shadowOffset:{width:10,height:2},
        opacity:0.9,
        elevation:50,
        marginTop:50,
        backgroundColor:COLORS.white,
        ...containerStyle
    }}>
    <TouchableOpacity style={{
         height:40,
         width:width/3,
         justifyContent:'center',
         alignItems:'center',
    }}
    onPress={()=>onPress()}
    >
        <Text style={{color:COLORS.primary}}>{title} </Text>
    </TouchableOpacity>
    </View>
)
}