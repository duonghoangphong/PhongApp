import React, { Component } from 'react'
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { colors } from '../styles'
import { Height, Width } from '../styles/styles'

const mangIcon = [
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 1 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 1 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 1 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 1 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 2 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 2 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 3 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 3 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 3 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 3 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 4 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 5 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 6 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 7 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 8 },
]

export default class Modal extends Component {
    keyExtractorIcon = (item, index) => index.toString();
    renderItemIcon = ({ item, index }) => {
        if (item.id == this.props.route.params.id)
            return (
                <View style={{ width: '33.3333%' }}>
                    <View style={{ marginHorizontal: 10, marginVertical: 5, backgroundColor: 'white', borderRadius: 10, width: Width(20), height: Width(20), justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={item.icon} style={{ width: 40, height: 40 }}></Image>
                            <Text >{item.text}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            );
        return null;
    };
    render() {
        console.log(this.props)
        return (
            <View>
                <View onTouchEnd={() => this.props.navigation.goBack()} style={{ backgroundColor: '#FFFFFF98', height: Height(100), width: Width(100), justifyContent: 'center', alignItems: 'center' }}>
                </View>
                <View style={{ position: 'absolute', top: Height(30), left: Width(10), backgroundColor: '#2F2F2F', height: Height(40), width: Width(80), borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: Height(38), height: Height(40), width: Width(80) }}>
                        <FlatList
                            columnWrapperStyle={{}}
                            numColumns={3}
                            // horizontal={true}
                            showsVerticalScrollIndicator={false}
                            data={mangIcon}
                            renderItem={this.renderItemIcon}
                            keyExtractor={this.keyExtractorIcon}>
                        </FlatList>
                    </View>
                </View>
            </View >
        )
    }
}

