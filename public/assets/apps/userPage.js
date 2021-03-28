axios.get('/api/posts/users', {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})
  .then(({ data: users }) => {

    users.forEach(post => {
      document.getElementById('title').innerHTML += `<a data-post_id="${post.id}" class="panel-block ">${post.title}</a>`
    });

  })
  .catch(err => console.log(err))

document.addEventListener('click', event => {
  if (event.target.classList.contains('panel-block')) {
    localStorage.setItem('post_id', event.target.dataset.post_id)
    window.location = '/post'
  }

})

axios.get('/api/users', {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})
  .then(({ data: users }) => {
    document.getElementById('username').textContent = users.username
    document.getElementById('bio').textContent = users.bio
  })
  .catch(err => console.log(err))