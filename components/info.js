import React from 'react';
import {StyleSheet, View, Dimensions,
    Image, Text, ScrollView, TouchableHighlight} from 'react-native';
import { getImage } from '../constants/data'
import { getFullInfo } from '../constants/data'

const portrait_styles = StyleSheet.create({
    mainTopContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
    },
    topRightContainer: {
        width: 180
    },
    imgContainer: {
        marginLeft: '2%',
        marginTop: 25,
        height: 255,
        width: 155,
    },
    img: {
        height: 245,
        width: 145,
        borderRadius: 20,
    },
    txtTitle: {
        width: 200,
        fontSize: 22,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    topTxt: {
        color: '#292929',
        fontSize: 18,
        marginBottom: 5,
    },
    bottomTxtContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    bottomTitleTxt: {
        color: '#292929',
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    bottomTxt:{
        color: '#292929',
        fontSize: 18,
        marginBottom: 5,
    },
});

const landscape_styles = StyleSheet.create({
    mainTopContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
    },
    topRightContainer: {
       width: 180,
    },
    imgContainer: {
        marginLeft: '1%',
        marginTop: 25,
        height: 255,
        width: 155,
    },
    img: {
        height: 245,
        width: 145,
        borderRadius: 20,
    },
    txtTitle: {
        width: 230,
        fontSize: 22,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    topTxt: {
        color: '#292929',
        width: 190,
        fontSize: 18,
        marginBottom: 5,
    },
    bottomTxtContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    bottomTitleTxt: {
        color: '#292929',
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    bottomTxt:{
        color: '#292929',
        fontSize: 18,
        marginBottom: 5,
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
                                    <View style={orientation().mainTopContainer}>
                                        <TouchableHighlight style={orientation().imgContainer}>
                                            <Image
                                                resizeMode="cover"
                                                source={
                                                    getImage(Poster)
                                                }
                                                style={orientation().img}
                                            />
                                        </TouchableHighlight>
                                        <View style={orientation().topRightContainer}>
                                            <Text style={orientation().txtTitle}>
                                                {item.Title}
                                            </Text>
                                            <View>
                                                <Text
                                                    style={orientation().topTxt
                                                }>
                                                    Year - {item.Year}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={orientation().topTxt
                                                }>
                                                    Rating: {item.imdbRating}
                                                </Text>
                                                <Text
                                                    style={orientation().topTxt
                                                }>
                                                    {item.imdbVotes} people voted
                                                </Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={orientation().topTxt
                                                }>
                                                    {item.Genre}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={orientation().topTxt
                                                }>
                                                    Duration - {item.Runtime}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={orientation().bottomTxtContainer}>
                                        <Text style={orientation().bottomTitleTxt}>Type</Text>
                                        <Text style={orientation().bottomTxt}>{item.Type}</Text>
                                        <Text style={orientation().bottomTitleTxt}>Director</Text>
                                        <Text style={orientation().bottomTxt}>{item.Director}</Text>
                                        <Text style={orientation().bottomTitleTxt}>Writer</Text>
                                        <Text style={orientation().bottomTxt}>{item.Writer}</Text>
                                        <Text style={orientation().bottomTitleTxt}>Main Cast</Text>
                                        <Text style={orientation().bottomTxt}>{item.Actors}</Text>
                                        <Text style={orientation().bottomTitleTxt}>Synopsis</Text>
                                        <Text style={orientation().bottomTxt}>{item.Plot}</Text>
                                        <Text style={orientation().bottomTitleTxt}>Released</Text>
                                        <Text style={orientation().bottomTxt}>{item.Released}</Text>
                                        <Text style={orientation().bottomTitleTxt}>Other information</Text>
                                        <Text style={orientation().bottomTxt}>
                                            The original language of this film - {item.Language}.
                                            It was released in {item.Country} by {item.Production}.
                                            Also this film was awarded {item.Awards},
                                            as well the film was rated by {item.Rated}
                                        </Text>
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
