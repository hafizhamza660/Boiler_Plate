import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './src/Navigator';
import { HomeStack } from "./src/MainNavigator";
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
    const dispatch = useDispatch()
    const login = useSelector((state) => state.user.login);


    return (
        <NavigationContainer>
            {!login ?
                <AuthStack />
                : <HomeStack />
            }
        </NavigationContainer>
    );
}