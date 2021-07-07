import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import db from '../config';

export default class SettingScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            Email: '',
            Name: '',
            Username: '',
            Password: '',
        }
    }

    changeDetails=()=>{
        db.collection('users').add({
            Email: this.state.Email,
            Name: this.state.Name,
            Username: this.state.Username,
            Password: this.state.Password,
        });
    }

    render() {
        return (
            <View>
                <Text>
                    Settings
                </Text>
                    <TextInput onChangeText={(name)=>{this.setState({Name: name,})}} style={{borderWidth:3,}} placeholder="Name" />
                    <TextInput onChangeText={(email)=>{this.setState({Email: email,})}} style={{borderWidth:3,}} placeholder="Email" />
                    <TextInput onChangeText={(un)=>{this.setState({Username: un,})}} style={{borderWidth:3,}} placeholder="UserName" />
                    <TextInput onChangeText={(pw)=>{this.setState({Password: pw,})}} style={{borderWidth:3,}} placeholder="Password" />
                    <TouchableOpacity onPress={()=>{this.changeDetails()}} style={{paddingBottom:100}} ><Text>Change Details</Text></TouchableOpacity>
            </View>
        );
    }

}