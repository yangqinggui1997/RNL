import axios from "axios"

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:
    {
        Authorization: 'Bearer R383uaIo6UyIMesdipaYa5h9LSdSTX4t4Sm274N5omG741Y9HWjgp_FTewJD5yirRPLnx6XoMDbBBYj5Zjn2LNh719Zapia9i2wPTt14jLNYRcbPRpIry9RRplOFXnYx'
    }
})