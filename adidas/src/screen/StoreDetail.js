import React, { useState,useEffect } from "react";
import {View,Text, ImageBackground, StyleSheet,BackHandler} from 'react-native';
import StoreDetailModal from "../component/StoreDetailModal";
import { useNavigation } from "@react-navigation/native";
export default function StoreDetail(){
    const navigation = useNavigation();
    // useEffect(()=>{
    //     BackHandler.addEventListener(
    //         'hardwareBackPress',
    //        ()=> {navigation.goBack();
    //         return true;
    //     },
    //       );
    //   },[])
    const [storeModalVisible,setStoreModalVisible] = useState(true);
    return(
        <View style={style.container}>
            <ImageBackground style={style.imageContainer} source={require('../assets/images/bg.png')}/>
         {
            storeModalVisible&&
 <StoreDetailModal modalVisible={storeModalVisible}/>
         }
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },

    imageContainer:{
height:'100%',
width:'100%'
    }
})