import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Dimensions,
     Image, Text, ScrollView,
    TouchableOpacity} from 'react-native';
import MoviesList from '../MoviesList.json'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { getImage } from '../constants/data'
import { Input } from 'react-native-elements';
import { FloatingLabelInput } from 'react-native-floating-label-input';
// import ButtonComponent,
// { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';



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

const submitBtn = {
    width: '50%',
    dark: false,
    colors: {
        primary: '#beae8d',
        background: 'rgb(242, 242, 242)',
        borderRadius: '20%'
    },
};


const AddForm = ({navigation, route}, props) => {

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');

    const { movieData } = route.params;
    const { setMovieData } = route.params;

    let idForNewItem = 100;

    const submit = () => {

    const parsed = parseInt(year);

    if (isNaN(parsed)) {
        setYear('The year must be a number')
        const warning = setTimeout(() => {
            setYear('')
        }, 2000);
    } else {
        const newItem = {
            Title: title,
            Year: year,
            imdbID: idForNewItem++,
            Type: type,
            Poster: '',
        }

        const newData = [...movieData, newItem]

        setMovieData(newData)

        navigation.navigate('Movie')
    }
}

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
        >
            <View style={{padding: 50, flex: 1}}>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        countdownLabel="chars left"
                        maxLength={100}
                        showCountdown={true}
                        style={{color: '#fff'}}
                        label={'Title'}
                        value={title}
                        rightComponent={(
                            <TouchableOpacity
                                style={{
                                    alignContent:'center',
                                    justifyContent:'center'
                                }}
                                onPress={()=>{
                                    setTitle('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setTitle(val)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        label={'Type'}
                        value={type}
                        rightComponent={(
                            <TouchableOpacity
                                style={{
                                    alignContent:'center',
                                    justifyContent:'center'
                                }}
                                onPress={()=>{
                                    setType('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setType(val)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        keyboardType="numeric"
                        mask="9999"
                        label={'Year'}
                        value={year}
                        rightComponent={(
                            <TouchableOpacity
                                style={{
                                    alignContent:'center',
                                    justifyContent:'center'
                                }}
                                onPress={()=>{
                                    setYear('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setYear(val)}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Button
                        onPress={() => {
                            // navigation.navigate()
                            submit()
                        }}
                        theme={submitBtn}
                        title="Add"
                        color="#000"
                        buttonStyle={{ width: 150 }}
                        // loading={false}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default AddForm