import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Modal, TouchableHighlight, TextInput } from 'react-native'
import {
    Container, Content, Grid, Col, Card, CardItem, Body, Text, View,
    List, ListItem, Thumbnail, Left, Right, Button, Badge, Icon,
    Root, Form, Item, Input, Textarea, Alert, Header, Title
} from 'native-base'
import axios from 'axios'
import { API_BASE_URL } from 'react-native-dotenv'
// import Footer from '../Component/navMenu'
// Compinent
import Footer from '../Component/footer'

class History extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            getEditData: '',
            modalVisible: false,
            setEdit: [],
            Name: '',
            Description: '',
            Price: 0,
            Category: '',
            Quantity: 0,

        }
        // this.handleAddtoCart = this.handleAddtoCart.bind(this)
    }


    setModalVisible = async (visible, id) => {
        this.setState({ modalVisible: visible });
        await axios.get(`${API_BASE_URL}/api/products/${id}`)
            .then(result => {
                console.log(result)
                this.setState({
                    Name: result.data.data[0].name,
                    Description: result.data.data[0].description,
                    Price: result.data.data[0].price,
                    Category: result.data.data[0].id_category,
                    Quantity: result.data.data[0].quantity,
                })
            })
            .catch(err => {
                console.log(err)
            })
        // console.log(this.state.setEdit[0].name)
    }
    componentDidMount() {
        this.getSearch()
        this.setModalVisible()
    }
    getSearch = async () => {
        await axios.get(`${API_BASE_URL}/api/products`)
            .then(result => {

                this.setState({
                    data: result.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    delete = async (id) => {
        await axios.delete(`${API_BASE_URL}/api/products?id=${id}`)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        console.log(API_BASE_URL)
        return (
            <>
                <Container style={{ backgroundColor: '#eaedff' }}>
                    <Content style={{ padding: 10 }}>
                        <View><Grid style={{ paddingLeft: 20 }}>
                            <Col>
                                <Header hasSegment style={{ backgroundColor: '#eaedff', marginBottom: 20 }}>
                                    <Left>
                                        <Button transparent
                                            onPress={() => this.props.navigation.navigate('Home')}
                                        >
                                            <Icon name="arrow-back" style={{ color: 'black' }} />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Title style={{ color: 'black' }}>Manage</Title>
                                    </Body>
                                </Header>
                            </Col>
                        </Grid>
                        </View>
                        <View style={{ marginTop: 22 }}>
                        </View>
                        <View>
                            <Grid>
                                <Col>
                                    <List>
                                        {this.state.data.map(item => {
                                            return (
                                                <ListItem thumbnail>
                                                    <Left>
                                                        <Thumbnail square source={{ uri: `${API_BASE_URL}/images/${item.image}` }} />
                                                    </Left>
                                                    <Body>
                                                        <Text>{item.name}</Text>
                                                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                                    </Body>
                                                    <Right>
                                                        <Button primary onPress={() => this.delete(item.id)}>
                                                            <Text>Delete</Text>
                                                        </Button>
                                                        <Button danger onPress={() => this.props.navigation.navigate('Update', {
                                                            updtData: item.id
                                                        })}>
                                                            <Text>update</Text>
                                                        </Button>
                                                        {/* <TouchableHighlight
                                                            onPress={() => {
                                                                this.setModalVisible(true, item.id);
                                                            }}>
                                                            <Text>Show Modal</Text>
                                                        </TouchableHighlight> */}
                                                    </Right>
                                                </ListItem>
                                            )
                                        })}

                                    </List>
                                </Col>
                            </Grid>
                        </View>




                        {/* 
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{ marginTop: 22 }}>
                                <View>
                                    <View>
                                        <Form>
                                            <Item>
                                                <TextInput placeholder="Enter Student Phone Number" value={this.state.Name} />
                                            </Item>
                                            <Item>
                                                <TextInput placeholder="Enter Student Phone Number" value={this.state.Price} />
                                            </Item>

                                            <Item>
                                                <Input placeholder='Price'
                                                    value={this.state.getEditPrice} onChangeText={(text) => this.setState({ price: text })} />
                                            </Item>
                                            <Item>
                                                <Input placeholder='idcategory' value={this.state.getEditIdCategory} onChangeText={(text) => this.setState({ id_category: text })} />
                                            </Item>
                                            <Item>
                                                <Input placeholder='Quantity' value={this.state.setEdit.name} />
                                            </Item>
                                            <Item>
                                                <TextInput

                                                    placeholder="Student Name Shows Here"
                                                    value={this.state.TextInput_Student_Name}
                                                    onChangeText={TextInputValue => this.setState({ TextInput_Student_Name: TextInputValue })}
                                                    underlineColorAndroid='transparent'
                                                />
                                            </Item>
                                            <Button full primary style={style.button} onPress={this.addData}>
                                                <Text>Order</Text>
                                            </Button>
                                        </Form>
                                    </View>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <Text>Hide Modal</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal> */}

                    </Content>


                    <Footer navigate={this.props.navigation.navigate} />
                </Container>
            </>
        )
    }
}
const style = StyleSheet.create({
    chart: {
        height: 250,
        elevation: 0,
        borderColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden'
    },
    chartIncome: {
        height: 150,
        elevation: 0,
        borderColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden'
    },
    chartIncomeBlue: {
        height: 150,
        elevation: 0,
        borderColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#3f51b5'
    }
})
export default History