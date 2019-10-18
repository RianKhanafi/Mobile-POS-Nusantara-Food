import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import rupiahFormat from 'rupiah-format'
import {
    View, Button, Text, Container, Content, Grid, Col, Row,
    List, ListItem, Thumbnail, Left, Right, Body, Header, Icon, Title, cartItem,
    Form, Item, Input
} from 'native-base';
import { API_BASE_URL } from 'react-native-dotenv'
import axios from 'axios'
class detailProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItem: this.props.navigation.getParam('cart')
        }
    }
    checkout = async () => {
        let id = []
        let quantity = []
        let orderName = []
        let amount = []
        this.state.cartItem.data.map(item => {
            id.push(item.id)
            quantity.push(item.quantity)
            orderName.push(item.name)
            amount.push(item.price)
        })

        console.log(quantity)

        let total = 0
        let i
        for (i = 0; i < amount.length; i++) {
            total += amount[i];
        }
        let allData = {
            buyer: 'example',
            amount: total,
            ordername: orderName,
            quantity: quantity,
            id: id
        }
        // console.log(amount)
        // console.log(total)
        await axios.post(`${API_BASE_URL}/api/products/reduce`, allData)
            .then(result => {
                console.log(result)

            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const cart = this.state.cartItem.data
        return (
            <>
                <Container>
                    <Content>
                        <View style={{ minHeight: 620 }}>
                            <View>
                                <Grid>
                                    <Col>
                                        <Header hasSegment style={{ backgroundColor: '#fff', marginBottom: 20 }}>
                                            <Left>
                                                <Button transparent
                                                    onPress={() => this.props.navigation.navigate('Home')}
                                                >
                                                    <Icon name="arrow-back" style={{ color: 'black' }} />
                                                </Button>
                                            </Left>
                                            <Body>
                                                <Title style={{ color: 'black' }}>Add Menu</Title>
                                            </Body>
                                        </Header>
                                    </Col>
                                </Grid>
                            </View>
                            <View>
                                <List>
                                    {cart.map(item => {
                                        return (
                                            <ListItem thumbnail>
                                                <Left>
                                                    <Thumbnail square source={{ uri: `${API_BASE_URL}/images/${item.image}` }} />
                                                </Left>
                                                <Body>
                                                    <Text>{item.name}</Text>
                                                    <Text note numberOfLines={1}>{item.count} x {item.price} </Text>
                                                </Body>
                                                <Right>
                                                    <Button transparent>
                                                        <Text>View</Text>
                                                    </Button>
                                                </Right>
                                            </ListItem>
                                        )
                                    })}

                                </List>
                                <Form>
                                    <Button full primary style={style.button} onPress={this.checkout}>
                                        <Text>Save Menu</Text>
                                    </Button>
                                </Form>
                            </View>
                        </View>
                    </Content>
                </Container>
            </>

        );
    }
}
const style = StyleSheet.create({

})


export default detailProduct