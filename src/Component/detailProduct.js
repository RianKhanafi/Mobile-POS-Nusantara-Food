import React, { Component } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { View, Text, Col, Grid, Container, Content, Button } from 'native-base'
import rupiahFormat from 'rupiah-format'
import { API_BASE_URL } from 'react-native-dotenv'
export default class detailProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: this.props.navigation.getParam('product')
        }
    }
    render() {
        // console.log(this.state.product.image)
        return (<>
            <Container>
                <Content>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                        <View style={style.viewImage}>
                            <Image source={{ uri: `${API_BASE_URL}/images/${this.state.product.image}` }} style={{ width: 420, height: 420, resizeMode: 'cover' }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                        <View style={style.viewKeterangan}>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontSize: 35, color: '#3b5bb2' }}>{this.state.product.name}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, color: '#3b5bb2', marginTop: 5 }}>{rupiahFormat.convert(this.state.product.price)}</Text>
                                </View>

                            </View>
                            <TouchableOpacity style={style.button}
                                onPress={() => this.props.navigation.navigate('DetailProduct', {
                                    product: {
                                        id: this.state.product.id,
                                        name: this.state.product.name,
                                        description: this.state.product.description,
                                        image: this.state.product.image,
                                        price: this.state.product.price,
                                        quantity: this.state.product.quantity
                                    }
                                })
                                }>
                                <Text>Add To cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
        </>
        )
    }
}

const style = StyleSheet.create({
    viewImage: {
        flex: 1,
        height: 500,
        backgroundColor: '#3b5bb2'
    },
    viewKeterangan: {
        flex: 1,
        height: 200,
        backgroundColor: '#fff',
        marginTop: -100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    }, button: {
        borderRadius: 30,
        marginTop: 50,
        // shadowOffset: { height: 0, width: 0 },
        // shadowOpacity: 0,
        elevation: 0,
    },
})