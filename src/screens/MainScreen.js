import React, {useState, useEffect} from 'react'
import { View, StyleSheet, ImageBackground, FlatList, ActivityIndicator } from 'react-native'
import {Container, Input, InputGroup, Text} from 'native-base'
import {MainRocketList} from "../components/MainRocketList";
import LinearGradient from "react-native-linear-gradient";

export default function MainScreen({navigation, route}) {
    navigation.setOptions({
        headerTitle: 'Rockets Screen',
        headerBackground: () => <LinearGradient colors={['#9d74f2', '#D4BFF6']} style={{ height: '100%' }} />,
    });
    // const item  = route.params;
    const [allRockets, setAllRockets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getAllRockets();

    }, []);

    let getAllRockets = async () => {
        console.log('QQQ page', page)
        await fetch(`https://api.swaggerhub.com/apis/?limit=10&${page}`, {
        // await fetch(`https://ll.thespacedevs.com/2.0.0/launch/?${page}&limit=10`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then((result) => {
                console.log('[AAA result]', result);
                const res = result.apis;
                // const res = result.results;
                setAllRockets([...allRockets, ...res]);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log('[Error]', err.message);
            });
    };

    const showMore = () => {
        setPage(page + 1)
        getAllRockets()
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
                    data={allRockets}
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

const styles = StyleSheet.create({
    mainTextStyle: {
        flexDirection: 'column',
        paddingHorizontal: 30,
        textAlign: 'center',
        paddingVertical: 200,
    },
    titleSignUp: {
        color: 'white',
    },
    title: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center'
    },
    center: {
        paddingTop: 3,
    },
    info: {
        fontSize: 20,
        marginHorizontal: 20,
        margin: 20
    },
});


