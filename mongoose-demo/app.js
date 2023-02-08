const mongoose = require('mongoose')

mongoose.connect('mongodb://root:123456@10.100.220.0:27017/51hanhan-dev',
    {useNewUrlParser: true, useUnifiedTopology: true});

const User = mongoose.model('users',{ name: String, age:Number, email:String})

const imooc = new User({
    name: 'imooc-test',
    age: 30,
    email: 'imooc@imooc.com'
})

imooc.save().then(()=> {console.log('save OK!');})
