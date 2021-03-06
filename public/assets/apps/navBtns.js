if (localStorage.getItem('token')) {
  document.getElementById('navbarRight').innerHTML = `<a class="button signBtn" id="signout"><strong>Sign out</strong></a>`

  document.getElementById('navbarLeft').innerHTML = `
    <a class="navbar-item navLeft" id="explore">Explore</a>
    <a class="navbar-item navLeft" id="profile">Profile</a>`

  document.getElementById('signout').addEventListener('click', () => {
    localStorage.removeItem('token')
    window.location = '/'
  })

  document.getElementById('profile').addEventListener('click', () => {
    window.location = '/profile'
  })

} else {
  document.getElementById('navbarRight').innerHTML = `<a class="button signBtn" id="signup"><strong>Sign up</strong></a>
    <a class="button is-white" id="login">Log in</a>`

  document.getElementById('navbarLeft').innerHTML = `
    <a class="navbar-item navLeft" id="explore">Explore</a>`
  
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


