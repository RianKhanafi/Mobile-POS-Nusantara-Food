import React, { Component } from 'react';
import {
    Container, Header, Content, Form,
    Item, Input, Label, Button, Text, View
} from 'native-base';
import { StyleSheet } from 'react-native'
class Signup extends Component {
    // constructor(props){
    //     super(props)
    //     this.state ={
    //       user: this.props.navigation.getParam('username')
    //     }
    //   }


    render() {
        return (
            <Container>
                <Header style={style.header} />
                <View style={{ flexDirection: "row", flex: 1, margin: 20 }}>
                    <Content>
                        <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 30 }}>Sign up</Text>
                        <Form >
                            <Item floatingLabel last>
                                <Label>Name</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                            <Button full primary style={style.button}>
                                <Text>Signup</Text>
                            </Button>
                            <Button transparent onPress={() => this.props.navigation.navigate('Signin')}>
                                <Text>have an account yet                                       Sign in</Text>
                            </Button>
                        </Form>
                    </Content>
                </View>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    button: {
        borderRadius: 30,
        marginTop: 50,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        elevation: 0,
    },
    header: {
        backgroundColor: 'white',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        elevation: 0
    }
})

export default Signup