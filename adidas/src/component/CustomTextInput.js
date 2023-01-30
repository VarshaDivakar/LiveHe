import React from "react";
import {View,Text,TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import { COLORS } from "../constant/theme";

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
        width:'90%',
        marginTop:50
    },containerStyle]}>
    <Text style={{...style.bold,...lableStyle}}>{title}</Text>
       
        <View style={{
            flexDirection:'row',
            borderBottomWidth:1,
            borderBottomColor:COLORS.primary,
            width:'95%',
            marginLeft:15,
           ...inputViewStyle
        }}>
            {leftIcon && leftIcon}
        <TextInput
        style={{
            // borderBottomWidth:1,
            // borderBottomColor:COLORS.primary,
            height:42,
            // marginLeft:15,
            width:'90%',
            ...inputStyle
        }}
        secureTextEntry={isSecureEntry}
        placeholder={placeholder}
        onChangeText={(text) => setValue(text)}
        />
        {rightIcon&&rightIcon}
         {/* <TouchableOpacity onPress={()=>onIconPress()}>
        {isSecureEntry?
        <Icon name='eye-off-sharp' size={30} color={'#7C7C7C'}/> :
        <Icon name='eye' size={30} color={'#7C7C7C'}/>
        }
        </TouchableOpacity> */}
        {/* </View> :
 <TextInput
 style={{
     borderBottomWidth:1,
     borderBottomColor:COLORS.primary,
     height:42,
     marginLeft:15,
     ...inputStyle
 }}
 secureTextEntry={isSecureEntry}
 placeholder={placeholder}
 onChangeText={(text) => setValue(text)}
 />
        } */}
       
       
    </View>
    </View>
)
}

const style = StyleSheet.create({
    // extraBold:{
    //     fontSize:35,
    //     fontWeight:'bold',
    //     lineHeight:35,
    //     color:'#424242'
    // },
   bold:{
    fontSize:18,
        fontWeight:'bold',
        lineHeight:18,
        color:'#444444'
   }
})