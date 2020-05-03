import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { Title, onPress } = this.props
        return (
            <View style={styles.contaienr}>
                <View style={{ width: 42, }} >
                    <TouchableOpacity
                        onPress={onPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Ionicons name={'md-arrow-back'} size={24} color={'#444'} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 17
                        }}
                    >{Title}</Text>
                </View>
                <View
                    style={{ width: 42 }}
                ></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contaienr: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        width: '100%',
        marginHorizontal: 17
    }
})

export default header;
