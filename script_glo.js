"use strict";
// AJAX  асинхронный JS  
// // fetch('./db.json')
// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method:'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//           }),
//           headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         })

//     .then(response => response.json())
//     .then(data => {
//         console.log(data) // здесь идеальное место для отправки данных в какуюлибо функцию render
//     })
//     .catch(error =>{
//         console.log(error);
//     })


    const form =document.getElementById("form")
    const username=document.getElementById('username')
    const password=document.getElementById('password')

   const sendData =({url, data={}, method ='GET'}) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'multipart/form-data',
        },
      }).then(response =>response.json())
    }
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        // const user ={
        //     login:username.value,
        //     password: password.value
        // }
        // вместо user моем использовать класс конструктов
        const data = new FormData(form)

        sendData({
            url:"https://jsonplaceholder.typicode.com/posts",
            data: data,
            method:'POST'
        })
        .then(data =>{
          console.log(data)
        })
     })

        