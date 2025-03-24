const PLACEHOLDER_URL_API = 'https://jsonplaceholder.typicode.com/users/';
const userID =1;

//GET ONE
fetch(`${PLACEHOLDER_URL_API}/${userId}`,{
    method:'GET'
}
)
.then(response=>{
return response.json()
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.error('il ya erreur:',error)
})

//GET ALL

fetch(`${PLACEHOLDER_URL_API}`, {
    method: 'GET'
}
)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('il ya erreur:', error)
    })


//POST
fetch(`${PLACEHOLDER_URL_API}`,{
    method: 'POST',
    body: JSON.stringify({
        name: 'koffi',
        email:'koffikoffi@gmail.com',
        username: 'koffi2025'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(response => {
return response.json()
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.error('il ya erreur:',error)
})

//PUT
fetch(`${PLACEHOLDER_URL_API}/${userID}`, {
    method: 'PUT',
    body: JSON.stringify({
        name: 'benie sylveste',
        email: 'beniesylveste@gmail.com',
        username: 'benie225'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then(response => {
return response.json()
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.error('il ya erreur:',error)
})

//DELETE
fetch(`${PLACEHOLDER_URL_API}/${userId}`, {
    method: 'DELETE'
}
)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('il ya erreur:', error)
    })
