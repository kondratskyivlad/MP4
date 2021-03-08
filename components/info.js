import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Dimensions, Image, Text, ScrollView} from 'react-native';
import MoviesList from '../MoviesList.json'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { getImage } from '../constants/data'
import { getFullInfo } from '../constants/data'

const dim = Dimensions.get('screen');

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

const Info = ({route}) => {
    const { Title } = route.params;
    const { Poster } = route.params;
    const { Type } = route.params;

    let data = []

    data.push(getFullInfo(Title))

    return (
        <ScrollView>
            <View>
                <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
                    {
                        Type === 'test' ? <Text>This is test item</Text>:
                            data.map((item, index) => {
                            return(
                                <View key={index}>
                                    <View>
                                        <View>
                                            <Image
                                                resizeMode="cover"
                                                source={
                                                    getImage(Poster)
                                                }
                                                style={orientation().img}
                                            />
                                        </View>
                                        <Text>
                                            {item.Title}
                                        </Text>
                                        <View>
                                            <View>
                                                <Text>Year</Text>
                                                <Text>{item.Year}</Text>
                                            </View>
                                            <View>
                                                <Text>Rating: {item.imdbRating}</Text>
                                                <Text>{item.imdbVotes} people voted</Text>
                                            </View>
                                            <View>
                                                <Text>Genre</Text>
                                                <Text>{item.Genre}</Text>
                                            </View>
                                            <View>
                                                <Text>Duration</Text>
                                                <Text>{item.Runtime}</Text>
                                            </View>
                                            <View>
                                                <Text>Released</Text>
                                                <Text>{item.Released}</Text>
                                            </View>
                                            <View>
                                                <Text>Type</Text>
                                                <Text>{item.Type}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Text>Authors</Text>
                                        <Text>Director - {item.Director}</Text>
                                        <Text>Writer - {item.Writer}</Text>
                                    </View>
                                    <View>
                                        <Text>Main Cast</Text>
                                        <View>
                                            <Text>{item.Actors}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text>Synopsis</Text>
                                        <Text>{item.Plot}</Text>
                                    </View>
                                    <View>
                                        <Text>Description</Text>
                                        <Text>The original language of this film - {item.Language}.
                                            It was released in {item.Country} by {item.Production}.
                                            Also this film was awarded {item.Awards},
                                            as well the film was rated by {item.Rated}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }

                </View>
            </View>
        </ScrollView>
    )
}


export default Info
