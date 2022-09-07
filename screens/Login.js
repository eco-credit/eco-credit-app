import React, { useState } from 'react'
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from 'react-native'
import {appUrl, apiUrl} from "../config/config"
import {validEmailRegex} from "../config/constants"
import FlashMessage, { showMessage} from "react-native-flash-message"
import AsyncStorage from '@react-native-async-storage/async-storage'
import {unAuthenticatedRequest} from "../network/requests";
import {LOGIN_URL} from "../network/endpoints";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [validStyle] = useState({
        backgroundColor: "#fff",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    })

    const [inValidStyle] = useState({
        borderColor: 'red',
        borderWidth: 1,
    })

    const [emailStyle, setEmailStyle] = useState(validStyle)
    const [passwordStyle, setPasswordStyle] = useState(validStyle)

    let login = async ({ navigation }) => {
        let validPassword = validatePassword()
        let validEmail = validateEmail()

        if (validEmail && validPassword) {
            unAuthenticatedRequest(
                LOGIN_URL,
                JSON.stringify({
                    email,
                    password
                }),
                'POST'
            ).then((response) => response.json()).then(async (json) => {
                if (json.error !== undefined) {
                    showMessage({
                        message: "Email or Password Incorrect",
                        type: "danger",
                    })
                } else {
                    await AsyncStorage.setItem(
                        'token',
                        json.access_token
                    )
                    navigation.push('Groups')
                }
            }).catch((err) => {
                showMessage({
                    message: "Something went wrong, please check your internet connection",
                    type: "danger",
                })
            })
        }
    }

    let validateEmail = () => {
        validEmailRegex.lastIndex= 0

        if (validEmailRegex.test(email.toString())) {
            setEmailStyle(validStyle)
            return true;
        }

        setEmailStyle({...validStyle, ...inValidStyle})
        return false
    }

    let validatePassword = () => {
        if (password) {
            setPasswordStyle(validStyle)
            return true
        }

        setPasswordStyle({...validStyle, ...inValidStyle})
        return false
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source = {require("../assets/OpenImpactLogo.png")}/>

            <View style={emailStyle}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#6c757d"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={passwordStyle}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#6c757d"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button} onPress={() => Linking.openURL(appUrl + '/password/reset').catch(() => Alert.alert('Could not reach the website\nPlease check your internet connectivity and try again'))}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress = {() => login({ navigation })}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <FlashMessage position="top" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
        alignItems: 'center',
        justifyContent: 'center',
    },

    invalidInput: {
        borderColor: 'red',
        borderWidth: 1,
    },

    image :{
        marginBottom: 40,
        height: 60,
        resizeMode: 'contain'
    },

    TextInput: {
        height: 50,
        width: "100%",
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    loginText: {
        color: '#fff'
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: '#3A48C1'
    },

    loginBtn:
        {
            width:"80%",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:40,
            backgroundColor:"#3A48C1",
            textDecorationColor: "#fff"
        }
});