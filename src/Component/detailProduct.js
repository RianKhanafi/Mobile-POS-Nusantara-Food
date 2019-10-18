import React, { Component } from 'react'
import { styleSheet } from 'react-native'
import { View, Text, Col, Grid, Container, Content } from 'native-base'

export default class detailProduct extends Component {
    render() {
        return (
            <>
                <Container>
                    <Content>
                        <View style={{ flexDirection: "row", flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Text> mxbcndsmcb</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Text> mxbcndsmcb</Text>
                            </View>
                        </View>
                    </Content>
                </Container>
            </>
        )
    }
}