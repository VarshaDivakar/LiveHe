import React,{useEffect} from "react";
import {View,Text,StyleSheet,Pressable,BackHandler} from 'react-native';
import { styles } from "../styles";
import Dashboard from "../component/DashBoard";
import { COLORS, commonFontStyle, height,width } from "../constant/theme";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
export default function Account(){
    const navigation = useNavigation();
    // useEffect(()=>{
    //   BackHandler.addEventListener(
    //       'hardwareBackPress',
    //      ()=> {navigation.goBack();
    //       return true;
    //   },
    //     );
    // },[])
    return(
        <Dashboard>
              <View style={[styles.pasteCardcontainer, {
                height: '78%',
                width: '90%',
                alignItems: 'center',
                padding:20,
                justifyContent:'center',
            }]}>
          <View style={{
            flexDirection:'row',
            marginBottom:50,
            alignItems:'center'
          }}>
            <Pressable 
            style={{
                position:'absolute',
                left: -width/4,
                height:25,
                width:20,
                backgroundColor:COLORS.white,
             justifyContent:'center',
               paddingLeft:4
            }} onPress={()=>navigation.goBack()}>
          <Icon name='arrow-back-ios' size={20} color={COLORS.primary}/>
          </Pressable>
            <Text style={{
                ...commonFontStyle(16,300,COLORS.gray1),
                
                }}>Account</Text>
          </View>


          {/* <Pressable style={style.LinkView}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>Username</Text>
          </Pressable> */}
          <Pressable style={style.LinkView}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>Full name</Text>
          </Pressable>
          <Pressable style={style.LinkView}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>Email</Text>
          </Pressable>

          <Pressable style={style.LinkView}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>contact Number</Text>
          </Pressable>
          {/* <Pressable style={style.LinkView}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>Change Password</Text>
          </Pressable> */}
          <Pressable style={[style.LinkView,{borderBottomWidth:0,}]}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>Country</Text>
          </Pressable>
            </View>
        </Dashboard>
    )
}
const style = StyleSheet.create({
LinkView:{
    borderBottomColor: COLORS.gray1,
    borderBottomWidth:0.2,
    width:'80%',
    alignItems:'center',
    height:60,
    justifyContent:'center',
    // backgroundColor:'rgba(234,82,151,0.8 )'
},
isSelect:{
    
}

})
 