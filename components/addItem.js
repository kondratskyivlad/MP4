import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Dimensions, Image, Text, ScrollView, TouchableNativeFeedback} from 'react-native';
import {Card} from "react-native-elements";
import {getImage} from "../constants/data";

const dim = Dimensions.get('screen');

const portrait_styles = StyleSheet.create({

});

const landscape_styles = StyleSheet.create({

});

const orientation = () => {
    const dim = Dimensions.get('screen');
    if (dim.height >= dim.width) {
        return portrait_styles
    } else {
        return landscape_styles
    }
}

const AddItem = () => {
    return(
        <Card imdbID={'adfaf'}>
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
    )
}

export default AddItem
