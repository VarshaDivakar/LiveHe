import React,{useEffect} from "react";
import { View, Text, StyleSheet, Pressable,BackHandler } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Dashboard from "../component/DashBoard";
import { COLORS, commonFontStyle, width } from "../constant/theme";
import { styles } from "../styles";
import GradientBox from "../component/GradientBox";
import { useNavigation } from "@react-navigation/native";
export default function OutOfLives() {
    const navigation = useNavigation();
    return (
        <Dashboard number={5}>
            <View  style={[styles.pasteCardcontainer, {
                height: '78%',
                width: '90%',
                alignItems: 'center',
                paddingVertical: 50,
                // backgroundColor:'rgba(255, 255, 255, 0.7)',
                //   backgroundColor:'yellow'
            }]}>
                <Text style={{
                    ...commonFontStyle(16,300,COLORS.gray1)
                }}>Out of lives!!</Text>
                <Text style={{
                    ...commonFontStyle(17,400,COLORS.gray1),
                    marginTop:30,
                    marginBottom:20
                }}>Reload options</Text>
                <Pressable onPress={()=> navigation.navigate('PaymentMethod')}>
                <GradientBox 
                leftValue={5} 
                rightValue={15} 
                containerStyle={style.gradientStyle}/>
                </Pressable>
                <GradientBox 
                leftValue={15} 
                rightValue={50}
                containerStyle={style.gradientStyle}/>
                <GradientBox 
                leftValue={30} 
                rightValue={100}
                containerStyle={style.gradientStyle}/>
            </View>
        </Dashboard>
    )
}
const style = StyleSheet.create({
    // gradientView: {
    //     backgroundColor: 'linear-gradient(to right, #ea5297 43%, #47c1f1 99%)',
    //     height: 100,
    //     width: '95%',
    //     borderRadius: 15,
    //     justifyContent: 'space-evenly',
    //     flexDirection: 'row',
    //     alignItems: 'center'
    //     // backgroundColor:COLORS.primary
    // }
    gradientStyle:{
        marginVertical:10,
        width:'85%'
    }
})