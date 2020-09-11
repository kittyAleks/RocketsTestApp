import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/navigation/RootStackScreen';
import { Provider } from "react-redux";

export default App = () => {
    return (
        <Provider>
            <RootStackScreen/>
        </Provider>
    )
}
