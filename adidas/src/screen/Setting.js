import React from "react";
import { View,Text, StyleSheet, Pressable } from "react-native";
import Dashboard from "../component/DashBoard";
import { COLORS, commonFontStyle } from "../constant/theme";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import PaymentMethod from "./PaymentMethod";
export default function Setting(){
    const navigation = useNavigation();
    return(
        <Dashboard>
              <View style={[styles.pasteCardcontainer, {
                height: '78%',
                width: '90%',
                alignItems: 'center',
                padding:20,
                justifyContent:'center',
                // alignItems:'center'
            }]}>
          <Pressable style={style.LinkView} onPress={()=> navigation.navigate('Account')}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>Account</Text>
          </Pressable>
          <Pressable onPress={()=> navigation.navigate('PaymentMethod')}
          style={style.LinkView}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>Payment Method</Text>
          </Pressable>
          <Pressable style={style.LinkView}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>About</Text>
          </Pressable>
          <Pressable style={style.LinkView}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>Customer service</Text>
          </Pressable>

          <Pressable style={style.LinkView}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>Terms and conditions</Text>
          </Pressable>
          <Pressable style={style.LinkView}>
            <Text style={{...commonFontStyle(16,300,COLORS.gray1)}}>Privacy and policy</Text>
          </Pressable>
          <Pressable style={[style.LinkView,{borderBottomWidth:0,}]}>
            <Text style={{...commonFontStyle(16,300,COLORS.red)}}>Log out</Text>
          </Pressable>
            </View>
        </Dashboard>
    )
}
const style = StyleSheet.create({
LinkView:{
    borderBottomColor: COLORS.gray1,
    borderBottomWidth:0.17,
    width:'80%',
    alignItems:'center',
    height:60,
    justifyContent:'center',
    // backgroundColor:'rgba(234,82,151,0.8 )'
},
isSelect:{
    
}

})