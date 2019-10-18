import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import {
    Text, View, Container, Content, Grid, Col, Left, Button, Icon, Body, Title,
    Header, RightItem, Input, Item, Form, Textarea, Image
} from 'native-base'
import axios from 'axios'
import ImagePicker from 'react-native-image-picker'
import { API_BASE_URL } from 'react-native-dotenv'
class AddData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: this.props.navigation.getParam('updtData'),
            name: '',
            description: '',
            price: 0,
            category: '',
            quantity: 0,
        }
    }
    componentDidMount() {
        this.getDataById()
    }
    getDataById = async () => {
        // this.setState({ modalVisible: visible });
        await axios.get(`${API_BASE_URL}/api/products/${this.state.product}`)
            .then(result => {
                console.log(result.data.data[0].price)
                this.setState({
                    name: result.data.data[0].name,
                    description: result.data.data[0].description,
                    price: result.data.data[0].price,
                    category: result.data.data[0].id_category,
                    quantity: result.data.data[0].quantity
                })
            })
            .catch(err => {
                console.log(err)
            })
        // console.log(this.state.setEdit[0].name)
    }

    addData = async () => {
        const data = {
            name: this.state.name,
            description: this.state.description,
            image: this.state.filePath.uri,
            price: this.state.price,
            quantity: this.state.quantity,
            updated: this.state.updated,
            id_category: this.state.id_category
        }
        await axios.post(`${API_BASE_URL}/api/products`, data)
            .then(result => {
                alert('Succedd Add data')
            })
            .catch(err => {
                console.log(err)
            })

    }




    chooseFile = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            //   console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                // console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response;
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    filePath: source,
                });
            }
        });
    };



    render() {
        // console.log(this.state.product)
        return (
            <>
                <Container>
                    <Content>
                        <View style={{ margin: 20 }}>
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
                                            <Title style={{ color: 'black' }}>Update Menu</Title>
                                        </Body>
                                    </Header>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col>
                                    <Form>
                                        {/* success */}
                                        {/* <Item> */}
                                        <TextInput value={this.state.price} />
                                        {/* </Item> */}
                                        <Item>
                                            <Textarea rowSpan={5} underline placeholder="Description" onChangeText={(text) => this.setState({ description: text })} />
                                        </Item>

                                        <Button primary onPress={this.chooseFile.bind(this)} style={{ elevation: 0, width: 110, marginTop: 10, marginLeft: 15, borderRadius: 20 }}><Text>Choose File</Text></Button>

                                        <Item>
                                            <Input placeholder='Price' onChangeText={(text) => this.setState({ price: text })} />
                                        </Item>
                                        <Item>
                                            <Input placeholder='idcategory' onChangeText={(text) => this.setState({ id_category: text })} />
                                        </Item>
                                        <Item>
                                            <Input placeholder='Updated' onChangeText={(text) => this.setState({ updated: text })} />
                                        </Item>
                                        <Item>
                                            <Input placeholder='Quantity' onChangeText={(text) => this.setState({ quantity: text })} />
                                        </Item>
                                        <Button full primary style={style.button} onPress={this.addData}>
                                            <Text>Update Menu</Text>
                                        </Button>
                                    </Form>
                                </Col>
                            </Grid>
                        </View>
                    </Content>
                </Container>
            </>
        )
    }
}
const style = StyleSheet.create({
    button: {
        borderRadius: 20,
        elevation: 0,
        marginTop: 70
    }
})
export default AddData


