import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {
    Container, Content, Grid, Col, Card, CardItem, Body, Text, View,
    List, ListItem, Thumbnail, Left, Right, Button, Badge, Icon, Root, Picker, Form
} from 'native-base'
import rupiahFormat from 'rupiah-format'
import axios from 'axios'
import { API_BASE_URL } from 'react-native-dotenv'
import PureChart from 'react-native-pure-chart';
// import Footer from '../Component/navMenu'
// Compinent
import Footer from '../Component/footer'

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
            yearCount: 0,
            detalProduct: [],
            selected: "key1",
            dataGrafik:[]
        }
        this.getRecentOrder = this.getRecentOrder.bind(this)
    }
    async componentDidMount() {
        await this.getCountOrder()
        this.getRecentOrder()
    }
    onValueChange = async (value) => {
        // console.log(value)
        this.setState({
            selected: value
        })
        console.log(`${API_BASE_URL}/api/grOrder?order=${value}`)
        await axios.get(`${API_BASE_URL}/api/grOrder?order=${value}`)
            .then(result => {
                this.setState({
                    recentOrder: result.data.data
                })
            })
    }

    // Card
    getCountOrder = async () => {
        await axios.get(`${API_BASE_URL}/api/countorders`)
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
    getRecentOrder = async (event='day') => {
        // let data = event.target.value
        axios.get(`${API_BASE_URL}/api/recentorder?order=year`)
            .then(result => {
                this.setState({
                    dataGrafik: result.data.data
                    // order: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    gotoDetail = async (id, image, name, description, price, quantity) => {
        const detalProduct = {
            id: id,
            name: name,
            image: image,
            description: description,
            price: price,
            quantity: quantity
        }
        this.setState({
            detalProduct: detalProduct
        })
    }

    render() {
        // let date = []
        // let amount = []
        // this.state.dataGrafik.map(item=>{
        // })
        // date.push({ 'x': item.date.substr(0,10), 'y': item.amount })
        // console.log(date)
        let sampleData = [
            {
                seriesName: 'series1',
                data: [
                    { x: '2018-02-01', y: 30 },
                    { x: '2018-02-02', y: 200 },
                    { x: '2018-02-03', y: 170 },
                    { x: '2018-02-04', y: 250 },
                    { x: '2018-02-05', y: 10 },
                    { x: '2018-02-03', y: 170 },
                    { x: '2018-02-04', y: 250 },
                    { x: '2018-02-05', y: 10 }
                ],
                color: '#297AB1'
            },
            {
                seriesName: 'series2',
                data: [
                    { x: '2018-02-01', y: 20 },
                    { x: '2018-02-02', y: 100 },
                    { x: '2018-02-03', y: 140 },
                    { x: '2018-02-04', y: 550 },
                    { x: '2018-02-05', y: 40 },
                    { x: '2018-02-04', y: 550 },
                    { x: '2018-02-05', y: 40 },
                    { x: '2018-02-04', y: 550 },
                    { x: '2018-02-05', y: 40 }
                ],
                color: 'yellow'
            }
        ]

       
        console.log(API_BASE_URL)
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
                                            <PureChart data={sampleData} type='line' height={150} width={'100%'} />


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
                                            <Text style={{ color: '#fff', fontSize: 40 }}>{rupiahFormat.convert(this.state.resYearIncome)}</Text>
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
                                            <Text style={{ color: '#3f51b5', fontSize: 20 }}>{rupiahFormat.convert(this.state.count)}</Text>
                                            <Text style={{ color: '#3f51b5' }}>+90%</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Grid>

                        <View>
                            <Grid>
                                <Col>
                                    <Grid>
                                        <Col size={2}><Text style={{ fontSize: 30, fontWeight: '700', margin: 20 }}>Recent Order</Text></Col>
                                        <Col>
                                            <Form>
                                                <Picker
                                                    note
                                                    mode="dropdown"
                                                    style={{ width: 120 }}
                                                    selectedValue={this.state.selected}
                                                    onValueChange={this.onValueChange.bind(this)}
                                                >
                                                    <Picker.Item label="Daily" value="day"
                                                        onChangeText={(text) => this.onValueChange(text)} />
                                                    <Picker.Item label="Daily" value="day"
                                                        onChangeText={(text) => this.onValueChange(text)} />
                                                    <Picker.Item label="Monthly" value="month"
                                                        onChangeText={(text) => this.onValueChange(text)} />
                                                    <Picker.Item label="Year" value="year"
                                                        onChangeText={(text) => this.onValueChange(text)} />
                                                </Picker>
                                            </Form>
                                        </Col>
                                    </Grid>
                                    <List style={{ marginBottom: 10 }}>
                                        {this.state.recentOrder.map(item => {
                                            return (

                                                <ListItem thumbnail>
                                                    <Body>
                                                        <Text>{rupiahFormat.convert(item.amount)}</Text>
                                                        <Text note numberOfLines={1}>{item.orders}</Text>
                                                    </Body>
                                                    <Right>
                                                        <Button transparent
                                                            onPress={() => this.props.navigation.navigate('DetailProduct', {
                                                                product: {
                                                                    id: item.idRecet,
                                                                    buyer: item.buyer,
                                                                    date: item.date,
                                                                    orders: item.orders,
                                                                    amount: item.amount
                                                                }
                                                            })
                                                            }
                                                        >
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


                    <Footer navigate={this.props.navigation.navigate} />
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