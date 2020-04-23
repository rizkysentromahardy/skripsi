import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { FilledTextField, TextField } from "react-native-material-textfield";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from "react-native-elements";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={style.container}>
        <View style={{
          paddingVertical: 60,
          paddingLeft: 25
        }}>
          <Text style={{ fontSize: 45, fontWeight: '700' }}>Sign Up</Text>
          <Text style={{ fontSize: 20, paddingTop: 5 }}>Already have an account?</Text>
        </View>
        <View style={style.textbox}>
          <TextField
            label='Nama'
            keyboardType='default'
          />
          <TextField

            label='Email'
            keyboardType='email-address'
          />
          <TextField
            label='Password'
            keyboardType="visible-password"
            secureTextEntry
          />
        </View>
        <View style={{
          marginHorizontal: 30,
          marginVertical: 8,
          paddingTop:70,
        }}>
          <Button 
          title='Daftar' 
          onPress={() => this.props.navigation.navigate('Formlogin')}
          />
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },
  textbox: {
    marginHorizontal: 30,

  }
})
export default SignUp;
