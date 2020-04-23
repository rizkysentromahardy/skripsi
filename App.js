
import React from 'react';
import {
  View,StyleSheet,
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from '@react-native-community/geolocation';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount(){
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
  .then(data => {
      Geolocation.getCurrentPosition(info => console.log(info));

  
  }).catch(err => {
    // The user has not accepted to enable the location services or something went wrong during the process
    // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
    // codes : 
    //  - ERR00 : The user has clicked on Cancel button in the popup
    //  - ERR01 : If the Settings change are unavailable
    //  - ERR02 : If the popup has failed to open
  });
  }
  render() {
    
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsUserLocation
          region={{
            latitude: -7.547776,
            longitude: 112.2528683,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    )
    
  }

}


export default App;
