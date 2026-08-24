const loginButton = document.getElementById('login')
const registerButton = document.getElementById('register')
const username = document.getElementById('username')
const password = document.getElementById('password')

function authenticate(username, password){
    const savedUsernames = JSON.parse(localStorage.getItem('usernames')) || []
    const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || []

    for(let i = 0; i < savedUsernames.length; i++){
        if(username === savedUsernames[i] && password === savedPasswords[i]){
            console.log("Logged In")
            window.location.href = 'index.html'
            break
        }
    }
}

function register(username, password){
    const savedUsernames = JSON.parse(localStorage.getItem('usernames')) || []
    const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || []

    savedUsernames.push(username)
    savedPasswords.push(password)

    localStorage.setItem('usernames', JSON.stringify(savedUsernames))
    localStorage.setItem('passwords', JSON.stringify(savedPasswords))
    console.log("Registered")
    alert("Registered")
}

loginButton.addEventListener('click', ()=> {authenticate(username.value, password.value)})
registerButton.addEventListener('click', ()=> {register(username.value, password.value)})

