import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
    Container, Content, Grid, Col, Card, CardItem, Body, Text, View,
    List, ListItem, Thumbnail, Left, Right, Button
} from 'native-base'

// Compinent
import NavMenu from '../Component/navMenu'
class History extends Component {
    render() {
        return (
            <>
                <Container style={{ backgroundColor: '#eaedff' }}>
                    <Content style={{ padding: 10 }}>
                        <View>
                            <Text style={{ fontSize: 30, fontWeight: '700', marginLeft:20, marginTop:10, marginBottom:10, marginRight:10 }}>Dashboard</Text>
                        </View>
                        <Grid>
                            <Col style={{ padding: 10 }}>
                                <Card style={style.chart}>
                                    <CardItem>
                                        <Body>
                                            <Text style={{ fontSize: 20, color: '#3f51b5' }}>Revenue</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Grid>
                        <Grid>
                            <Col style={{ padding: 5 }}>
                                <Card style={{ borderColor: '#fff', elevation: 0, borderRadius: 20 }}>
                                    <CardItem style={style.chartIncomeBlue}>
                                        <Body style={{ paddingTop: 20 }}>
                                            <Text style={{ color: '#fff' }}>Years</Text>
                                            <Text style={{ color: '#fff', fontSize: 40 }}>Rp.50.000.000,00</Text>
                                            <Text style={{ color: '#fff' }}>+90%</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Grid>
                        <Grid>
                            <Col style={{ padding: 5 }}>
                                <Card style={style.chartIncome}>
                                    <CardItem>
                                        <Body style={{ paddingTop: 30 }}>
                                            <Text style={{ color: '#3f51b5' }}>Years</Text>
                                            <Text style={{ color: '#3f51b5', fontSize: 20 }}>Rp.5.00.000,00</Text>
                                            <Text style={{ color: '#3f51b5' }}>+90%</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col style={{ padding: 5 }}>
                                <Card style={style.chartIncome}>
                                    <CardItem>
                                        <Body style={{ paddingTop: 30 }}>
                                            <Text style={{ color: '#3f51b5' }}>Years</Text>
                                            <Text style={{ color: '#3f51b5', fontSize: 20 }}>Rp.5.00.000,00</Text>
                                            <Text style={{ color: '#3f51b5' }}>+90%</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Grid>
                        <Grid>
                            <Col>
                                <Text style={{ fontSize: 30, fontWeight: '700', margin: 20 }}>Recent Order</Text>
                                <List style={{ marginBottom: 10 }}>
                                    <ListItem thumbnail>
                                        <Left>
                                            <Thumbnail square source={require('../img/bakso.jpg')} />
                                        </Left>
                                        <Body>
                                            <Text>Sankhadeep</Text>
                                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent>
                                                <Text style={{ color: '#3f51b5' }}>View</Text>
                                            </Button>
                                        </Right>
                                    </ListItem>
                                    <ListItem thumbnail>
                                        <Left>
                                            <Thumbnail square source={require('../img/bakso.jpg')} />
                                        </Left>
                                        <Body>
                                            <Text>Sankhadeep</Text>
                                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent>
                                                <Text style={{ color: '#3f51b5' }}>View</Text>
                                            </Button>
                                        </Right>
                                    </ListItem>
                                </List>
                            </Col>
                        </Grid>
                    </Content>
                    <NavMenu />
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