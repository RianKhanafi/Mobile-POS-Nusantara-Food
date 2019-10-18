import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Footer, FooterTab, Badge, Icon, Text, Button, Root, ActionSheet } from 'native-base';

// import { hidden } from 'colorette';
var BUTTONS = [
    { text: "Signin", icon: "sign in", iconColor: "#3f51b5" },
    { text: "Sign out", icon: "analytics", iconColor: "#3f51b5" },
    { text: "Dashboard", icon: "aperture", iconColor: "#3f51b5" },
    { text: "Delete", icon: "trash", iconColor: "#3f51b5" },
    { text: "Cancel", icon: "close", iconColor: "#3f51b5" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
// import Carousel from 'react-native-carousel'
// var {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
// } = React;
class navMenun extends Component {
    render() {

        return (
            <>
                <Footer>
                    <FooterTab style={{ backgroundColor: 'white' }}>
                        <Button badge vertical
                            onPress={() => this.props.navigate('Manage')}
                        >
                            <Badge><Text>2</Text></Badge>
                            <Icon name="cart" />
                            <Text>Manage</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigate('AddData')}>
                            <Icon name="add" />
                            <Text>Add</Text>
                        </Button>
                        <Button badge vertical
                            onPress={() => this.props.navigate('Home')}
                        >
                            <Badge><Text>2</Text></Badge>
                            <Icon name="apps" style={{ color: '#3f51b5' }} />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigate('History')}>
                            <Icon
                                name="refresh"
                            />
                            <Text>Chart</Text>
                        </Button>
                        <Root>
                            <Button badge vertical style={{ backgroundColor: '#fff', elevation: 0, borderRadius: 10 }}
                                onPress={() =>
                                    ActionSheet.show(
                                        {
                                            options: BUTTONS,
                                            cancelButtonIndex: CANCEL_INDEX,
                                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                            title: "Setting"
                                        },
                                        buttonIndex => {
                                            this.setState({ clicked: BUTTONS[buttonIndex] });
                                        }
                                    )}
                            >
                                <Icon name="settings" style={{ color: '#3f51b5' }} />
                                <Text style={{ color: '#3f51b5' }}>Cart</Text>
                            </Button>
                        </Root>
                    </FooterTab>
                </Footer>
            </>
        );
    }
}


const style = StyleSheet.create({

})



export default navMenun