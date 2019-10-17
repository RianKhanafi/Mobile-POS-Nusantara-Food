import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView } from 'react-native';
import rupiahFormat from 'rupiah-format'
import axios from 'axios'
import {
    Container, Header, Text, View, Footer, FooterTab, Icon, Badge, Button, Content,
    Grid, Col, Input, Item, Card, CardItem, Left, Thumbnail, Body, Right, Root, ActionSheet
} from 'native-base';
class cardList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const ProductsList = this.props.handleCardList
        return (
            <>
                {ProductsList.map(item => {
                    return (
                        <Card style={{ elevation: 0, borderColor: '#fff', borderRadius: 15, overflow: 'hidden' }}>
                            <CardItem style={{ padding: 0 }}>
                                <Grid style={{ flexDirection: "row", flex: 1 }}>
                                    <Col size={2}>
                                        <Image source={{ uri: `http://192.168.1.5:5000/images/${item.image}` }} style={{ width: 50, height: 50, resizeMode: 'cover', borderRadius: 15 }} />
                                    </Col>
                                    <Col size={4}>
                                        <Text style={{ marginLeft: 20 }}>{item.name}</Text>
                                        <Text style={{ marginLeft: 20 }}>{rupiahFormat.convert(item.price)}</Text>
                                    </Col>
                                    <Col size={3}>
                                        <Button style={{ elevation: 0, marginLeft: 30, float: 'right', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginTop: 2 }} >
                                            <Icon name="cart" />
                                        </Button>
                                    </Col>
                                </Grid>
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