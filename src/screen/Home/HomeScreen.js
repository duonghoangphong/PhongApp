import React, { Component } from 'react';
import { Touchable } from 'react-native';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import Utils from '../../app/Utils';
import { Images } from '../../assets';
import { colors } from '../../styles';
import { Height, nstyles, Width } from '../../styles/styles';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUngDung: [
                { title: '123', icon: Images.icBoy },
                { title: '123', icon: Images.icBoy },
                { title: '123', icon: Images.icBoy },
                { title: '123', icon: Images.icBoy },
                { title: '123', icon: Images.icBoy },
                { title: '123', icon: Images.icBoy },
                { title: '123', icon: Images.icBoy },
                { title: '123', icon: Images.icBoy },
                { title: '123', icon: Images.icBoy },
                { title: '123', icon: Images.icBoy },
            ]
        };
    }
    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.btnUngDung}>
                <Image source={item.icon} style={styles.imgUngDung}></Image>
                <Text style={styles.txtIcon}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        const { listUngDung } = this.state
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ backgroundColor: 'white' }}>
                    <View style={styles.viewHeader}>
                        <TextInput style={styles.inputHeader} placeholder={'Tìm kiếm...'}></TextInput>
                        <TouchableOpacity onPress={() => Utils.goscreen(this, 'sc_Drawer')}>
                            <Image source={Images.icBoss} style={nstyles.nAva50}></Image>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <View style={styles.viewHome}>
                    <View style={styles.viewUngDung}>
                        <Text style={styles.txtUngDung}>Ứng dụng</Text>
                        <TouchableOpacity onPress={() => Utils.goscreen(this, 'sc_AllMenu')}>
                            <Text style={styles.txtXemTatCa}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        // columnWrapperStyle={{ justifyContent: 'space-around' }}
                        data={listUngDung}
                        extraData={this.state}
                        renderItem={this.renderItem}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewHeader: {
        paddingHorizontal: 10, paddingBottom: 10, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    inputHeader: {
        borderWidth: 1, width: Width(80), borderRadius: 20, height: Height(5), paddingHorizontal: 10, borderColor: colors.colorGrayIcon
    },
    viewHome: {
        backgroundColor: 'white', marginHorizontal: 10, paddingHorizontal: 10, marginVertical: 10, borderRadius: 10, paddingBottom: 10
    },
    viewUngDung: {
        flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, alignItems: 'center'
    },
    txtUngDung: {
        fontSize: 20
    },
    txtXemTatCa: {
        color: colors.colorBlue, fontWeight: 'bold'
    },
    btnUngDung: {
        justifyContent: 'center', alignItems: 'center', marginVertical: 10, width: '33.33%'
    },
    imgUngDung: {
        ...nstyles.nIcon56
    },
    txtIcon: {
        marginTop: 5,
        fontSize: 15
    },
})
export default HomeScreen;
