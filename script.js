const form = document.querySelector('.form')
const getButton = document.querySelector('.get')
const sendButton = document.querySelector('.send')

let getText = document.querySelector('.get-result')
let sendText = document.querySelector('.send-result')

const getData = ({ url, data, method }) => {

    return fetch(url, {
        data: data,
        method: method
    }).then(response => response.json())  
}

const sendData = ({ url, data, method }) => {

    return fetch(url, {
        data: data,
        method: method,
        headers: { 
            'Content-type': 'multipart/form-data',
          },
    }).then(response => response.json())  
}
getButton.addEventListener('click', () => {

    const data = new FormData(form)

    getData({
        url: 'db.json',
        data: data,
        method: 'GET'
    })
    .then(() => {
        getText.textContent = 'Получено!'
    })
    .catch(() => {
        getText.textContent = 'Не получено :('
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const data = new FormData(form)

    sendData({
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: data,
        method: 'POST'
    })
    .then(() => {
        sendText.textContent = 'Отправлено!'
    })  
    .catch(() => {
        getText.textContent = 'Не отправлено :('
    })
})