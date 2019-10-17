import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
    Text, View, Container, Content, Grid, Col, Left, Button, Icon, Body, Title,
    Header, RightItem, Input, Item, Form, Textarea, Image
} from 'native-base'
import axios from 'axios'
import ImagePicker from 'react-native-image-picker'
const URL = 'http://192.168.1.14:5000/api'
class AddData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            image: '',
            price: '',
            id_category:'',
            quantity: '',
            updated:'',
            filePath:''
        }
    }

    addData = async () => {
        const data = {
            name:this.state.name,
            description:this.state.description,
            image:this.state.filePath.uri,
            price:this.state.price,
            quantity:this.state.quantity,
            updated:this.state.updated,
            id_category:this.state.id_category
        }
        await axios.post(`${URL}/products`, data)
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
        // console.log(this.state.filePath.path)
        return (
            <>
                <Container>
                    <Content>
                        <View style={{ margin: 20 }}>
                        {/* <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 250, height: 250 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.filePath.uri}
          </Text> */}
          {/* {this.state.filePath !==''?(<Image source={{uri:this.state.filePath}} style={{width:40, height:50}}/>):<Text>jihjhb</Text>} */}
                       
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
                                        
                                        <Button  primary onPress={this.chooseFile.bind(this)}  style={{elevation:0, width:130, marginTop:10, marginLeft:15}}><Text>Choose File</Text></Button>
                                        
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


