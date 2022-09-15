import AsyncStorage from "@react-native-async-storage/async-storage";
import {apiUrl} from "../config/config";

export const unAuthenticatedRequest = (url, body = {}, method = 'GET', token = null) => {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    if (token) {
        headers['Authorization'] = 'Bearer ' + token
    }

    let init = {
        headers,
        method,
    }

    if (method === 'POST') {
        init['body'] = body
    }

    console.log(apiUrl + url)
    return fetch(apiUrl + url, init)
}

export const authenticatedRequest = (url, method = 'GET') => {
    return getToken().then(token => {
        return unAuthenticatedRequest(url, {}, method, token)
    })
}

const getToken = async () => {
    return await AsyncStorage.getItem('token');
}