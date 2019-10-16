import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView } from 'react-native';

import { View} from 'native-base';
class mainCard extends Component {
    render() {
        return (
           <>
            <View style={style.viewCardScroll}>
                    <View style={style.insideViewScroll}>
                        <Image source={require('../img/bakso.jpg')} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                    </View>
                </View>
                <View style={style.viewCardScroll}>
                    <View style={style.insideViewScroll}>
                        <Image source={require('../img/bakso.jpg')} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                    </View>
                </View>
                <View style={style.viewCardScroll}>
                    <View style={style.insideViewScroll}>
                        <Image source={require('../img/bakso.jpg')} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                    </View>
                </View>
                <View style={style.viewCardScroll}>
                    <View style={style.insideViewScroll}>
                        <Image source={require('../img/bakso.jpg')} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                    </View>
                </View>
           </>
       
        );
    }
}


const style = StyleSheet.create({
    viewCardScroll: {
        height: 220,
        width: 140,
        marginLeft: 20,
        borderColor: '#ddd'
    },
    insideViewScroll: {
        flex: 2,
        borderRadius: 20,
        overflow: 'hidden'
    }
})



export default mainCard