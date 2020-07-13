import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import database from '@react-native-firebase/database';

const screen = Dimensions.get('window')
class Beranda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPengaduan:[]
    };
  }
  componentDidMount() {
    database()
      .ref('/pengaduan')
      .on('value', data => {
        data.forEach(snapshot => {
          var obj ={}
          obj = snapshot
          obj.id = snapshot.key
          console.log('User data: ', obj);

        });
        
      });
  }

  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <View style={style.card}>
          <Image
          />
          <Text style={{
            fontSize: 40,
            fontWeight: '700'
          }}
          >  
          </Text>

        </View>
        <View style={{height:40,width:10,backgroundColor:'red'}}></View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{ 
flex:2
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 17,
    elevation: 8,
    borderRadius: 8,
    flexDirection:'column',
  },
  img: {
    height: screen.width * .7,
    width: screen.width * .7,
  }
})

export default Beranda;
