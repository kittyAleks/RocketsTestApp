import React  from 'react'

/* Components */
import MainScreen from '../screens/MainScreen';
import DetailRocketScreen from "../screens/DetailRocketScreen";

import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from "react-native-linear-gradient";

const defaultOptions = {
    headerStyle: {
        backgroundColor: '#F69493',
    },

    headerTintColor: '#fff',
    headerTitleStyle: {
        fontSize: 20
    }
};

const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator>
        <RootStack.Screen name='Back'
            component={MainScreen}
                options={{
                    headerTitle: 'Main Screen',
                    ...defaultOptions
                }}
        />
        <RootStack.Screen
            name='DetailRocketScreen'
            component={DetailRocketScreen}
            options={{
                ...defaultOptions,
            }}
        />
    </RootStack.Navigator>
);

export default RootStackScreen

