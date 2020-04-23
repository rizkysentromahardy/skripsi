import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppRouter from "./navigation";
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
