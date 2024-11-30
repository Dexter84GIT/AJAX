const getButton = document.querySelector('.get')

let getText = document.querySelector('.get-result')
let sendText = document.querySelector('.send-result')

const getData = () => {
    fetch('db.json')
    .then((response) => {
        return response.json()})  
    .then((data) => {
        getText.textContent = 'Получено!'
        sendData(data)
    })
    .catch(() => {
        getText.textContent = 'Не получено :('
    })
}
const sendData = (data) => {
    const newData = JSON.stringify(data)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: newData,
        headers: { 
            'Content-type': 'multipart/form-data',
          }
    })
    .then(() => {
        sendText.textContent = 'Отправлено!'
    })
    .catch(() => {
        sendText.textContent = 'Не отправлено :('
    })
}

getButton.addEventListener('click', () => {
    getData()
})
