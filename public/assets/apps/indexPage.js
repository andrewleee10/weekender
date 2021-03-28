const tileColors = ['is-primary', 'is-link', 'is-info', 'is-success', 'pinkTile', 'is-danger']

axios.get('/api/posts')
  .then(({ data }) => {

    console.log(data)
    let rowCount = 1
    let rowContent = ''
    let postArray = data.rows
    let postCount = 1
    let postLength = postArray.length

    postArray.forEach(elem => {
      let elemDate = elem.dateTime.split('T')

      rowContent += `
          <div class="tile is-parent tileContent">
            <article class="tile is-child box notification ${tileColors[Math.floor(Math.random() * 6)]}">
              <p class="title seeMore" data-post_id=${elem.id}>${elem.title}</p>
              <p class="subtitle ">${elem.User.username}</p>
              <div class="content">
                <p>Location: ${elem.location}</p>
                <p>Date: ${elemDate[0]}</p>
              </div>
            </article>
          </div>
          `
      rowCount++


      if (rowCount > 3 || postCount === postLength) {
        document.getElementById('allPosts').innerHTML += `
            <div class="tile is-ancestor">
              ${rowContent}
            </div>
            `
        rowCount = 1
        rowContent = ''
      }

      postCount++
    })

  })
  .catch(err => console.log(err))

document.addEventListener('click', event => {
  if (event.target.classList.contains('seeMore')) {
    localStorage.setItem('post_id', event.target.dataset.post_id)
    window.location = '/post'
  }

})
