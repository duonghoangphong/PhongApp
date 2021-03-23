import React, { Component } from 'react'
import { Platform } from 'react-native'
import {
    Text, View, SafeAreaView
    , TouchableOpacity, TouchableHighlight
} from 'react-native'
import { Height } from '../styles/styles'
const DEMO_OPTIONS_2 = [
    { "name": "Rex", "age": 30 },
    { "name": "Mary", "age": 25 },
    { "name": "John", "age": 41 },
    { "name": "Jim", "age": 22 },
    { "name": "Susan", "age": 52 },
    { "name": "Brent", "age": 33 },
    { "name": "Alex", "age": 16 },
    { "name": "Ian", "age": 20 },
    { "name": "Phil", "age": 24 },
];
const mang = [
    { label: 'Ngày', value: '1' },
    { label: 'Tuần', value: '2' },
    { label: 'Tháng', value: '3' },
]
import ModalDropdown from 'react-native-modal-dropdown'
import { ScrollView } from 'react-native';
const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];

export default class TestThuVien extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
            mang: mang
        }
    }
    render() {
        const { mang, isActive } = this.state
        return (
            <SafeAreaView>
                <View style={{ height: Height(2), marginBottom: 10 }}>
                    <TouchableHighlight onPress={() => this.setState({ isActive: !isActive })} >
                        <Text>Nhan vao day</Text>
                    </TouchableHighlight>
                </View>


                <View style={{ backgroundColor: 'blue' }}>
                    <TouchableHighlight onPress={() => alert(2)}>
                        <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => alert(2)}>
                        <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => alert(2)}>
                        <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                    </TouchableHighlight>

                </View>
                <ModalDropdown options={['option 1', 'option 2']} />

                <View style={{ backgroundColor: 'white', marginTop: Height(2), zIndex: Platform.OS = 'ios' ? 2 : 0, elevation: Platform.OS = 'android' ? 2 : 0, position: 'absolute', }}>
                    {isActive ?
                        <View>
                            <View style={{ backgroundColor: 'red', }}>
                                <TouchableHighlight onPress={() => alert(1)} >
                                    <Text>BBBBBBBBBBBBBBBBB</Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => alert(1)}>
                                    <Text>BBBBBBBBBBBBBBBBB</Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => alert(1)} >
                                    <Text>BBBBBBBBBBBBBBBBB</Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => alert(1)}>
                                    <Text>BBBBBBBBBBBBBBBBB</Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => alert(1)} >
                                    <Text>BBBBBBBBBBBBBBBBB</Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => alert(1)}>
                                    <Text>BBBBBBBBBBBBBBBBB</Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => alert(1)} >
                                    <Text>BBBBBBBBBBBBBBBBB</Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => alert(1)}>
                                    <Text>BBBBBBBBBBBBBBBBB</Text>
                                </TouchableHighlight>

                            </View>
                        </View>
                        : null
                    }
                </View>
                <TouchableOpacity onPress={() => alert(2)}>
                    <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert(2)}>
                    <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert(2)}>
                    <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert(2)}>
                    <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert(2)}>
                    <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert(2)}>
                    <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}
