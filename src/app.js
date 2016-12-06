import React, { Component } from 'react';
import { View } from 'react-native'; 
import firebase from 'firebase';
import { Header } from './components/common/index.js';
import LoginForm from './components/LoginForm';

// i can skip specifying index.js when the file is called index

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB6eGJV6TbSDslEcULMwFo49kamcN-iNsM',
      authDomain: 'auth-b292c.firebaseapp.com',
      databaseURL: 'https://auth-b292c.firebaseio.com',
      storageBucket: 'auth-b292c.appspot.com',
      messagingSenderId: '69349472345'
    });
  }

  render() {
    return (
    <View>
      <Header headerText="Authentication" />
      <LoginForm />
    </View>
    );
  }
}

export default App;
