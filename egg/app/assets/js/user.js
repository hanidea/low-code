//alert('user')
function login(){
    fetch("/login",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            name: "admin",
            pwd: "admin"
        })
    })
    .then(res=>{
        location.reload()
    })
}

function logout(){
    fetch("/logout",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
        })
    })
    .then(res=>{
        //location.reload()
    })
}