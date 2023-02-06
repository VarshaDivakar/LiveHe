import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, BackHandler } from 'react-native';
import Dashboard from "../component/DashBoard";
import PasteBoard from "../component/PasteBoard";
import { height, width } from "../constant/theme";
import { styles } from '../styles';
import { useNavigation } from "@react-navigation/native";
export default function Home(props) {
    const navigation = useNavigation();
//   useEffect(()=>{
//     BackHandler.addEventListener(
//         'hardwareBackPress',
//        ()=> navigation.goBack(),
//       );
//   },[])
   
 
    return (
        <Dashboard number={0}/>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
        // backgroundColor:'yellow'
    },
    background: {
        flex: 1,
        height: height,
        width: width,
        alignItems: 'center'
    },
})