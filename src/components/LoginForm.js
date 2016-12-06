import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '' });

    firebase.auth.signInWithEmailAndPassword(email, password)
      // user fails to sign in
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        // user fails to sign up
        .catch(() => {
          this.setState({ error: 'Authentication failed!' });
        });
     });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            // if i don't specify a prop it's assumed undefined and false, it won't crash
            placeholder="myemail@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={emailContent => this.setState({ email: emailContent })}
          />
        </CardSection>
        
        <CardSection>
          <Input
           secureTextEntry 
           placeholder="password"
           label="Password"
           value={this.state.password}
           onChangeText={passwordContent => this.setState({ password: passwordContent })} 
          />
        </CardSection>
        
        <Text style={styles.errorTextStyles}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button> 
        </CardSection>
      </Card>
    );
  }
}


const styles = {
  errorTextStyles: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;
