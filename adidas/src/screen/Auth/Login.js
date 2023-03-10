import React, { useEffect, useState } from "react";
import {View,Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, BackHandler, Alert} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import Auth from ".";
import CustomButton from "../../component/CustomButton";
import CustomTextInput from "../../component/CustomTextInput";
import { COLORS, commonFontStyle, width } from "../../constant/theme";
import { emailValidation,alphaStringValidation,passwordValidation } from "../../utils/Validation";
import CloseEye from "../../assets/icon/CloseEye.svg";
import OpenEye from "../../assets/icon/OpenEye.svg";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation,useRoute } from "@react-navigation/native";
export default function Login(props){
    const navigation = useNavigation();
    const route = useRoute();
    const [userName,setUserName] =useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isSecureEntry,setIsSecureEntry] = useState(true);
    const onSignUpPress = () =>{
        props.navigation.navigate('SignUp');
    }

    const oneyesPress = ()=>{
        setIsSecureEntry(!isSecureEntry);
    }

    const onLoginPress =()=>{
        // if(!alphaStringValidation(userName))
        // alert('Please Enter valid UserName')
         if(!emailValidation(email))
        alert('Please enter email')
        else if(!passwordValidation(password))
        alert('Please enter password')
        else
        // alert('Successfully Sign In');
        props.navigation.navigate('Home');
      }
      
return(
    <Auth>
        <Text style={style.extraBold}>Log In</Text>
        {/* <CustomTextInput title='Usename' 
        setValue={setUserName}
        placeholder='UserName'/> */}
         <CustomTextInput title='Email' 
         setValue={setEmail}
        placeholder='Email'/>
         <CustomTextInput title='Password' 
         setValue={setPassword}
         isSecureEntry={isSecureEntry}
         rightIcon={
               <TouchableOpacity onPress={()=>oneyesPress()}>
        {isSecureEntry?
        <Icon name='eye-off-sharp' size={25} color={'#7C7C7C'}/> :
        <Icon name='eye' size={30} color={'#7C7C7C'}/>
        }
        </TouchableOpacity> 
         }
        placeholder='Password'/>
       <CustomButton title='Log In' 
       onPress={onLoginPress}/>
        <View style={{
            flexDirection:'row',
            marginTop:20
        }}>
            <Text style={{
                ...commonFontStyle(18,200,COLORS.gray2)
            }}>Don't have an account? </Text>
            <TouchableOpacity onPress={onSignUpPress}>
                {/* <ImageBackground source={require('../../assets/images/buttonBg.png')}> */}
            <Text style={{
                 ...commonFontStyle(18,300,COLORS.primary)
            }}>Sign Up</Text>
            {/* </ImageBackground> */}
            </TouchableOpacity>
           
        </View>
    </Auth>
)
}
const style = StyleSheet.create({
    extraBold:{
        fontSize:35,
        fontWeight:'bold',
        lineHeight:35,
        color:'#424242'
    },
    // syle={{borderColor:'gray',
    //         borderWidth:0.16,
    //         height:50,
    //         borderBottomWidth:2,
    //         borderLeftWidth:2,
    //         borderRightWidth:2,
    //         justifyContent:'center',
    //         alignItems:'center',
    //         elevation:10,
    //         borderRadius:10,
            
    //         // shadowColor: 'black',
    //         shadowOffset: {width: 2, height: 1},
    //         shadowOpacity: 1,
            
    //         }}
})