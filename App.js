import React, { Component } from 'react';
import {
  Container, Header, Content, Form,
  Item, Input, Label, Button, Text, View
} from 'native-base';
import MainNavigation from './src/Navigator'



class App extends Component {
  render() {
    return (
      <MainNavigation />
    )
  }
}

export default App