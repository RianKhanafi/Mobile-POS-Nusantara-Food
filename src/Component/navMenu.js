import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Footer,FooterTab,Badge,Icon,Text, Button } from 'native-base';

class navMenun extends Component {
    render() {
        return (
           <>
                <Footer>
                        <FooterTab style={{ backgroundColor: 'white' }}>
                            <Button badge vertical>
                                <Badge><Text>2</Text></Badge>
                                <Icon name="apps" />
                                <Text>Home</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="camera" />
                                <Text>Add</Text>
                            </Button>
                            <Button badge vertical>
                                <Badge><Text>51</Text></Badge>
                                <Icon name="navigate" />
                                <Text>Cart</Text>
                            </Button>
                            <Button vertical onPress={() => this.props.navigation.navigate('History')}>
                            <Icon
                                name='sc-telegram'
                                type='evilicon'
                                color='#517fa4'
                                />
                                <Text>History</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
           </>
        );
    }
}


const style = StyleSheet.create({
   
})



export default navMenun