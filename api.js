window.onload = () => {
    console.log("로딩되었음")
}
rontend_base.url = 'http://127.0.0.1:8000/'
async function handleSignin() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email, password)

    const response = await fetch('http://127.0.0.1:8000/users/signup/', {
        headers:{
            'content-type':'application/json',
        },
        method:'POST',
        body: JSON.stringify({
            "email":email,
            "password":password
        })
    })

    console.log(response)
}


async function handleLogin() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email, password)

    const response = await fetch('http://127.0.0.1:8000/users/api/token/', {
        headers:{
            'content-type':'application/json',
        },
        method:'POST',
        body: JSON.stringify({
            "email":email,
            "password":password
        })
    })
    const response_json = await response.json()

    console.log(response_json)

    localStorage.setItem("access", response_json.access)
    localStorage.setItem("refresh", response_json.refresh)


    const base64Url = response_json.access.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));


    localStorage.setItem("payload", jsonPayload);
}

function handleLogout(){
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("payload")
    }


function Detail(article_id){
    console.log(article_id)
    const url = `${frontend_base.url}/article_detail.html?id=${article_id}`
    lacation.hef=url

}