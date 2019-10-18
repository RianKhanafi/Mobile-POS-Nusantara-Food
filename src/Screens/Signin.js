import React, { Component } from 'react';
import {
    Container, Header, Content, Form,
    Item, Input, Label, Button, Text, View, TextInput
} from 'native-base';
import axios from 'axios'
import { StyleSheet,AsyncStorage } from 'react-native';
const URL = 'http://192.168.1.5:5000'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleLogin = async () => {

    const data = {
        email: this.state.username,
        password:this.state.password
    }
    
        await axios.post(`${URL}/api/registration/login`, data)
            .then(res => {
                AsyncStorage.setItem('token', res.data.token);
                AsyncStorage.setItem('username', res.data.name)
                AsyncStorage.setItem('token', `Bearer ${res.data.token}`)
                console.log(AsyncStorage.getItem('token'));
                this.props.navigation.navigate('Home')
            })
            .catch(err => {
                console.log(err)
                alert('Username or Password Error')
            })
    }


    render() {
        // console.log(this.state.password)
        return (
            <Container>
                <Header style={style.header} />
                <View style={{ flexDirection: "row", flex: 1, margin: 20 }}>
                    <Content>
                        <Text style={style.signin}>Nusantara Food</Text>
                        <Form>
                            <Item floatingLabel last>
                                <Label>Username</Label>
                                <Input
                                    onChangeText={(text) => this.setState({ username: text })} />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input
                                    onChangeText={(text) => this.setState({ password: text })}
                                />
                            </Item>
                            <Button full primary style={style.button} onPress={this.handleLogin}>
                                <Text>Sign in</Text>
                            </Button>
                            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                                <Text>don't have an account yet                               Sign up</Text>
                            </Button>
                        </Form>
                    </Content>
                </View>
                <View style={style.MainContainer}>
                </View>
            </Container>
        );
    }
}


const style = StyleSheet.create({
    signin: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        borderRadius: 30,
        marginTop: 50,
        // shadowOffset: { height: 0, width: 0 },
        // shadowOpacity: 0,
        elevation: 0,
    },
    header: {
        backgroundColor: 'white',
        elevation: 0
    }
})



export default Login