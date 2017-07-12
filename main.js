
const parent = document.querySelector('ul.items')
const maximumDescriptionLength = 140

data.forEach((currentItem, index) => {
  const newItem = document.createElement('li')

  // This should be a link
  // <p>
  //   <a href="......">words</a>
  // </p>
  const title = document.createElement('p')
  
  const link = document.createElement('a')
  link.href = currentItem.url
  link.textContent = currentItem.title
  title.append(link)

  // Super long ... should truncate
  const description = document.createElement('p')
  if (currentItem.description.length > maximumDescriptionLength) {
    description.textContent = currentItem.description.slice(0, maximumDescriptionLength) + '...'
  } else {
    description.textContent = currentItem.description
  }

  // some things are in GBP, not USD
  const price = document.createElement('p')
  const symbol = (currentItem.currency_code === 'USD') ? "$" : "£"
  price.textContent = `${symbol}${currentItem.price}`

  // 1 time versus 2 times
  const views = document.createElement('p')
  const text = (currentItem.views === 1) ? 'time' : 'times'
  views.textContent = `Viewed ${currentItem.views} ${text}`

  newItem.appendChild(title)
  newItem.appendChild(description)
  newItem.appendChild(price)
  newItem.appendChild(views)

  parent.appendChild(newItem)
})






//