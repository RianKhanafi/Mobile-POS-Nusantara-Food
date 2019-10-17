import React, { Component } from 'react'
import { StyleSheet,TouchableOpacity} from 'react-native'
import {
    Container, Content, Grid, Col, Card, CardItem, Body, Text, View,
    List, ListItem, Thumbnail, Left, Right, Button, Badge, Icon, Root
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
            data: []
        }
        // this.handleAddtoCart = this.handleAddtoCart.bind(this)
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

    delete = async(id) =>{
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
                        <View>
                            <Grid>
                                <Col>
                                    <Text style={{ fontSize: 30, fontWeight: '700', margin: 20 }}>Recent Order</Text>
                                    <List>
                                    {this.state.data.map(item=>{
                                        return(
                                            <ListItem thumbnail>
                                            <Left>
                                                <Thumbnail square source={{uri: `http://192.168.1.14:5000/images/${item.image}` }} />
                                            </Left>
                                            <Body>
                                                <Text>{item.name}</Text>
                                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                            </Body>
                                            <Right>
                                                <Button primary onPress={()=>this.delete(item.id)}>
                                                     <Text>Delete</Text>
                                                </Button>
                                                <Button danger onPress={()=>this.delete(item.id)}>
                                                     <Text>update</Text>
                                                </Button>
                                            </Right>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                                </Col>
                            </Grid>
                        </View>
                    </Content>


                   <Footer navigate={this.props.navigation.navigate}/>
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