import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
         </Stack.Navigator>
        </NavigationContainer>
    );
}