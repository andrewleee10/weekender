
let postID = localStorage.getItem('post_id')

const timeConvert = (justTime) => {
  /////////////////////////////  code taken from https://stackoverflow.com/questions/29206453/best-way-to-convert-military-time-to-standard-time-in-javascript/29206663 

  let time = justTime // your input

  time = time.split(':') // convert to array

  // fetch
  let hours = Number(time[0])
  let minutes = Number(time[1])

  // calculate
  let timeValue

  if (hours > 0 && hours <= 12) {
    timeValue = "" + hours
  } else if (hours > 12) {
    timeValue = "" + (hours - 12);
  } else if (hours === 0) {
    timeValue = "12"
  }

  timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes  // get minutes
  timeValue += (hours >= 12) ? " P.M." : " A.M."  // get AM/PM

  return timeValue
  /////////////////////////////
}

axios.get(`/api/posts/${postID}`)
  .then(({ data: posts }) => {

    let postDT = posts.dateTime.split('T')
    let timeValue = timeConvert(postDT[1])


    document.getElementById('title').innerHTML = `
          <h1 class="title is-1">${posts.title}</h1>
          <h2 class="subtitle is-3">
            <strong>Hosted by: ${posts.User.username}</strong>
          </h2>
        `
    document.getElementById('description').innerHTML = `
          <h1 class="is-size-4 has-text-weight-semibold">Description:</h1>
            <p>${posts.description}</p>
          <br>
        `
    document.getElementById('details').innerHTML = `
          <div class="content">
            <p class="has-text-weight-medium">Date:</p>
            <p>
              ${postDT[0]}
              <br>
              ${timeValue}
            </p>
            <p class="has-text-weight-medium">Location:</p>
            <p>
              ${posts.location}<br>
            </p>
          </div>
        `
  })
  .catch(err => console.log(err))

axios.get(`/api/comments/${postID}`)
  .then(({ data }) => {

    data.forEach(elem => {
      let commentDT = elem.time_posted.split('T')
      let timeValue = timeConvert(commentDT[1])

      document.getElementById('commentList').innerHTML += `
          <li>
              <strong class="username"> ${elem.User.username} </strong>
              <p> ${elem.text}</p>
              <small class="has-text-weight-light"> ${timeValue} ${commentDT[0]}</small>
              <hr>
            </li>`
    })
  })
  .catch(err => console.log(err))



axios.get(`/api/isGoings/${postID}`)
  .then(({ data }) => {
    let attendees = ''

    data.forEach(elem => {
      attendees += `${elem.User.username}, `
    })
    document.getElementById('attending').innerHTML = `
        <h1 class="is-size-5 has-text-weight-semibold">Attendees:</h1>
        <p>${attendees}</p>
        `
  })
  .catch(err => console.log(err))

if (localStorage.getItem('token')) {
  axios.get(`/api/isGoings/already/${postID}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(user => {
      if (user.data === null) {
        document.getElementById('attendBtn').innerHTML = `
            <button class="button is-medium is-fullwidth signBtn" id="goingBtn">Going</button>`

        document.getElementById('goingBtn').addEventListener('click', event => {
          let newGoing = {
            check_going: true,
            post_id: parseInt(postID)
          }
          axios.post('/api/isGoings', newGoing, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
            .then(window.location = '/post')
            .catch(err => console.log(err))
        })
      } else {
        document.getElementById('attendBtn').innerHTML = `
            <button class="button is-medium is-fullwidth is-success" id="goingBtn" disabled>Attending</button>`
      }
    })
    .catch(err => console.log(err))



  document.getElementById('makeComment').addEventListener('click', () => {
    let newComment = {
      text: document.getElementById('commentContent').value,
      post_id: postID
    }

    axios.post('/api/comments', newComment, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(({ data }) => {
        console.log(data)
        document.getElementById('commentContent').value = ''
        window.location = '/post'
      })
      .catch(err => console.log(err))
  })
} else {
  document.getElementById('commentSection').innerHTML = ''
  document.getElementById('attendBtn').innerHTML = `
            <button class="button is-medium is-fullwidth signBtn" id="goingBtn">Log in to Attend Event</button>`
  document.getElementById('goingBtn').addEventListener('click', event => {
    window.location = '/login'
  })
}
