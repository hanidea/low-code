import mongoose from 'mongoose'
import config from './index'

mongoose.set('strictQuery', true);

mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//连接成功
mongoose.connection.on('connected',()=>{
    console.log('Mongoose connection open to '+ config.DB_URL)
})

//连接异常
mongoose.connection.on('error',(err)=>{
    console.log('Mongoose connection error '+ err)
})

//断开链接
mongoose.connection.on('disconnected',()=>{
    console.log('Mongoose connection disconnected')
})

export default mongoose
