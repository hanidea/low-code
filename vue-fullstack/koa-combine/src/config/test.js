import {getHValue, getValue, setValue} from "./RedisConfig";

setValue('imooc','imooc message from redis client')

getValue('imooc').then((res) => {
    console.log('getValue:' + res)
})

setValue('imoocobj',{name:'brain',age:30,email:'brian@qwe.com'})

getHValue('imoocobj').then((res) => {
    console.log('getHValue:' + JSON.stringify(res,null,2))
})
