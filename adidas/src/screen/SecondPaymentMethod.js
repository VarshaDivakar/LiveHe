import React,{useEffect} from "react";
import {View,Text,Pressable,BackHandler} from 'react-native';
import Dashboard from "../component/DashBoard";
import PaymentMethodComponent from "../component/PaymentMethodComponent";
import { COLORS, height, width } from "../constant/theme";
import { styles } from "../styles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
export default function SecondPaymentMethod(){
const navigation = useNavigation();
    // useEffect(()=>{
    //     BackHandler.addEventListener(
    //         'hardwareBackPress',
    //        ()=> {navigation.goBack();
    //         return true;
    //     },
    //       );
    //   },[])
    return(
        <Dashboard>
             <View style={[styles.pasteCardcontainer, {
                height: '78%',
                width: '90%',
                alignItems: 'center',
                paddingVertical: 25,
            }]}>
                <View style={{
                    height:'10%',
                    width:'80%',
                    justifyContent:'center'
                }}>
                 <Pressable 
            style={{
                height:25,
                width:20,
                backgroundColor:COLORS.white,
             justifyContent:'center',
               paddingLeft:4
            }} onPress={()=>navigation.goBack()}>
          <Icon name='arrow-back-ios' size={20} color={COLORS.primary}/>
          </Pressable>
          </View>
          <PaymentMethodComponent/>
            </View>
        </Dashboard>
    )
}