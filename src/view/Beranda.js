import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const screen = Dimensions.get('window')
class Beranda extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={style.container}>
          <Image
          source={require('../assets/mobil.jpg')}
          />
          <Text style={{
            fontSize:40,
            fontWeight:'700'
          }}
          >
            agagagag
          </Text>

        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 17,
    elevation: 8,
    borderRadius: 8,
    
  },
  img:{
    height:screen.width *.7,
    width: screen.width *.7,
  }
})

export default Beranda;
