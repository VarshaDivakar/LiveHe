import React,{useEffect} from "react";
import { View, Text, Image, StyleSheet, Pressable,BackHandler } from 'react-native';
import CustomButton from "../component/CustomButton";
import CustomTextInput from "../component/CustomTextInput";
import Dashboard from "../component/DashBoard";
import GradientBox from "../component/GradientBox";
import { COLORS, commonFontStyle, height } from "../constant/theme";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import PaymentMethodComponent from "../component/PaymentMethodComponent";
export default function PaymentMethod() {

    const navigation = useNavigation();
    
    return (
        <Dashboard >
            <View style={[styles.pasteCardcontainer, {
                height: '78%',
                width: '90%',
                alignItems: 'center',
                paddingVertical: 25,
            }]}>
                <GradientBox
                    leftValue={15}
                    rightValue={50}
                    containerStyle={{
                        width: '70%',
                        height: 80,
                    }} />
                <PaymentMethodComponent />

            </View>
        </Dashboard>
    )
}
