import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView, TouchableOpacity  } from 'react-native';

import { View, Button } from 'native-base';
class mainCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:''
        }
    }
    gotoDetail = async(id, image) =>{
        this.setState({
            idProduct: id
        })
        console.log(image)
        console.log(image)
    }
    render() {
        const handleMainCard = this.props.handleMainCard
        return (
            <>
                {handleMainCard.map(item => {
                    return (
                        <View style={style.viewCardScroll}>
                            <View style={style.insideViewScroll}>
                                 <TouchableOpacity   style={{height:300, backgroundColor:'transparant'}}  onPress={()=>this.gotoDetail(item.id, item.image, item.name, item.description)}>
                                    <Image source={{uri:'http://192.168.1.5:5000/images/' + item.image}}  style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}/>
                                </TouchableOpacity >
                            </View>
                        </View>
                    )
                })}
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