import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView } from 'react-native';

import {
    Container, Header, Text, View, Footer, FooterTab, Icon, Badge, Button, Content,
    Grid, Col, Input, Item, Card, CardItem, Left, Thumbnail, Body, Right, Root, ActionSheet,
    SwipeRow
} from 'native-base';
// Component
import MainCard from '../Component/mainCard'
import CardList from '../Component/cardList'

// import axios from 'axios'

// import { hidden } from 'colorette';
var BUTTONS = [
    { text: "Signin", icon: "sign in", iconColor: "#3f51b5" },
    { text: "Sign out", icon: "analytics", iconColor: "#3f51b5" },
    { text: "Dashboard", icon: "aperture", iconColor: "#3f51b5" },
    { text: "Delete", icon: "trash", iconColor: "#3f51b5" },
    { text: "Cancel", icon: "close", iconColor: "#3f51b5" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
// import Carousel from 'react-native-carousel'
// var {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
// } = React;

class Home extends Component {

    render() {

        return (
            <>
                <Container style={{ backgroundColor: '#eaedff' }}>
                    <Content>
                        <View style={{ flexDirection: "row", flex: 1, position: "absolute" }}>

                            <Text style={style.judul}>Nusantara Food</Text>
                        </View>

                        <Header searchBar rounded style={style.header}>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Search" />
                                <Icon name="pizza" />
                            </Item>
                            <Button transparent>
                                <Text>Search</Text>
                            </Button>
                        </Header>


                        <ScrollView
                            scrollEventThrottle={16}>
                            <View>
                                <Text style={{ fontSize: 25, margin: 20, fontWeight: '700' }}>Popular</Text>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <MainCard />
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

                            <CardList />
                        </View>
                    </Content>

                    <Footer>
                        <FooterTab style={{ backgroundColor: 'white' }}>
                            <Button badge vertical
                                onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Badge><Text>2</Text></Badge>
                                <Icon name="cart" />
                                <Text>Cart</Text>
                            </Button>
                            <Button vertical onPress={() => this.props.navigation.navigate('AddData')}>
                                <Icon name="add" />
                                <Text>Add</Text>
                            </Button>
                            <Button badge vertical
                                onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Badge><Text>2</Text></Badge>
                                <Icon name="apps" />
                                <Text>Home</Text>
                            </Button>
                            <Button vertical onPress={() => this.props.navigation.navigate('History')}>
                                <Icon
                                    name="refresh"
                                />
                                <Text>Chart</Text>
                            </Button>
                            <Root>
                                <Button badge vertical style={{ backgroundColor: '#fff', elevation: 0, borderRadius: 10 }}
                                    onPress={() =>
                                        ActionSheet.show(
                                            {
                                                options: BUTTONS,
                                                cancelButtonIndex: CANCEL_INDEX,
                                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                                title: "Setting"
                                            },
                                            buttonIndex => {
                                                this.setState({ clicked: BUTTONS[buttonIndex] });
                                            }
                                        )}
                                >
                                    <Icon name="settings" style={{ color: '#3f51b5' }} />
                                    <Text style={{ color: '#3f51b5' }}>Cart</Text>
                                </Button>
                            </Root>
                        </FooterTab>
                    </Footer>
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
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // borderBottomRightRadius: 30,
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
        fontWeight: 'bold'
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