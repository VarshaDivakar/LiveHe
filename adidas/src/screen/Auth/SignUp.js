import React, { useState } from "react";
import {View,Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import Auth from ".";
import CustomButton from "../../component/CustomButton";
import CustomTextInput from "../../component/CustomTextInput";
import { COLORS, width } from "../../constant/theme";
import { alphaStringValidation, contactNumVadation, emailValidation, passwordValidation } from "../../utils/Validation";
import CloseEye from "../../assets/icon/CloseEye.svg";
import OpenEye from "../../assets/icon/OpenEye.svg";
import Icon from 'react-native-vector-icons/Ionicons'

export default function SignUp(props){

    const [userName,setUserName] = useState('');
    const [fullName,setFullName] = useState('');
    const [country,setCountry] = useState('');
    const [email,setEmail] = useState('');
    const [contactNum,setContactNum] = useState('');
    const [password,setPassword] = useState('');
    const [isSecureEntry,setIsSecureEntry] = useState(true);
    const oneyesPress = ()=>{
        setIsSecureEntry(!isSecureEntry);
    }
  const onLoginPress=()=>{
    props.navigation.navigate('Login');
  }
  const onSignUpPress =()=>{
    if(!alphaStringValidation(userName))
    alert('Please Enter valid UserName');
    else if(!alphaStringValidation(fullName))
    alert('Please Enter Valid Full Name');
    else if(!alphaStringValidation(country))
    alert('Please Enter valid Country');
    else if(!emailValidation(email))
    alert(contactNumVadation(country))
    else if(!passwordValidation(password))
    alert('Please enter password')
    else
    alert('Successfully SignUp');
  }
return(
    <Auth>
        <Text style={style.extraBold}>Sign Up</Text>


        <ScrollView
        style={{
          width:'100%',
        //   backgroundColor:'green',
          flex:1
        }}
         showsVerticalScrollIndicator={false}>
            <View style={{
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                paddingBottom:100
            }}>
        <CustomTextInput 
        title='Usename' 
        placeholder='UserName' 
        containerStyle={{marginTop:30,
        }}
        setValue={setUserName}/>

         <CustomTextInput 
         title='Full name' 
        placeholder='Full name' 
        setValue={setFullName}
        containerStyle={{marginTop:30}}/>

         <CustomTextInput title='Country' 
          setValue={setCountry}
        placeholder='Country' 
        containerStyle={{marginTop:30}}/>

         <CustomTextInput 
         title='Email' 
        placeholder='Email' 
        setValue={setEmail}
        containerStyle={{marginTop:30}}/>

         <CustomTextInput 
         title='Contact Number' 
         setValue={setContactNum}
        placeholder='Contact Number' 
        containerStyle={{marginTop:30}}/>

         <CustomTextInput 
         title='Password' 
        placeholder='Password' 
        isSecureEntry={isSecureEntry}
        rightIcon={
          <TouchableOpacity onPress={()=>oneyesPress()}>
   {isSecureEntry?
   <Icon name='eye-off-sharp' size={30} color={'#7C7C7C'}/> :
   <Icon name='eye' size={30} color={'#7C7C7C'}/>
   }
   </TouchableOpacity> 
    }
        setValue={setPassword}
        containerStyle={{marginTop:30}}/>

       <CustomButton 
       title='Sign Up' 
       onPress={onSignUpPress}/>

        <View style={{
            flexDirection:'row',
            marginTop:25
        }}>
            <Text style={{
                color:COLORS.textColor,
                fontSize: 18
            }}>Already have an account? </Text>
            <TouchableOpacity onPress={()=> onLoginPress()}>
            <Text style={{
                color:COLORS.textColor,
                fontSize: 18,
                color:COLORS.primary
            }}>Log in</Text>
            </TouchableOpacity>
           
        </View>
        </View>
        </ScrollView>
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
})