import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView, TouchableOpacity ,AsyncStorage } from 'react-native';
import rupiahFormat from 'rupiah-format'
import { View, Button,Text, Container, Content, Grid, Col, Row,
    List, ListItem, Thumbnail,Left, Right, Body, Header, Icon, Title, cartItem,
    Form, Item, Input } from 'native-base';
    const URL = 'http://192.168.1.14:5000'
class detailProduct extends Component {
    constructor(props){
        super(props)
        this.state ={
          cartItem: this.props.navigation.getParam('cart')
        }
      }
    
    render() {
       const cart = this.state.cartItem.data
        return (
            <>
                <Container>
                    <Content>
                           <View style={{minHeight:620}}>
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
                               {cart.map(item =>{
                                   return(
                                    <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail square source={{uri:`${URL}/images/${item.image}`}} />
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
                               <Form>
                                        {/* success */}
                                        <Item>
                                            <Input placeholder='Menu name' onChangeText={(text) => this.setState({ name: text })} />
                                        </Item>
                                    
                                        <Button full primary style={style.button} onPress={this.addData}>
                                            <Text>Save Menu</Text>
                                        </Button>
                                    </Form>
                            </List>
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