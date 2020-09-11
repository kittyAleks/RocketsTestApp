import React  from 'react'
import { StyleSheet } from 'react-native'

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
// const optionsMainScreenHeader = {
//     headerTitle: 'Alpaca Store',
//     headerLeft: () => <HeaderButtons>
//         <Ionicons onPress={() => alert('Hello')} style={{paddingLeft: 20}}  name='ios-menu' color='white' size={25} />
//     </HeaderButtons>
// };

const RootStack = createStackNavigator();
// const Tab = createBottomTabNavigator();

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
                headerBackground: () => <LinearGradient colors={['#F27527', '#F69493']} style={{height: '100%'}}/>,

            }}
        />
        {/*<RootStack.Screen*/}
        {/*    name='DetailProductScreen'*/}
        {/*    component={DetailProductScreen}*/}
        {/*    options={{*/}
        {/*        headerTitle: 'Product Description',*/}
        {/*        headerRight: () => <HeaderButtons>*/}
        {/*            <Ionicons style={{paddingRight: 10}}*/}
        {/*                         name='ios-basket' color='white' size={23} />*/}
        {/*        </HeaderButtons>,*/}
        {/*        ...defaultOptions,*/}
        {/*        headerBackground: () => <LinearGradient colors={['#F27527', '#F69493']} style={{height: '100%'}}/>,*/}
        {/*    }}*/}
        {/*/>*/}
        {/*<RootStack.Screen*/}
        {/*    name='MainScreen'*/}
        {/*    component={AllTabNavigation}*/}
        {/*    options={{*/}
        {/*        headerBackground: () => <LinearGradient colors={['#F27527', '#F69493']} style={{height: '100%'}}/>,*/}
        {/*        ...defaultOptions,*/}
        {/*        ...optionsMainScreenHeader,*/}
        {/*    }}*/}
        {/*/>*/}
    </RootStack.Navigator>
);

// const MainStack = createStackNavigator();
// const MainNavigator = () => (
//     <MainStack.Navigator>
//         <MainStack.Screen
//             name='MainScreen'
//             component={MainScreen}
//         />
//     </MainStack.Navigator>
// );
// const TelegramStack = createStackNavigator();
// const TelegramNavigator = () => (
//     <TelegramStack.Navigator>
//         <TelegramStack.Screen
//             name='TelegramScreen'
//             component={TelegramScreen}
//         />
//     </TelegramStack.Navigator>
// );
// const ProfileStack = createStackNavigator();
// const ProfileNavigator = () => (
//     <ProfileStack.Navigator>
//         <ProfileStack.Screen
//             name='ProfileScreen'
//             component={ProfileScreen}
//         />
//     </ProfileStack.Navigator>
// );
// const SettingsStack = createStackNavigator();
// const SettingsNavigator = () => (
//     <SettingsStack.Navigator>
//         <SettingsStack.Screen
//             name='SettingsScreen'
//             component={SettingsScreen}
//         />
//     </SettingsStack.Navigator>
// );
//
// const AllTabNavigation = () => (
//     <Tab.Navigator
//         barStyle={{
//             backgroundColor: 'white',
//         }}
//         tabBarOptions={{
//             headerBackground: () => <LinearGradient colors={['#F27527', '#F69493']} style={{height: '100%'}}/>,
//             paddingTop: 20,
//             activeTintColor: 'white',
//             // showLabel: false,
//             style: {
//                 height: 75,
//                 paddingTop: 5,
//                 backgroundColor: "rgba(255,125,41,0.54)",
//             },
//         }}>
//
//         <Tab.Screen
//             name='MainScreen'
//             component={DrawerNavigator}
//             options={{
//                 headerShown: false,
//                 tabBarLabel: 'Home',
//                 tabBarIcon: ({ color, size }) => (
//                     <Ionicons name="ios-home" color={'white'} size={20} />
//                 ),
//             }}
//         />
//         <Tab.Screen
//             name='Telegram'
//             component={TelegramNavigator}
//             options={{
//                 tabBarLabel: 'Telegram',
//                 tabBarIcon: ({ color, size }) => (
//                     <Fontisto size={18} color={'white'} name='telegram'/>
//                 ),
//             }}
//         />
//         <Tab.Screen
//             name='Profile'
//             component={ProfileNavigator}
//             options={{
//                 tabBarLabel: 'Profile',
//                 tabBarIcon: ({ color, size }) => (
//                     <Ionicons size={18} color={'white'} name='ios-person'/>
//                 ),
//             }}
//         />
//         <Tab.Screen
//             name='Settings'
//             component={SettingsNavigator}
//             options={{
//                 tabBarLabel: 'Settings',
//                 tabBarIcon: ({ color, size }) => (
//                     <Ionicons name="ios-settings" color={'white'} size={20} />
//                 ),
//             }}
//         />
//     </Tab.Navigator>
// );

export default RootStackScreen

