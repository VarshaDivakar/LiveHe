import React, { useState } from "react";
import { View, Text, Image, TextInputComponent } from 'react-native';
import CustomButton from "../component/CustomButton";
import CustomTextInput from "../component/CustomTextInput";
import Dashboard from "../component/DashBoard";
import GradientBox from "../component/GradientBox";
import { COLORS } from "../constant/theme";
import { styles } from "../styles";

export default function CardDetail() {
    const [cardNum, setCardNum] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    return (
        <Dashboard>
            <View style={[styles.pasteCardcontainer, {
                height: '78%',
                width: '90%',
                alignItems: 'center',
                paddingVertical: 30,
                //   backgroundColor:'yellow'
            }]}>

                <GradientBox
                    leftValue={15}
                    rightValue={50}
                    containerStyle={{
                        width: '70%',
                        height: 80,
                    }} />

                <Image style={{marginTop:30}}
                 source={require('../assets/images/mcard.png')} />
                <CustomTextInput
                    title='Card No.'
                    lableStyle={{fontSize: 14 }}
                    inputViewStyle={{height:30}}
                    setValue={setCardNum}
                    containerStyle={{marginTop:30}}
                />

                <CustomTextInput
                    title='Card Holder'
                    lableStyle={{fontSize: 14}}
                    inputViewStyle={{height:30}}
                    setValue={setCardHolder}
                    containerStyle={{marginTop:30}}
                />

                <View style={{flexDirection:'row',
            justifyContent:'space-between',
            width:'90%'}}>
                <CustomTextInput
                    title='Expiry Date'
                    lableStyle={{fontSize: 14}}
                    containerStyle={{ width:'50%',marginTop:30}}
                    inputViewStyle={{height:30}}
                    setValue={setExpiryDate}
                    placeholder={'MM/YY'}
                    
                />
                <CustomTextInput
                    title='CVV'
                    lableStyle={{fontSize: 14}}
                    containerStyle={{width:'30%',marginTop:30}}
                    inputStyle={{ height:30}}
                    setValue={setExpiryDate}
                    placeholder={'***'}
                />
                </View>
               
               <CustomButton title={'Proceed'}/>
            </View>

        </Dashboard>
    )
}