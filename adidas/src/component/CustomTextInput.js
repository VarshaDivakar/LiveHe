import React from "react";
import {View,Text,TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import { COLORS, commonFontStyle } from "../constant/theme";

 export default function CustomTextInput({
    title,
    placeholder,
    leftIcon,
    rightIcon,
    setValue,
    containerStyle,
    isSecureEntry = false,
    onIconPress,
    lableStyle,
    inputStyle,
    inputViewStyle,
}){
return(
    <View style={[{
        width:'80%',
        marginTop:50
    },containerStyle]}>
    <Text style={{...style.bold,...lableStyle}}>{title}</Text>
       
        <View style={{
            flexDirection:'row',
            borderBottomWidth:1,
            borderBottomColor:COLORS.primary,
            width:'95%',
            marginLeft:8,
           ...inputViewStyle
        }}>
            {leftIcon && leftIcon}
        <TextInput
        style={{
            height:35,
            fontWeight:'600',
            width:'90%',
            // ...commonFontStyle(14,400,COLORS.black2),
            ...inputStyle
        }}
        secureTextEntry={isSecureEntry}
        placeholder={placeholder}
        onChangeText={(text) => setValue(text)}
        />
        {rightIcon&&rightIcon}
    </View>
    </View>
)
}

const style = StyleSheet.create({

   bold:{
...commonFontStyle(18,'bold',COLORS.black2),
        lineHeight:18,
        marginBottom:10
   }
})