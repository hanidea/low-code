import path from 'path'

const DB_URL = 'mongodb://root:123456@localhost:27017/51hanhan-dev'
// const REDIS = {
//     host:'10.100.220.0',
//     port: 6379,
//     password: '123456'
// }
const JWT_SECRET = 'a&*38QthAKuiRwISGLotgq^3%^$zvA3A6Hfr8MF$jM*HY4*dWcwAW&9NGp7*b53!'

const baseUrl = process.env.NODE_ENV === 'production' ? 'http://www.51hanhan.com':'http://localhost:8080'

const uploadPath = process.env.NODE_ENV === 'production' ? '/app/public' : path.join(path.resolve(__dirname),'../../public')

const port = 3000
const wsPort = 3001

const AppID = ''
const AppSecret = ''

export default {
    DB_URL,
    // REDIS,
    JWT_SECRET,
    baseUrl,
    uploadPath,
    port,
    wsPort,
    AppID,
    AppSecret
}
