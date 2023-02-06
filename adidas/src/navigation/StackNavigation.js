import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Splash from "../screen/Splash";
import Login from "../screen/Auth/Login"
import SignUp from "../screen/Auth/SignUp";
import Home from "../screen/Home";
import WinningProducts from "../screen/WinningProducts";
import ProductDetail from "../screen/ProductDetail";
import OutOfLives from "../screen/OutOfLives";
import CardDetail from "../screen/CardDetail";
import PaymentMethod from "../screen/PaymentMethod";
import Setting from "../screen/Setting";
import Account from "../screen/Account";
import StoreDetail from "../screen/StoreDetail";
import Congrat from "../screen/Congrat";
import Filter from "../screen/Filter";
import SecondPaymentMethod from "../screen/SecondPaymentMethod";
import Adidases from "../screen/Adidases";
import Proceed from "../screen/Proceed";
import OTP from "../screen/Auth/OTP";
import Map from "../component/Map";

const stack = createNativeStackNavigator();

export default function StackNavigation(){
    return(
        <stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName={'Splash'}>
            <stack.Screen name='Splash' component={Splash}/>
            <stack.Screen name="Login" component={Login}/>
            <stack.Screen name="SignUp" component={SignUp}/>
            <stack.Screen name="Home" component={Home}/>
            <stack.Screen name="WinningProducts" component={WinningProducts}/>
            <stack.Screen name="ProductDetail" component={ProductDetail}/>
            <stack.Screen name="OutOfLives" component={OutOfLives}/>
            <stack.Screen name="CardDetail" component={CardDetail}/>
            <stack.Screen name="PaymentMethod" component={PaymentMethod}/>
            <stack.Screen name="Setting" component={Setting}/>
            <stack.Screen name="Account" component={Account}/>
            <stack.Screen name="StoreDetail" component={StoreDetail}/>
            <stack.Screen name="Congrat" component={Congrat}/>
            <stack.Screen name="Filter" component={Filter}/>
            <stack.Screen name="SecondPaymentMethod" component={SecondPaymentMethod}/>
            <stack.Screen name="Adidases" component={Adidases}/>
            <stack.Screen name="Proceed" component={Proceed}/>
            <stack.Screen name="OTP" component={OTP}/>
            <stack.Screen name="Map" component={Map}/>

        </stack.Navigator>
    )
}