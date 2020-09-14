import React from 'react';
import RootStackScreen from './src/navigation/RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import store from './src/store/store'

export default App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStackScreen/>
            </NavigationContainer>
        </Provider>

    )
}

