import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { nkey } from '../../app/data/keyStore';
import Utils from '../../app/Utils';
import { Images } from '../../assets';
import HeaderComV1 from '../../components/HeaderComV1';
import { colors } from '../../styles';
import { Height, nstyles, Width } from '../../styles/styles';

export default class MyInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nghenghiep: '- Lập trình viên react-native/nodejs/reactjs/mysql\n- Quản lý quán chè lớn\n- Buôn bản lẻ với giá trị lợi nhuận cao\n- Quản lý chuổi nhà trọ quy mô lớn',
            inputLuu: '',
        };
    }
    async componentDidMount() {
        let temp = await Utils.ngetStore(nkey.ThongTinLapTrinhVien)
        this.setState({ inputLuu: temp })
    }
    save = () => {
        Utils.nsetStore(nkey.ThongTinLapTrinhVien, this.state.inputLuu)
    }
    render() {
        const { nghenghiep } = this.state
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView>
                    <HeaderComV1 title={'Thông tin lập trình viên'} onPress={() => Utils.goback(this)}></HeaderComV1>
                </SafeAreaView>
                <ScrollView>
                    <Image source={Images.icBoss} style={styles.imgAvatar}></Image>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        onChangeText={(value) => this.setState({ inputLuu: value })}
                        value={this.state.inputLuu} />
                    <View style={styles.viewBTN}>
                        <TouchableOpacity style={styles.btn} onPress={() => this.save()}>
                            <Text style={styles.txtBtn}>Lưu</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imgAvatar: {
        ...nstyles.nAva187, alignSelf: 'center', marginVertical: 15
    },
    viewBTN: {
        flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 15
    },
    btn: {
        width: Width(35), paddingVertical: 10, borderRadius: 20, backgroundColor: colors.blueColor, justifyContent: 'center', alignItems: 'center'
    },
    txtBtn: {
        fontSize: 18, color: 'white', fontWeight: '500'
    },
    input: {
        fontSize: 16, minHeight: Height(47), marginHorizontal: 10, backgroundColor: 'white', borderRadius: 20, paddingTop: 10, paddingHorizontal: 10, borderWidth: 1,
        borderColor: colors.textGray
    }
})
