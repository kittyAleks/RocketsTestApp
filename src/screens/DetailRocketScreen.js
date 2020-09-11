import React, {useEffect, useState } from 'react'
import {View, StatusBar, StyleSheet, ActivityIndicator, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native'
import {Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon, Button} from 'native-base'
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

export default function DetailRocketScreen({navigation, route}) {
    navigation.setOptions({
        headerTitle: 'Rocket launch details',
        headerBackground: () => <LinearGradient colors={['#9d74f2', '#D4BFF6']} style={{ height: '100%' }} />,
    });


    const { item } = route.params;
    console.log('EEE Rockets DetailRocketScreen item', item );

    return (
        <Container style={{
            flex: 1,
        }}>
            <View>
                <ImageBackground
                    style={{flex: 1, width: 500, height: 900, opacity: 0.6}}
                    resizeMode='stretch'
                    source={require('../../src/img/rocket_fon.jpg')}
                    blurRadius={1}>
                </ImageBackground>
                <ScrollView>
                    <View style={styles.mainContainer}>
                         <View key={item.index}>
                            <TouchableOpacity>
                                <Image style={styles.imageContainer}
                                       source={item.image ? {uri: item.image} : require('../../src/img/atlas_lv.jpg')}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={{fontSize: 18, color: '#696969'}}>{item.name}</Text>
                                    {/*<View style={{flexDirection: 'row', justifyContent: 'space-between', }}>*/}
                                    {/*    <Text style={{fontSize: 18, color: '#696969'}}>{item.rocket.configuration.variant}</Text>*/}
                                    {/*</View>*/}
                                </View>
                            </TouchableOpacity>
                         </View>
                    </View>
                </ScrollView>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        paddingLeft: 20,
        marginTop: 15,
        borderRadius: 10,
        height: 50,
        backgroundColor: 'white',
        opacity: 0.7
    },
    mainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 30,
        paddingHorizontal: 10,
        paddingBottom: 50,
        shadowColor: '#000000',
        shadowRadius: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.7,
    },
    imageContainer: {
        height: 270,
        width: 370,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        marginBottom: 30,
        backgroundColor: '#eeeeee',
        opacity: 0.9,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 65,
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
});


