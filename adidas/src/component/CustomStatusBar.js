import React from "react";
import {StatusBar,View} from 'react-native'
import { COLORS } from "../constant/theme";


export default function CustomStatusBar(){
    return(
    <View><StatusBar barStyle={'dark-content'}  backgroundColor="white"/></View>
    )
}