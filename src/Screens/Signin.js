import React, { Component } from 'react';
import {
    Container, Header, Content, Form,
    Item, Input, Label, Button, Text, View, TextInput
} from 'native-base';
import axios from 'axios'
import { StyleSheet } from 'react-native';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleLogin = async () => {
        console.log(this.state.username)
        console.log(this.state.password)
        // event.preventDefault()
        // const data = new FormData(event.target)

        // await axios.post('http://3.94.205.19:4444/api/v.0.1/registration/login', data)
        //     .then(res => {
        //         ls.set('token', res.data.token);
        //         ls.set('username', res.data.name)
        //         localStorage.setItem('token', `Bearer ${res.data.token}`)
        //         console.log(ls.get('username'));
        //         window.location.href = '/home'
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         alert('Error Loading in please try again')
        //     })
    }


    render() {
        // console.log(this.state.password)
        return (
            <Container>
                <Header style={style.header} />
                <View style={{ flexDirection: "row", flex: 1, margin: 20 }}>
                    <Content>
                        <Text style={style.signin}>Sign in</Text>
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
        elevation: 0
    },
    header: {
        backgroundColor: 'white',
        elevation: 0
    }
})



export default Login