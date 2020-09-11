import React from 'react';
import {View, StyleSheet, Text, Platform, TouchableOpacity, Image, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {FONTFAMILY} from '../theme';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const MainRocketList = ({item, rowID, onOpen}) => {
    console.log('AAA', item)
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity key={item.id}>
                <View>
                <TouchableOpacity onPress={() => onOpen(item)}>
                    <Image style={styles.imageContainer}
                       source={item.image ? {uri: item.image} : require('../../src/img/atlas_lv.jpg')}
                    />
                    <Text style={styles.textImgStyle}>{item.name}</Text>
                </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    imageContainer: {
        marginBottom: 10,
        marginLeft: 10,
        height: 200,
        width: 380,
        marginTop: 10,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 10,
    },
    textImgStyle: {
        color: '#eeeeee',
        fontFamily: FONTFAMILY.MAIN_FONT,
        fontSize: 25,
        fontWeight: '400',
        position: 'absolute',
        left: 40,
        paddingTop: 150,
        paddingHorizontal: 10
    },
});

