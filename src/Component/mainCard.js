import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView, TouchableOpacity  } from 'react-native';

import { View, Button } from 'native-base';
class mainCard extends Component {

    render() {
        const handleMainCard = this.props.handleMainCard
        return (
            <>

                {handleMainCard.map(item => {
                    return (
                        <View style={style.viewCardScroll}>
                            <View style={style.insideViewScroll}>
                                 <TouchableOpacity   style={{height:300, backgroundColor:'transparant'}}  
                                 onPress={()=>this.props.navigate('DetailProduct', {
                                            product:{
                                                    id:item.id,
                                                    name:item.name,
                                                    description:item.description,
                                                    image:item.image,
                                                    price:item.price,
                                                    quantity:item.quantity
                                                }
                                             })
                                      }>
                                    <Image source={{uri:'http://192.168.1.14:5000/images/' + item.image}}  style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}/>
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