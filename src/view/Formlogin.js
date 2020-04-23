import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { TextField } from 'react-native-material-textfield';

const screen = Dimensions.get('window')
class Formlogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={style.container}>
                <StatusBar barStyle={'light-content'} backgroundColor={'#2980b9'} />
                <View style={style.logo}>
                    <Image source={require('../assets/logo.png')}
                        style={{
                            height: screen.width * .7,
                            width: screen.width * .7,
                        }}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={{
                    borderRadius: 25,
                    marginBottom: 20,
                    // justifyContent: 'center',
                    padding: 20

                }}>
                    <View>
                        <View style={{
                            marginHorizontal: 17,
                            marginVertical: 8,
                            // backgroundColor: 'rgba(189, 195, 199,.6)',

                        }}>
                            <KeyboardAvoidingView>

                                <TextField
                                    label='Email'
                                    keyboardType='email-address'
                                />
                            </KeyboardAvoidingView>
                        </View>
                        <View style={{
                            marginHorizontal: 17,
                            marginVertical: 8,
                        }}>
                            <KeyboardAvoidingView>

                                <TextField
                                    label='Password'
                                    keyboardType='visible-password'
                                    secureTextEntry
                                />
                            </KeyboardAvoidingView>
                        </View>
                        <View>
                            <View style={{
                                marginHorizontal: 17,
                                marginVertical: 8,
                                paddingTop:70,
                            }}>
                                <Button title="LOGIN"
                                    onPress={() => this.props.navigation.navigate('Beranda')} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    logo: {
        justifyContent: "flex-start",
        alignItems: "center",

    },
})
export default Formlogin;
