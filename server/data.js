const axios = require('axios')
const serviceKey = require('./config/key')
const url = require('./config/url')

const data = async() => {
    const url = url.list
    const serviceKey = decodeURIComponent(serviceKey.publicPortalKey)
    try {
        const res = await axios.get(url,
            {
                params:{
                    serviceKey:serviceKey
                }
            })
    } catch (error) {
        console.log(error)
    }
}