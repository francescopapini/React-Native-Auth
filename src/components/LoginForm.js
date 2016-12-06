import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="myemail@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={emailContent => this.setState({ email: emailContent })}
          />
        </CardSection>
        
        <CardSection>
          <Input
           placeholder="password"
           label="Password"
           value={this.state.password}
           onChangeText={passwordContent => this.setState({ password: passwordContent })} 
          />
        </CardSection>
        
        <CardSection>
          <Button>
            Log In
          </Button> 
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
