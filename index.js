const content = document.querySelector('#content')
window.addEventListener('load', () =>{
    getUsers();
})

const connection = mysql.createConnection({
host: 'b1ngrtg38yqpimhfnzng-mysql.services.clever-cloud.com',
user: 'usn7re96znnudq3t',
password: 'LAqM6I3tNG9tVVejXEKv',
database: 'b1ngrtg38yqpimhfnzng'
})

function getUsers(){
    let html=""
    fetch('http://localhost:5000/api/members',{mode:'cors'})
        .then(response => {
            return response.json()
        }).then(data=>{
            console.log(data)
            //display DOM
            data.forEach(element => {
                html+=`<li>${element.first_name} ${element.last_name}</li>`
            })
            content.innerHTML=html
        })
        .catch(error =>{
            console.log(error)
        })
}
