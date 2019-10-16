import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios'
import {
    Container, Header, Text, View, Footer, FooterTab, Icon, Badge, Button, Content,
    Grid, Col, Input, Item, Card, CardItem, Left, Thumbnail, Body, Right, Root, ActionSheet
} from 'native-base';
class cardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        await axios.get('http://3.94.205.19:4444/api/v.0.1/products')
            .then(result => {
                console.log(result)
                this.setState({ data: result.data.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <>
                {this.state.data.map(item => {
                    return (
                        <Card style={{ elevation: 0, borderColor: '#fff', borderRadius: 15, overflow: 'hidden' }}>
                            <CardItem style={{ padding: 0 }}>
                                <View style={{ flexDirection: "row", flex: 1 }}>
                                    <View>
                                        <Image source={require('../img/bakso.jpg')} style={{ width: 50, height: 50, resizeMode: 'cover', borderRadius: 15 }} />
                                    </View>
                                    <View>
                                        <Text style={{ marginLeft: 20 }}>{item.name}</Text>
                                        <Text style={{ marginLeft: 20 }}>{item.price}</Text>
                                    </View>
                                    <View>
                                        <Button style={{ elevation: 0, marginLeft: 80, float: 'right', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginTop: 2 }}>
                                            <Icon name="cart" />
                                        </Button>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>
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



export default cardList