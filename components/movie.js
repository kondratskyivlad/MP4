import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Dimensions, Image, Text, ScrollView} from 'react-native';
import MoviesList from '../MoviesList.json'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

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

let data = [];

MoviesList.Search.map((item, i) => (
    data.push(item)
))

const getImage = (item) => {
    switch (item) {
        case 'Poster_01.jpg':
            return require('../assets/posters/Poster_01.jpg');
        case 'Poster_02.jpg':
            return require('../assets/posters/Poster_02.jpg');
        case 'Poster_03.jpg':
            return require('../assets/posters/Poster_03.jpg');
        case 'Poster_05.jpg':
            return require('../assets/posters/Poster_05.jpg');
        case 'Poster_06.jpg':
            return require('../assets/posters/Poster_06.jpg');
        case 'Poster_07.jpg':
            return require('../assets/posters/Poster_07.jpg');
        case 'Poster_08.jpg':
            return require('../assets/posters/Poster_08.jpg');
        case 'Poster_10.jpg':
            return require('../assets/posters/Poster_10.jpg');
        default:
            return require('../assets/Coming-Soon.png');
    }
};


const Movie = () => {
    return (
        <ScrollView>
            <View style={orientation().MainContainer}>
                {
                    data.map((item, i) => {
                        return(
                            <View style={orientation().CardContainer}>
                                <Card key={item.imdbID}>
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
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default  Movie
