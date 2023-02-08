import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Pressable, KeyboardAvoidingView } from 'react-native';
import PasteBoard from "../component/PasteBoard";
import { COLORS, commonFontStyle, height, width } from "../constant/theme";
import { styles } from '../styles';
import { useNavigation } from "@react-navigation/native";
import AdidasComponent from "./AdidasComponent";
import CustomStatusBar from "./CustomStatusBar";
import MapView,{Marker} from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';

export default function Dashboard({ number,
    showGift = true,
    showSetting = true,
    ...props }) {
    const navigation = useNavigation();
    console.log('width==>', width / 6.2)
    const onAdidasIconClick = () => {
        navigation.navigate('StoreDetail');
    }
    const [numberImg, setNumberImg] = useState()
    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
       
      });
    
    useEffect(() => {
        if (number == 0)
            setNumberImg(require('../assets/images/zero.png'));
        else if (number == 2)
            setNumberImg(require('../assets/images/two.png'));
        else if (number == 5)
            setNumberImg(require('../assets/images/five.png'));
        else if (number == 6)
            setNumberImg(require('../assets/images/six.png'));
        else
            setNumberImg(require('../assets/images/zero.png'));
    }, []);


    useEffect(() => {
        const requestLocationPermission = async () => {
          if (Platform.OS === 'ios') {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  title: 'Location Access Required',
                  message: 'This App needs to Access your location',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
                getOneTimeLocation();
                subscribeLocationLocation();
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
        requestLocationPermission();
        return () => {
          Geolocation.clearWatch(watchID);
        };
      }, []);



    const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition((pos) => {
          const crd = pos.coords;
          console.log('location ==>',pos.coords);
          setPosition({
            latitude: crd.latitude,
            longitude: crd.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        })
        // .catch((err) => {
        //   console.log(err);
        // });
      };

      const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
          (position) => {
            //Will give you the location on location change
            
            setLocationStatus('You are Here');
            console.log(position);
    
            //getting the Longitude from the location json        
            const currentLongitude =
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
    
            //Setting Latitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 1000
          },
        );
      };


    return (
        <KeyboardAvoidingView  
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
         style={style.container}>
            <CustomStatusBar/>
            <MapView
          style={{ height:'100%',width:'100%' }}
          initialRegion={position}
      showsUserLocation={true}
      showsMyLocationButton={true}
      followsUserLocation={true}
      showsCompass={true}
      scrollEnabled={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={true}
         >
             <Marker
       title='Yor are here'
       description='This is a description'
       coordinate={position}/>
         </MapView>
                <View style={style.subContainer}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        
                    }}>
                        <View opacity={0.7} style={[styles.pasteCardcontainer, {
                            width: width / 1.34,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            height:55,
                            borderRadius:18
                            // backgroundColor:'white',
                            // opacity:0.8
                        }]}>
                            <TextInput
                                style={{ ...commonFontStyle(16, '300', COLORS.gray2) }}
                                placeholder="Search brands..."
                                placeholderTextColor={COLORS.gray2} />
                            <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                                <Image
                                    source={require('../assets/images/menu.png')} />
                            </TouchableOpacity>
                        </View>
                        <Pressable onPress={() => navigation.navigate('OutOfLives')}
                            style={[styles.pasteCardcontainer, {
                                width: width / 7,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height:55,
                            borderRadius:15

                            }]}>

                            <Image style={{
                                width: 35,
                                height: 35,
                            }} resizeMode={'contain'} source={numberImg} />


                        </Pressable>
                    </View>
                    <Pressable style={{
                        position: 'absolute',
                        top: '50%',
                    }} onPress={() => navigation.navigate('Adidases')}>
                        <AdidasComponent onPress={onAdidasIconClick} containerStyle={{
                            width: 70,
                            height: 70,
                        }} imageStyle={{
                            width: 40,
                            height: 40,

                        }} />
                    </Pressable>
                    {props.children}

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginBottom: 30,
                        // position:'absolute',
                        // bottom:20
                    }}>
                        {showSetting && <Pressable onPress={() => navigation.navigate('Setting')}
                            style={[styles.pasteCardcontainer, {
                                width: width / 6.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                opacity: 0.8
                            }]}>
                            <Image source={require('../assets/images/setting.png')} />
                        </Pressable>
                        }

                        {showGift && <Pressable onPress={() => navigation.navigate('WinningProducts')}
                            style={[styles.pasteCardcontainer, {
                                width: width / 6.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                opacity: 0.8
                            }]}>
                            <Image style={{
                                width: 35,
                                height: 35,
                            }} resizeMode="contain"
                                source={require('../assets/images/gift.png')} />
                        </Pressable>
                        }
                    </View>

                </View>
        </KeyboardAvoidingView>
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
        justifyContent: 'space-between',
        marginTop:15,
        position:'absolute',
        height:'100%'
        // backgroundColor:'yellow'
    },
    background: {
        flex: 1,
        height: height,
        width: width,
        alignItems: 'center'
    },
})