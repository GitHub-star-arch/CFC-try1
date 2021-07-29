import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import MyHeader from '../Components/MyHeader';
import db from '../config';

export default class AboutUs extends React.Component {

    constructor() {
        super();
        
    }

   

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }} >
                <ImageBackground source={require('../assets/gears-background.png')} style={{ width: '100%', height: '100%' }} >
                    <MyHeader title='About Us' navigation={this.props.navigation} />
                    
                </ImageBackground>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    textBox: {
        width: '75%',
        height: 40,
        margin: 15,
        borderWidth: 2,
        alignSelf: 'center',
        backgroundColor: '#C1ECFF'
    }
})