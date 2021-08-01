import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Images } from '../assets';
import { Height, nstyles, Width } from '../styles/styles';

export default class HeaderComV1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { title, icon } = this.props
        return (
            <View style={styles.viewHome}>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <Image source={icon ? icon : Images.icGoBack} style={styles.imgTitle}></Image>
                </TouchableOpacity>
                <Text style={styles.txtTitle}>{title}</Text>
                <Text></Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewHome: {
        height: Height(5), backgroundColor: 'white', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginBottom: 5
    },
    txtTitle: {
        fontWeight: '500', fontSize: 20, alignSelf: 'center'
    },
    imgTitle: {
        ...nstyles.nIcon30
    }
})
