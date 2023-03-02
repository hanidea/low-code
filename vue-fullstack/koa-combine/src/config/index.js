const DB_URL = 'mongodb://root:123456@10.100.220.0:27017/51hanhan-dev'
// const REDIS = {
//     host:'10.100.220.0',
//     port: 6379,
//     password: '123456'
// }
const JWT_SECRET = 'a&*38QthAKuiRwISGLotgq^3%^$zvA3A6Hfr8MF$jM*HY4*dWcwAW&9NGp7*b53!'

const baseUrl = process.env.NODE_ENV === 'production' ? 'http://www.51hanhan.com':'http://localhost:8080'

export default {
    DB_URL,
    // REDIS,
    JWT_SECRET,
    baseUrl
}
