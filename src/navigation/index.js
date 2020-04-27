import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import {
    Login,
    Beranda,
    SignUp,
    Formlogin,
    Maps,
} from "../view";

const Home = createStackNavigator({
    Beranda: {
        screen:Beranda,
        navigationOptions: {
            header: null
          },
    }
})
const Tabs = createBottomTabNavigator({
    Beranda:{
        screen:Beranda
    },
    Maps:{
        screen:Maps
    }
    
})

const SignIn = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
          },
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
          },
    },
    Formlogin:{
        screen:Formlogin,
        navigationOptions:{
            header:null
        }
    }
},{
    initialRouteName:'Login'
})

const Router = (isSign = false) => createAppContainer(
    createAnimatedSwitchNavigator({
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                header: null
              },
        },
        Home: {
            screen: Tabs,
            navigationOptions: {
                header: null
              },
        },
    }, {
        initialRouteName: isSign ? 'Home' : 'SignIn',
        transition: (
            <Transition.Together>
              <Transition.Out
                type="slide-bottom"
                durationMs={400}
                interpolation="easeIn"
              />
              <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
          )
    })
)

export default Router