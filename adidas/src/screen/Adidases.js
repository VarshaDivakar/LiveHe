import React, { useState,useEffect } from "react";
import { ImageBackground, View,Pressable, TouchableOpacity,Text,BackHandler } from 'react-native';
import AdidasComponent from '../component/AdidasComponent';
import StoreDetailModal from "../component/StoreDetailModal";
import { useNavigation } from "@react-navigation/native";
import { COLORS, commonFontStyle } from "../constant/theme";
export default function Adidases() {
  const navigation = useNavigation();
  // useEffect(()=>{
  //   BackHandler.addEventListener(
  //       'hardwareBackPress',
  //      ()=> {navigation.goBack();
  //       return true;
  //   },
  //     );
  // },[])
  const [storeModalVisible, setStoreModalVisible] = useState(true);
  const OnPress =()=>{
    console.log('Click')
  }
  return (
    <ImageBackground
     style={{
      flex: 1,
      // paddingTop:500
    }} source={require('../assets/images/bg.png')}>
      <AdidasComponent
        containerStyle={{
          width: 30,
          height: 30,
          position: 'absolute',
          bottom: '50%',
          left: 20
        }}
        imageStyle={{ width: 10, height: 10 }}
      />
      <Pressable style={{
        position: 'absolute',
        top: '50%',
        right: 20
      }} onPress={() => navigation.navigate('Congrat')}>
      <AdidasComponent
        containerStyle={{
          width: 70,
          height: 70,
        }}
        imageStyle={{ width: 50, height: 50 }}
      />
      </Pressable>
      <Pressable style={{
          position: 'absolute',
          bottom: '60%',
          right: 20
      }} onPress={() => {
        // console.log('onClick')
        navigation.navigate('Congrat')}}>
      <AdidasComponent
        containerStyle={{
          width: 50,
          height: 50,
        
        }}
        imageStyle={{ width: 30, height: 30 }}
      />
</Pressable>
      <AdidasComponent
        containerStyle={{
          width: 20,
          height: 20,
          position: 'absolute',
          bottom: '60%',
          left: '50%'
        }}
        imageStyle={{ width: 10, height: 10 }}
      />
      {
        storeModalVisible &&
        <StoreDetailModal 
        onClose={() => setStoreModalVisible(false)}
        modalVisible={storeModalVisible} />
      }
    </ImageBackground>
  )
}