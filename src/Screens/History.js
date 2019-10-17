import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
    Container, Content, Grid, Col, Card, CardItem, Body, Text, View,
    List, ListItem, Thumbnail, Left, Right, Button, Footer, FooterTab, Badge, Icon, Root
} from 'native-base'
import axios from 'axios'
// Compinent
import NavMenu from '../Component/navMenu'
class History extends Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
            order: [],
            count: 0,
            orders: 0,
            growth: 0,
            resYearIncome: 0,
            recentOrder: [],
            growthOrdeWeek: 0,
            yearCount: 0
        }
        this.getRecentOrder = this.getRecentOrder.bind(this)
    }
    async componentDidMount() {
        await this.getCountOrder()
        // await this.getValue()
        await this.recentOrder()
    }

    // Card
    getCountOrder = async () => {
        await axios.get('http://192.168.1.5:5000/api/countorders')
            .then(result => {
                let growthCount = ((result.data.data[0].daynow - result.data.data[0].yesterday) / result.data.data[0].yesterday) * 100
                let gowCount = ((result.data.data[0].weeknow - result.data.data[0].lastweek) / result.data.data[0].lastweek) * 100
                let yearCount = ((result.data.data[0].yearnow - result.data.data[0].yearlast) / result.data.data[0].yearlast * 100)
                this.setState({
                    count: result.data.data[0].daynow,
                    orders: result.data.data[0].dayordernnow,
                    resYearIncome: result.data.data[0].yearnow,
                    growth: growthCount.toFixed(1),
                    growthOrdeWeek: gowCount.toFixed(1),
                    yearCount: yearCount.toFixed(1)
                })
            }).catch(err => {
                console.log(err)
            })
    }

    // grafik
    getRecentOrder = async (event) => {
        let data = event.target.value
        Http.get(`/recentorder?order=${data}`)
            .then(result => {
                this.setState({
                    data: result.data.data,
                    order: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // show recent order
    recentOrder = async () => {
        await axios.get('http://192.168.1.5:5000/api/grOrder?order=year')
            .then(result => {
                this.setState({
                    recentOrder: result.data.data
                })
            })
    }

    render() {
        this.state.recentOrder.map(item => {
            console.log(item.amount)
        })
        // card if null
        if (this.state.count === null) {
            this.state.count = 0;
        }
        return (
            <>
                <Container style={{ backgroundColor: '#eaedff' }}>
                    <Content style={{ padding: 10 }}>
                        <View>
                            <Text style={{ fontSize: 30, fontWeight: '700', marginLeft: 20, marginTop: 10, marginBottom: 10, marginRight: 10 }}>Dashboard</Text>
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
                                            <Text style={{ color: '#fff' }}>This Year's Income</Text>
                                            <Text style={{ color: '#fff', fontSize: 40 }}>{this.state.resYearIncome}</Text>
                                            <Text style={{ color: '#fff' }}>+{this.state.yearCount}%</Text>
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
                                            <Text style={{ color: '#3f51b5' }}>Order</Text>
                                            <Text style={{ color: '#3f51b5', fontSize: 20 }}>{this.state.orders}</Text>
                                            <Text style={{ color: '#3f51b5' }}>{this.state.growthOrdeWeek}</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col style={{ padding: 5 }}>
                                <Card style={style.chartIncome}>
                                    <CardItem>
                                        <Body style={{ paddingTop: 30 }}>
                                            <Text style={{ color: '#3f51b5' }}>Today's Income</Text>
                                            <Text style={{ color: '#3f51b5', fontSize: 20 }}>{this.state.count}</Text>
                                            <Text style={{ color: '#3f51b5' }}>+90%</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Grid>

                        <View>
                            <Grid>
                                <Col>
                                    <Text style={{ fontSize: 30, fontWeight: '700', margin: 20 }}>Recent Order</Text>
                                    <List style={{ marginBottom: 10 }}>
                                        {this.state.recentOrder.map(item => {
                                            return (
                                                <ListItem thumbnail>
                                                    <Body>
                                                        <Text>{item.amount}</Text>
                                                        <Text note numberOfLines={1}>{item.orders}</Text>
                                                    </Body>
                                                    <Right>
                                                        <Button transparent>
                                                            <Text style={{ color: '#3f51b5' }}>View</Text>
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


                    <Footer>
                        <FooterTab style={{ backgroundColor: 'white' }}>
                            <Button badge vertical
                                onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Badge><Text>2</Text></Badge>
                                <Icon name="cart" />
                                <Text>Cart</Text>
                            </Button>
                            <Button vertical onPress={() => this.props.navigation.navigate('AddData')}>
                                <Icon name="add" />
                                <Text>Add</Text>
                            </Button>
                            <Button badge vertical
                                onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Badge><Text>2</Text></Badge>
                                <Icon name="apps" />
                                <Text>Home</Text>
                            </Button>
                            <Button vertical onPress={() => this.props.navigation.navigate('History')}>
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