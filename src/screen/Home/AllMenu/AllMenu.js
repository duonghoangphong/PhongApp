import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Utils from '../../../app/Utils';
import HeaderComV1 from '../../../components/HeaderComV1';
import { colors } from '../../../styles';
import ComponentMenu from './ComponentMenu';
import { objectMenuGlobal } from './MenuGlobal'

class AllMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <SafeAreaView>
                    <HeaderComV1 title={'Danh sách ứng dụng'} onPress={() => Utils.goback(this)}></HeaderComV1>
                </SafeAreaView>
                <ScrollView>
                    <ComponentMenu nthis={this} text={'Tiêu đề'} color={colors.colorOrangeMN} listMenu={objectMenuGlobal.AllMenu}></ComponentMenu>
                </ScrollView>
            </View>
        );
    }
}

export default AllMenu;
