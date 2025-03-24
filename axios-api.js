const axios = require('axios')
const PLACEHOLDER_URL_API = 'https://jsonplaceholder.typicode.com/users';
const userID = 1

//GET ALL
axios.get(`${PLACEHOLDER_URL_API}`)
    .then(reponse => {
        console.log(reponse.data)
    })
    .catch(error => {
        console.error('il ya une erreur', error)
    })

//GET ONE
axios.get(`${PLACEHOLDER_URL_API}/${userID}`)
    .then(reponse => {
        console.log(reponse.data)
    })
    .catch(error => {
        console.error('il ya erreur', error)
    })

//POST
axios.post(`${PLACEHOLDER_URL_API}`, {
    name: 'koffi',
    email: 'kofikoffi20@gmail.com',
    username: 'koffi2'
})
    .then(reponse => {
        console.log('nouveau utilisateur ajouter avec succes:',reponse.data)
    })
    .catch(error => {
        console.error('il ya erreur', error)
    })

//PUT 
axios.put(`${PLACEHOLDER_URL_API}/${userID}`, {
    name: 'kadi',
    email: 'kadi@gmail.com',
    username: 'kadi225'

})
    .then(reponse => {
        console.log('mise a jour effectué avec succés:',reponse.data)
    })
    .catch(error => {
        console.error('il ya erreur', error)
    })


//DELETE
axios.delete(`${PLACEHOLDER_URL_API}/${userID}`)
.then(reponse=>{
    console.log('utilisateur supprimer:',reponse.data)
})
.catch(error=>{
    console.error('il ya erreur',error)
})