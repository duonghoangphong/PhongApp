import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import Menu from './Menu';

export default class ComponentMenu extends Component {
    constructor(props) {
        super(props);
        this.nthis = this.props.nthis
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.viewHome}>
                <View style={styles.viewTitle}>
                    <View style={[styles.viewHeader, { backgroundColor: this.props.color }]} />
                    <Text style={styles.txtHeader}>{this.props.text}</Text>
                </View>
                <Menu nthis={this.nthis} menu={this.props.listMenu} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewHome: {
        marginHorizontal: 10, backgroundColor: "white", marginTop: 10, borderRadius: 5, paddingBottom: 20,
    },
    viewTitle: {
        flexDirection: "row", paddingHorizontal: 20, paddingTop: 20
    },
    viewHeader: {
        width: 5, height: 20, borderRadius: 10, marginRight: 5
    },
    txtHeader: {
        fontWeight: '600', fontSize: 18
    }
})
