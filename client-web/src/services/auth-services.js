import router from '../router'

import axios from 'axios'

const redirectIfAuthFailed = async () => {
    const accessToken = axios.defaults.headers['x-access-token']
    try {
        await axios.post('/api/auth', {
            accessToken: accessToken
        })
    } catch (error) {
        router.push('/login')
        console.log(error)
    }
}

const redirectIfAuthSuccess = async () => {
    const accessToken = axios.defaults.headers['x-access-token']
    try {
        await axios.post('/api/auth', {
            accessToken: accessToken
        })
        router.push('/')
    } catch (error) {
        console.log(error)
    }
}


export {
    redirectIfAuthFailed,
    redirectIfAuthSuccess
}