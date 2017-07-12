
const parent = document.querySelector('ul.items')

data.forEach((currentItem, index) => {
  const newItem = document.createElement('li')

  // This should be a link
  const title = document.createElement('p')
  title.textContent = currentItem.title

  // Super long ... should truncate
  const description = document.createElement('p')
  description.textContent = currentItem.description

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