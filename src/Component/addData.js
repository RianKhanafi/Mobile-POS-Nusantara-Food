import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {Text,View,Container,Content, Grid, Col, Left, Button, Icon, Body, Title,
    Header, RightItem, Input, Item, Form, Textarea} from 'native-base'
class AddData extends Component{
    render(){
        return(
            <>
                <Container>
                    <Content>
                       <View style={{margin:20}}>
                            <Grid>
                                <Col>
                                <Header hasSegment style={{backgroundColor:'#fff', marginBottom:20}}>
                                    <Left>
                                        <Button transparent
                                         onPress={() => this.props.navigation.navigate('Home')}
                                         >
                                        <Icon name="arrow-back" style={{color:'black'}}/>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Title style={{color:'black'}}>Add Menu</Title>
                                    </Body>
                                    </Header>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col>
                                    <Form>
                                         {/* success */}
                                        <Item> 
                                            <Input placeholder='Menu name'/>
                                        </Item>
                                       <Item>
                                             <Textarea rowSpan={5} underline placeholder="Description" />
                                        </Item>
                                        <Item> 
                                            <Input placeholder='Image'/>
                                        </Item>
                                        <Item> 
                                            <Input placeholder='Price'/>
                                        </Item>
                                        <Item> 
                                            <Input placeholder='Quantity'/>
                                        </Item>
                                        <Button full primary style={style.button} onPress={() => this.props.navigation.navigate('Home')}>
                                            <Text>Save Menu</Text>
                                        </Button>
                                     </Form>
                                </Col>
                            </Grid>
                        </View>
                    </Content>
                </Container>
            </>
        )
    }
} 
const style = StyleSheet.create({
    button:{
        borderRadius:20,
        elevation:0,
        marginTop:70
    }
})
export default AddData