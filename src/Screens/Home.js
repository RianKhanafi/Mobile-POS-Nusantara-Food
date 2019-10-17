import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView,AsyncStorage } from 'react-native';
import rupiahFormat from 'rupiah-format'
import {
    Container, Header, Text, View,Icon, Badge, Button, Content,
    Grid, Col, Input, Item, Card, CardItem, Left, Thumbnail, Body, Right, Root,
    SwipeRow, Picker, Form, Drawer 
} from 'native-base';

// Component
import MainCard from '../Component/mainCard'
import CardList from '../Component/cardList'
import Footer from '../Component/footer'
import axios from 'axios'

const URL = 'http://192.168.1.14:5000/api'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            cartItem:[]
        }
        this.handleAddtoCart = this.handleAddtoCart.bind(this)
    }
    componentDidMount() {
        this.getSearch()
    }
    getSearch = async (text = ' ') => {
        await axios.get(`${URL}/products?search=${text}`)
            .then(result => {
                // console.log(result)
                this.setState({
                    data: result.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }



    handleAddtoCart(item) {
        // console.log(item)
        this.setState(state=>{
            const cartItem = state.cartItem
            let productAlredyinChart = false
            cartItem.forEach(data =>{
                if(data.id === item.id){
                    productAlredyinChart = true
                    data.count += 1
                }
            })
          
            if (!productAlredyinChart) {
                cartItem.push({ ...item, count: 1 })
            }
            AsyncStorage.setItem("cartItem", JSON.stringify(cartItem))
            // console.log(cartItem)
            return (cartItem)
        })
    }

        

 


    render() {
        // console.log(this.state.cartItem)
        return (
            <>
                <Container style={{ backgroundColor: '#eaedff' }}>
                    <Content>
                        <View style={{backgroundColor:'#3f51b5',borderBottomRightRadius:30, borderBottomLeftRadius:30}}>
                            <View style={{ flexDirection: "row", flex: 1, position: "absolute" }}>
                                <Text style={style.judul}>Nusantara Food</Text>
                                </View>

                                <Header searchBar rounded style={style.header}>
                                <Item>
                                    <Icon name="ios-search" />
                                    <Input placeholder="Search" onChangeText={(text) => this.getSearch(text)} />
                                    <Icon name="pizza" />
                                </Item>
                                <Button transparent>
                                    <Text>Search Menu</Text>
                                </Button>
                                </Header>
                         </View>


                        <ScrollView
                            scrollEventThrottle={16}>
                            <View>
                                <Text style={{ fontSize: 25, margin: 20, fontWeight: '700' }}>Terbaru</Text>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <MainCard handleMainCard={this.state.data} navigate={this.props.navigation.navigate} />
                                </ScrollView>
                            </View>
                        </ScrollView>

                        <View style={{ margin: 20, }}>

                            <Grid>
                                <Col>
                                    <Text style={{ fontSize: 25, marginLeft: 10, marginRight: 20, marginBottom: 10, fontWeight: '700' }}>Food</Text>
                                </Col>
                                <Col style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 15, marginLeft: 10, marginRight: 20, fontWeight: '700', color: '#3f51b5' }}>View All</Text>
                                </Col>
                            </Grid>

                            <CardList handleCardList={this.state.data} navigate={this.props.navigation.navigate} handleAddtoCart={this.handleAddtoCart}/>
                        </View>
                        <Button primary onPress={()=> this.props.navigation.navigate('Cart', {
                            cart:{
                                data:this.state.cartItem
                            }
                        })}><Text>Button</Text></Button>
                    </Content>
                        <Footer navigate={this.props.navigation.navigate} />
                </Container>
            </>
        )
    }
}

const style = StyleSheet.create({
    view: {
        margin: 10
    },
    order: {
        fontSize: 35,
        color: '#aaa'
    },
    header: {
        backgroundColor: '#fff',
        borderRadius: 50,
        elevation: 0,
        marginTop: 70,
        margin: 10,

    },
    judul: {
        margin: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color:'#fff'
    },
    card: {
        margin: 10,
        borderRadius: 20,
        elevation: 0,
        borderWidth: 0,
        borderColor: '#fff'
    },
    cardBody: {
        borderTopRightRadius: 20,
        overflow: 'hidden'
    },
    cardFooter: {
        borderBottomLeftRadius: 20,
    }
})

export default Home