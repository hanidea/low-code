require('./index.scss')
console.log('hello hanhan webpack!')

if(process.env.NODE_ENV === 'development'){
    console.log('baseurl is localhost')
}else{
    console.log('baseurl is 51hanhan.com')
}
