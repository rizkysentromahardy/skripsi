import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator, ToastAndroid, TextInput, Dimensions } from 'react-native';
import ImagePicker from "react-native-image-picker";
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import moment from "moment";
import { Header } from '../components';


const screen = Dimensions.get('window')
class camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Photo: null,
            desc: '',
            loading: false,
            progress: '0%'
        };
    }

    componentDidMount() {
    }

    async onSaveToHost() {
        const { Photo, desc } = this.state;
        console.log(desc);
        
        var obj = {
            photo: '',
            deskription: desc.toString(),
            userData: {
                nama: 'Indra',
                img: 'https://cdn2.tstatic.net/wartakota/foto/bank/images/20170617-indra-birowo_20170617_203034.jpg'
            }
        }
        console.log('Uploading Photo...');
        this.setState({
            loading: true
        })
        var nameFile = moment().format('ddmmyyhhmmss');
        const reference = storage().ref(`${nameFile}.PNG`);
        const upl = await reference.putFile(Photo);
        reference.getDownloadURL().then(uri => {
            console.log(uri);
            obj.photo = uri;
            this.saveToDB(nameFile, obj);
        });


    }

    saveToDB(id, data) {
        database().ref(`/pengaduan/${id}`)
            .set(data)
            .then(() => {
                ToastAndroid.show('Berhasil di post...', ToastAndroid.SHORT)
                this.setState({
                    loading: false,
                    Photo: null,
                    desc: ''
                });
            }).catch(() => {
                ToastAndroid.show('Gagal, Silahkan coba lagi!', ToastAndroid.SHORT)
                this.setState({
                    loading: false
                })
            });
    }


    onchangeImage() {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                // console.log('User cancelled image picker');
            } else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                // console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                // console.log(response.uri);
                this.setState({
                    Photo: response.uri,
                });
            }
        });
    }

    render() {
        const { Photo } = this.state
        return (
            <View style={styles.container}>
                <Header Title={'Pengaduan Baru'} onPress={() => this.props.navigation.goBack()} />

                <TouchableOpacity
                    onPress={() => this.onchangeImage()}
                >
                    <View
                        style={[styles.img, {
                            marginTop: 17, borderColor: '#bfbdbd',
                            borderWidth: 1,
                            borderStyle: 'dashed',
                        }]}
                    >
                        {
                            Photo == null ?
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        source={require('../assets/interface.png')}
                                        style={{ height: 52, width: 52 }}
                                        resizeMode={'contain'}
                                    />
                                    <Text allowFontScaling={false} style={{ color: '#7f8c8d', marginTop: 14, fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>Unggah Photo</Text>
                                </View>
                                :
                                <Image
                                    source={{ uri: Photo }}
                                    style={styles.img}
                                    resizeMode={'cover'}
                                />
                        }
                    </View>
                </TouchableOpacity>
                <View style={{ marginHorizontal: 17, marginVertical: 17 }}>
                    <Text allowFontScaling={false} style={{ color: '#444', marginTop: 14, fontSize: 17, fontWeight: 'bold' }}>Keterangan Pengaduan</Text>
                    <TextInput
                        placeholder={'Isikan keterangan pengaduan'}
                        numberOfLines={5}
                        maxFontSizeMultiplier={1}
                        allowFontScaling={false}
                        multiline
                        style={{
                            backgroundColor: '#ededed',
                            marginTop: 14,
                            height: screen.width * .33,
                            padding: 17,
                            fontSize: 15,
                            borderRadius: 8
                        }}
                        onChangeText={(val) => this.setState({ desc: val })}
                    />
                </View>

                <View style={{ marginTop: 32, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        disabled={this.state.loading}
                        onPress={() => this.onSaveToHost()}
                        style={{
                            width: screen.width * .7,
                            paddingVertical: 14,
                            backgroundColor: '#27ae60', borderRadius: 8
                        }}>
                        {
                            this.state.loading ?
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <ActivityIndicator size={24} color={'#fff'} />
                                    <Text allowFontScaling={false} style={{ marginLeft: 8, color: '#fff', textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>
                                        Sedang Memposting...
                                    </Text>
                                </View>
                                :
                                <Text allowFontScaling={false} style={{ color: '#fff', textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>
                                    Posting
                                </Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        height: screen.width * .5,
        width: screen.width - 34,
        marginHorizontal: 17,
        backgroundColor: '#ededed',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default camera;
