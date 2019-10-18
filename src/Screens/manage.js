import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Modal, TouchableHighlight } from 'react-native'
import {
    Container, Content, Grid, Col, Card, CardItem, Body, Text, View,
    List, ListItem, Thumbnail, Left, Right, Button, Badge, Icon, Root, Form, Item, Input, Textarea, Alert
} from 'native-base'
import axios from 'axios'
// import Footer from '../Component/navMenu'
// Compinent
import Footer from '../Component/footer'
const URL = 'http://192.168.1.14:5000/api'
class History extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            getEditData: '',
            modalVisible: false,
            setEdit: []

        }
        // this.handleAddtoCart = this.handleAddtoCart.bind(this)
    }


    setModalVisible = async (visible, id) => {
        this.setState({ modalVisible: visible });
        await axios.get(`${URL}/products/${id}`)
            .then(result => {

                this.setState({
                    setEdit: {
                        Name: result.data.data[0].name,
                        Description: result.data.data[0].description,
                        Price: result.data.data[0].price,
                        Category: result.data.data[0].id_category,
                        Quantity: result.data.data[0].quantity,
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    componentDidMount() {
        this.getSearch()
    }
    getSearch = async () => {
        await axios.get(`${URL}/products`)
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
        await axios.delete(`${URL}/products?id=${id}`)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        return (
            <>
                <Container style={{ backgroundColor: '#eaedff' }}>
                    <Content style={{ padding: 10 }}>
                        <View style={{ marginTop: 22 }}>
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
                                                    <Input placeholder='Menu name' value={this.state.setEdit.name} onChangeText={(text) => this.setState({ name: text })} />
                                                </Item>
                                                <Item>
                                                    <Textarea rowSpan={5} underline value={this.state.getEditDescription} placeholder="Description" onChangeText={(text) => this.setState({ description: text })} />
                                                </Item>

                                                <Item>
                                                    <Input placeholder='Price'
                                                        value={this.state.getEditPrice} onChangeText={(text) => this.setState({ price: text })} />
                                                </Item>
                                                <Item>
                                                    <Input placeholder='idcategory' value={this.state.getEditIdCategory} onChangeText={(text) => this.setState({ id_category: text })} />
                                                </Item>
                                                <Item>
                                                    <Input placeholder='Quantity' value={this.state.getEditQuantity} />
                                                </Item>
                                                <Button full primary style={style.button} onPress={this.addData}>
                                                    <Text>Save Menu</Text>
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
                            </Modal>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(true);
                                }}>
                                <Text>Show Modal</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <Grid>
                                <Col>
                                    <Text style={{ fontSize: 30, fontWeight: '700', margin: 20 }}>Recent Order</Text>
                                    <List>
                                        {this.state.data.map(item => {
                                            return (
                                                <ListItem thumbnail>
                                                    <Left>
                                                        <Thumbnail square source={{ uri: `http://192.168.1.14:5000/images/${item.image}` }} />
                                                    </Left>
                                                    <Body>
                                                        <Text>{item.name}</Text>
                                                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                                    </Body>
                                                    <Right>
                                                        <Button primary onPress={() => this.delete(item.id)}>
                                                            <Text>Delete</Text>
                                                        </Button>
                                                        {/* <Button danger onPress={()=>this.update(item.id)}>
                                                     <Text>update</Text>
                                                </Button> */}
                                                        <TouchableHighlight
                                                            onPress={() => {
                                                                this.setModalVisible(true, item.id);
                                                            }}>
                                                            <Text>Show Modal</Text>
                                                        </TouchableHighlight>
                                                    </Right>
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                </Col>
                            </Grid>
                        </View>
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