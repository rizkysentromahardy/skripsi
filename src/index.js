import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppRouter from "./navigation";
import firebase from "@react-native-firebase/app/";
import database from '@react-native-firebase/database';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignin: false
        };
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ isSignin: true })
        // }, 5000);
        database()
            .ref('/users/123')
            .set({
                name: 'Ada Lovelace',
                age: 31,
            })
            .then(() => console.log('Data set.'));
        database()
            .ref('/users/123')
            .on('value', snapshot => {
                console.log('User data: ', snapshot.val());
            });
    }

    render() {
        const { isSignin } = this.state
        const Layout = AppRouter(isSignin)
        return (
            <Layout />
        );
    }
}

export default App;
