import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import styles from './app/assets/styles'
import PushNotificationContainer from './app/components/pushNotifications/PushNotificationContainer'
import Home from './app/components/home/Home';
import Login from './app/components/login/Login'
import {landingPageStyles} from './app/assets/styles'
import store from './app/store'




export default class DreamscapeMobile extends Component {
  constructor(){
    super()
    this.state = store.getState().auth
  }
  componentDidMount(){
    //setting this up so it updates when user is set and re-renders proper view
    this.unsubscribe = store.subscribe(()=>{
      this.setState(store.getState().auth)
    })
  }
  componentWillUnmount(){
    this.unsubscribe()
  }


  render() {

    return (
      <View style={landingPageStyles.appContainer}>
        { this.state ? <Home /> : <Login /> }
      </View>
    )
  }
}






AppRegistry.registerComponent('DreamscapeMobile', () => DreamscapeMobile);

