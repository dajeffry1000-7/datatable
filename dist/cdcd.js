const app = document.querySelector("#app")

const column = [
  {
    prop: "id",
  },
  {
    prop: "name",
  },
  {
    prop: "username",
  },
  {
    prop: "email",
  },
]

function createHeader() {
  const $header = document.createElement("div")
  $header.classList.add("header")

  column.forEach((col) => {
    const $col = document.createElement("div")
    $col.classList.add("column")
    $col.innerText = col.prop

    $header.append($col)
  })
  app.append($header)
}
async function createRow() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
  const jsonData = await data.json()
  const $body = document.createElement("div")
  $body.classList.add("$body")
  jsonData.forEach((row) => {
    const div = `<div class="row"><div class="row-width">${row.id}</div><div class="row-width">${row.name}</div><div class="row-width">${row.username}</div><div class="row-width">${row.email}</div></div>`
    $body.insertAdjacentHTML("beforeend", div)
  })
  app.append($body)
}

createHeader()
createRow()
