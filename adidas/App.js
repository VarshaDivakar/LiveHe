import React from "react";
import {View} from "react-native"
import Splash from "./src/screen/Splash";
import StackNavigation from "./src/navigation/StackNavigation"
import { NavigationContainer } from '@react-navigation/native';
export default function App(){
  return(
   
     <NavigationContainer>
        <StackNavigation/>
       </NavigationContainer>
   
  )
}