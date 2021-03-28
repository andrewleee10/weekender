// document.getElementById('login').addEventListener('click', event => {
//   event.preventDefault()
//   axios.post('/api/users/login', {
//     username: document.getElementById('username').value,
//     password: document.getElementById('password').value
//   })
//     .then(({ data: token }) => {
//       if (token) {
//         localStorage.setItem('token', token)
//         window.location = '/'
//       } else {
//         alert('Invalid username or password')
//       }
//     })zz
//     .catch(err => console.error(err))
// })

// document.getElementById('newUser').addEventListener('click', event => {
//   window.location = '/register'
// })

document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/users/register', {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
    phone: document.getElementById('phone').value,
    bio: document.getElementById('bio').value
  })
    .then(() => window.location = '/login.html')
    .catch(err => console.error(err))
})

document.getElementById('cancel').addEventListener('click', event => {
  window.location = '/'
})