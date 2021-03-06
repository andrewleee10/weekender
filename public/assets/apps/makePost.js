const closeModal = () => {
  document.getElementById('eventTitle').value = ''
  document.getElementById('eventDescription').value = ''
  document.getElementById('eventLocation').value = ''
  document.getElementById('eventDate').value = ''
  document.getElementById('modal').classList.remove('is-active')
  document.documentElement.classList.remove('is-clipped')
}

document.getElementById('modalBtn').addEventListener('click', event => {
  document.getElementById('modal').classList.add('is-active')
  document.documentElement.classList.add('is-clipped')
})

document.getElementById('modalClose').addEventListener('click', event => {
  closeModal()
})

document.getElementById('cancelPostBtn').addEventListener('click', event => {
  closeModal()
})



document.getElementById('makePostBtn').addEventListener('click', event => {
  event.preventDefault()

  let newPost = {
    title: document.getElementById('eventTitle').value,
    description: document.getElementById('eventDescription').value,
    location: document.getElementById('eventLocation').value,
    dateTime: document.getElementById('eventDate').value

  }

  axios.post('api/posts', newPost, {
    headers: {
      'Authorization': `Bearer ${ localStorage.getItem('token')}` }
    })
    .then(res => {
      console.log(res)
      window.location = '/explore'
    })
    .catch(err => console.log(err))

  closeModal()
})