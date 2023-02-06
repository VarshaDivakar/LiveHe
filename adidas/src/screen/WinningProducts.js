import React,{useEffect} from "react";
import { View, Text, Image, FlatList, Pressable,BackHandler } from 'react-native';
import Dashboard from "../component/DashBoard";
import { styles } from "../styles";
import { WinningProduct } from "../Dummy";
import { COLORS, width } from "../constant/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
export default function WinningProducts() {
    const navigation = useNavigation();
    // useEffect(()=>{
    //     BackHandler.addEventListener(
    //         'hardwareBackPress',
    //        ()=> {navigation.goBack();
    //         return true;
    //     },
    //       );
    //   },[])
    const _renderProduct = ({ item }) => {
        console.log('image==>', item.product);
        return (
            <Pressable onPress={()=> navigation.navigate('ProductDetail')}
            style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 6,
                marginBottom: 18,
                height: 'auto',
                paddingTop:14
                // backgroundColor:'green'
            }}>
                <View style={{
                    width: width / 11,
                    height: width / 11,
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                    borderRadius: 20,
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    position: 'absolute',
                    // left: width / 6.5,
                    top: -0,
                    zIndex: 1
                }}>
                    <Image style={{
                        width: 20, height: 20,
                    }}
                        resizeMode={'contain'}
                        source={require('../assets/images/adidas.png')} />
                </View>

                <View style={{
                    width: width / 2.6,
                    height: width / 2.6,
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                    borderRadius: width / 20,

                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <Image style={{
                        width: 80, height: 80
                    }}
                        source={require('../assets/images/shirt.png')} />

                    <View style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 15,
                        width: '90%',
                        // backgroundColor:'yellow',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize:10
                        }}>5:25:60</Text>
                        <Image style={{
                            height: 20,
                            width: 20,
                            position: 'absolute',
                            right: 5
                        }}
                            resizeMode={'contain'} source={require('../assets/images/share.png')} />
                    </View>
                </View>
            </Pressable>
        )
    }
    return (
        <Dashboard number={2}>
            <View style={[styles.pasteCardcontainer, {
                height: '78%',
                width: '90%',
                alignItems: 'center'
            }]}>
                <Text style={{
                    fontSize: 16,
                    color: '#636363',
                    marginVertical: 10,
                }}>
                    Winnings
                </Text>
                <FlatList data={WinningProduct}
                    numColumns={2}
                    renderItem={_renderProduct}
                    contentContainerStyle={{
                        marginTop: 20,
                        justifyContent: 'space-evenly',
                    }}
                />

            </View>
        </Dashboard>
    )
}