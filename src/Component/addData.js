import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
    Text, View, Container, Content, Grid, Col, Left, Button, Icon, Body, Title,
    Header, RightItem, Input, Item, Form, Textarea
} from 'native-base'
import axios from 'axios'
import ImagePicker from 'react-native-image-picker'
class AddData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            image: '',
            price: '',
            quantity: ''
        }
    }

    addData = async () => {
        console.log(this.state.name)
        console.log(this.state.description)
        console.log(this.state.image)
        console.log(this.state.price)
        console.log(this.state.quantity)
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
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
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

        return (
            <>
                <Container>
                    <Content>
                        <View style={{ margin: 20 }}>
                            
                        <Button primary title="Choose File" onPress={this.chooseFile.bind(this)}></Button>
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
                            <Grid>
                                <Col>
                                    <Form>
                                        {/* success */}
                                        <Item>
                                            <Input placeholder='Menu name' onChangeText={(text) => this.setState({ name: text })} />
                                        </Item>
                                        <Item>
                                            <Textarea rowSpan={5} underline placeholder="Description" onChangeText={(text) => this.setState({ description: text })} />
                                        </Item>
                                        <Item>
                                            {/* <Input placeholder='Image' onChangeText={(text) => this.setState({ image: text })} /> */}
                                           
                                        </Item>
                                        <Item>
                                            <Input placeholder='Price' onChangeText={(text) => this.setState({ price: text })} />
                                        </Item>
                                        <Item>
                                            <Input placeholder='Quantity' onChangeText={(text) => this.setState({ quantity: text })} />
                                        </Item>
                                        <Button full primary style={style.button} onPress={this.addData}>
                                            <Text>Save Menu</Text>
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


