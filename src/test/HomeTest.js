import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Touchable } from 'react-native';
import { Text, View, SafeAreaView, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import Utils from '../app/Utils';
import { reText, sizes } from '../styles/size';
import { Height, nstyles, Width } from '../styles/styles';

const mangHinh = [
    { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZfYo47A35Bmzt1PChBVqwKUwEPpqLmtu4A&usqp=CAU' },
    { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Kr-g4_tBvLJJql2ncla4C0bogUnwFxo_uQ&usqp=CAU' },
    { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhL6lJksohHGIn8xlCGBoIukbTPl7UEptRPg&usqp=CAU' },
    { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXpmrTEz_B2amLbBRbZtWmEaLvhrxVIvwlA&usqp=CAU' },
    { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFK1IGLbzC9I3eTVEuXU85EeEswh-OSZ4PA&usqp=CAU' },
    { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Q6sT3IJWKtv9BHPmUsqXyKK89ZDsSZGaqg&usqp=CAU' },
    { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvAOJ2VcS9YBQM86rerPWmEoVM7ElBpspexw&usqp=CAU' },
    { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXFaxv0XX6bANGCfU-w22NLiBHHfJtOpIyQ&usqp=CAU' },
]
const mangIcon = [
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 1 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 2 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 3 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 4 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 5 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 6 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 7 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 8 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 9 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 10 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 11 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 12 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 13 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 14 },
    { icon: require('../assets/icon_girl.png'), text: 'abc', id: 15 },
]
export class HomeTest extends Component {
    keyExtractor = (item, index) => index.toString();
    renderItem = ({ item, index }) => {
        return (
            <View style={{ width: Width(100), justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Image source={{ uri: item.link }} style={{ width: Width(90), height: Height(20), borderRadius: 10, borderWidth: 1, borderColor: 'white' }}></Image>
                </TouchableOpacity>
            </View>
        );
    };
    keyExtractorIcon = (item, index) => index.toString();
    renderItemIcon = ({ item, index }) => {
        console.log(item.icon)
        return (
            <View style={{ marginHorizontal: 10, marginVertical: 5, backgroundColor: 'white', borderRadius: 10, width: Width(25), height: Width(25), justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => Utils.goscreen(this, 'Modal_Test', { id: item.id })}>
                    <Image source={item.icon} style={{ width: 40, height: 40 }}></Image>
                    <Text >{item.text}</Text>
                </TouchableOpacity>
            </View>
        );
    };
    render() {
        return (
            <SafeAreaView>
                <ImageBackground source={require('../assets/background.jpg')} style={{ width: Width(100), height: Height(100), }}
                // blurRadius={5}
                >
                    <View style={{ height: Height(100), width: Width(100) }}>
                    </View>

                    <View style={{ height: Height(20), justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/logo.png')} style={{ width: 150, height: 150 }}></Image>
                    </View>
                    <View style={{ height: Height(20), justifyContent: 'center', alignItems: 'center' }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={mangHinh}
                            renderItem={this.renderItem}
                            keyExtractor={this.keyExtractor}>
                        </FlatList>
                    </View>
                    <View style={{ height: Height(38), marginTop: Height(3) }}>
                        <FlatList
                            columnWrapperStyle={{ marginHorizontal: 40, justifyContent: 'space-around' }}
                            numColumns={3}
                            // horizontal={true}
                            showsVerticalScrollIndicator={false}
                            data={mangIcon}
                            renderItem={this.renderItemIcon}
                            keyExtractor={this.keyExtractorIcon}>
                        </FlatList>
                    </View>
                    <View style={{ marginTop: Width(3) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', width: Width(30), height: Height(5), borderRadius: 10 }}>
                                <Text style={{ color: 'white', fontSize: reText(20), fontWeight: 'bold' }}>Đăng Nhập</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', width: Width(30), height: Height(5), borderRadius: 10 }}>
                                <Text style={{ color: 'white', fontSize: reText(20), fontWeight: 'bold' }}>Đăng ký</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

export default HomeTest
