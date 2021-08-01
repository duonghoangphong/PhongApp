import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Utils from '../../../app/Utils';
import { colors, fonts } from '../../../styles';
import { nstyles, Width } from '../../../styles/styles';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.nthis = this.props.nthis
        this.state = {
            menu: this.props.menu
        };
    }
    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => Utils.goscreen(this.nthis, item.goscreen)} style={styles.btnItem}>
                <Image style={styles.imgItem} source={item.linkicon} resizeMode={'contain'} />
                <Text numberOfLines={3} style={styles.txtItem}>{item.nameVI}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        const { menu } = this.state
        return (
            <View>
                <View style={styles.container}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        // columnWrapperStyle={{ justifyContent: "space-around" }}
                        scrollEnabled={false}
                        numColumns={3}
                        data={menu}
                        extraData={this.state}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View >
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, height: '100%',
    },
    imgItem: {
        ...nstyles.nIcon50
    },
    btnItem: {
        marginTop: 20, justifyContent: 'center', alignItems: 'center', display: 'flex', width: '33.33%'
    },
    txtItem: {
        fontFamily: fonts.Helvetica, fontSize: 12, textAlign: 'center', marginTop: 5
    }
});
export default Menu;
