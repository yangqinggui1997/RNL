import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://c4264dbe6773.ngrok.io'
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)
export default instance