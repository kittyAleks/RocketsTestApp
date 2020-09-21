import React, {useState, useEffect} from 'react'
import { View, StyleSheet, ImageBackground, FlatList, ActivityIndicator } from 'react-native'
import { Container } from 'native-base'
import { MainRocketList } from "../components/MainRocketList"
import LinearGradient from "react-native-linear-gradient"
import { useDispatch, useSelector } from "react-redux"
import { getRockets, loadMoreRockets } from '../store/action/rocketsAction';

export default function MainScreen({navigation, route}) {
    navigation.setOptions({
        headerTitle: 'Rockets Screen',
        headerBackground: () => <LinearGradient colors={['#9d74f2', '#D4BFF6']} style={{ height: '100%' }} />,
    });

    const dispatch = useDispatch();
    const rockets = useSelector(state => state.allRockets);

    useEffect( () => {
        getRockets(1)
            .then(rockets => {
            dispatch(rockets);
        }).catch(err => {
            console.log("ERR", err);
        });

    }, [dispatch]);

    const showMore = (page = 1) => {
        let pages = page + 1;
        loadMoreRockets(pages)
            .then(rockets => dispatch(rockets))
    };
    const renderFooter = () => {
        return <View style={{paddingVertical: 30}}>
            <ActivityIndicator size='large' color={'#4C55DD'}/>
        </View>
    };

    const openDetailRocketScreen = item => {
        navigation.navigate('DetailRocketScreen', {
            item: item,
        })
    };
    return (
        <Container style={{
            flex: 1,
        }}>
            <View>
                <ImageBackground
                    style={{flex: 1, width: 500, height: 900, opacity: 0.6}}
                    resizeMode='stretch'
                    source={require('../../src/img/rocket_fon.jpg')}
                    blurRadius={2}>
                </ImageBackground>
            </View>
            <View style={{flex: 1}}>
                <FlatList
                    data={rockets}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={showMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={renderFooter}
                    renderItem={({item}) => {
                        return <MainRocketList item={item} onOpen={openDetailRocketScreen}
                        />
                    }}
                />
            </View>
        </Container>
    )
}

