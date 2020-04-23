import React from 'react';
import { View, Dimensions, StatusBar, StyleSheet, Image, Button, Alert  } from 'react-native';


const screen = Dimensions.get('window')
class Login extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <StatusBar barStyle={'light-content'} backgroundColor={'#2980b9'} />
                <View style={style.logo}>
                    <Image source={require('../assets/logo.png')}
                        style={{
                            height: screen.width * .7,
                            width: screen.width * .7
                        }}
                        resizeMode={'contain'}

                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: screen.height * .2,
                    marginHorizontal: 17
                }} >
                    <View style={{ flex: 1, marginRight: 4 }}>
                        <Button title="SignUp"
                            onPress={() => this.props.navigation.navigate('SignUp')} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 4 }}>
                        <Button title="LogIn"
                            onPress={() => this.props.navigation.navigate('Formlogin')} />
                    </View>

                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    logo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",


    }

})

export default Login;