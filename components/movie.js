import React, { useState } from 'react';
import {StyleSheet, View, Dimensions,
    Image, Text, ScrollView, TouchableNativeFeedback } from 'react-native';
import MoviesList from '../MoviesList.json'
import {Card, ListItem, Button, Header, Input} from 'react-native-elements'
import { getImage } from '../constants/data'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Appbar, TextInput } from 'react-native-paper';
import SearchBar from "react-native-dynamic-search-bar";

// import {NavigationContainer} from "@react-navigation/native";

const portrait_styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "center",
    },
    CardContainer: {
        flex: 0,
        alignItems: "center",
        justifyContent: "space-between",
    },
    ViewContainer: {
        height: 300,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        width: 250,
        flex: 0,
        textAlign: 'center',
        alignItems: "center",
        marginBottom: 10,
    },
    TextContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },
    description: {
        fontSize: 20,
        flex: 0,
        textAlign: 'center',
        alignItems: "center",
        flexWrap: 'wrap',
    },
    img: {
        height: 250,
        width: 150,
        marginBottom: 10,
    },
});

const landscape_styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: 'space-around'
    },
    CardContainer: {
        flex: 0,
        alignItems: "center",
        justifyContent: "space-between",
    },
    ViewContainer: {
        height: 300,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        width: 250,
        flex: 0,
        textAlign: 'center',
        alignItems: "center",
        marginBottom: 10,
    },
    TextContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },
    description: {
        fontSize: 20,
        flex: 0,
        textAlign: 'center',
        alignItems: "center",
        flexWrap: 'wrap',
    },
    img: {
        height: 250,
        width: 150,
        marginBottom: 10,
    },
});

const orientation = () => {
    const dim = Dimensions.get('screen');
    if (dim.height >= dim.width) {
        return portrait_styles
    } else {
        return landscape_styles
    }
}

const MyTheme = {
    dark: false,
    colors: {
        primary: '#beae8d',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

const inputTheme = {
    dark: false,
    colors: {
        primary: '#bdae8d',
        background: '#bdae8d',
        text: 'rgb(28, 28, 30)',
    },
};

let data = [];

MoviesList.Search.map((item, i) => (
    data.push(item)
))

function headerToHome() {
    return (
        <View>
            <Icon
                style={[{color: '#eee',  position: 'relative'}]}
                size={25}
                name={'home'}
            />
        </View>
    )
}

function Movie({navigation}, props){

    const [text, setText] = React.useState('');

    const handleSearch = () => {
        console.log('Searching');
    }

    const goHome = () => {
        navigation.navigate('Home');
    }

    const handleAdd = () => {
        console.log('Adding');
    }

    return (
        <ScrollView>
            <View>
                <Appbar.Header theme={MyTheme}>
                    <Appbar.Action icon="home" onPress={goHome} />
                    <SearchBar
                        placeholder="Search here"
                        onPress={() => alert("onPress")}
                        onChangeText={(text) => console.log(text)}
                        style={{flex: 1}}
                    />
                    <Appbar.Action icon="plus" onPress={handleAdd} />
                </Appbar.Header>
            </View>
            <View style={orientation().MainContainer} test={'test'}>
                {
                    data.map((item, index) => {
                        return(
                            <TouchableNativeFeedback
                                style={orientation().CardContainer}
                                key={index}
                                onPress={() => {
                                    navigation.navigate('Details');
                                    console.log(item.imdbID);
                                    navigation.navigate('Details', {
                                        Title: item.Title,
                                        Poster: item.Poster,
                                        Type: item.Type,
                                    });
                                }}
                            >
                                <Card>
                                    <Text style={orientation().title}>{
                                        item.Title.length >= 20 ?
                                            item.Title.slice(0, 85 - 1) + '…'
                                            : item.Title
                                    }</Text>
                                    <Card.Divider/>
                                    <View style={orientation().ViewContainer}>
                                        <Image
                                            resizeMode="cover"
                                            source={
                                                getImage(item.Poster)
                                            }
                                            style={orientation().img}
                                        />
                                        <View style={orientation().TextContainer}>
                                            <Text style={orientation().description}>{
                                                item.Type === '' ? 'movie' : item.Type
                                            }</Text>
                                            <Text style={orientation().description}>{
                                                item.Year === '' ?
                                                    ', year unknown' :
                                                    ' from ' + item.Year
                                            }</Text>
                                        </View>
                                    </View>
                                </Card>
                            </TouchableNativeFeedback>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Movie
