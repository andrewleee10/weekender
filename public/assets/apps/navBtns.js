if (localStorage.getItem('token')) {
  document.getElementById('navbarRight').innerHTML = `<a class="button signBtn" id="signout"><strong>Sign out</strong></a>`
  document.getElementById('signout').addEventListener('click', () => {
    localStorage.removeItem('token')
    window.location = '/'
  })
} else {
  document.getElementById('navbarRight').innerHTML = `<a class="button signBtn" id="signup"><strong>Sign up</strong></a>
      <a class="button is-white" id="login">Log in</a>`
  document.getElementById('login').addEventListener('click', () => {
    console.log('ping')
    window.location = '/login'
  })
  document.getElementById('signup').addEventListener('click', () => {
    console.log('ping')
    window.location = '/register'
  })
}

document.getElementById('explore').addEventListener('click', () => {
  window.location = '/*'
})
document.getElementById('profile').addEventListener('click', () => {
  window.location = '/profile'
})

