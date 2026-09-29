const clone = require("clone")
const uuid = require("./uuid")

let db = {}

let defaultData = [
   {
    id: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1467166872634,
    body: "Everyone says so after all."
  },
  {
    id: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1468479767190,
    body: "Just kidding. It takes more than 10 minutes to learn technology."
  }
]


function get (id) {
  return new Promise((res) => {
    res(
        defaultData.filter(data => data.id === id)
    )
  })
}

function getAll () {
  return new Promise((res) => {
    res(defaultData)
  })
}

function add (body) {
  return new Promise((res) => {

    let note = {
      id: uuid(),
      timestamp: Date.now(),
      body
    }

    defaultData.push(note)
    res(note.id)
  })
}

function remove (id) {
    return new Promise((res) => {
      defaultData = defaultData.filter(data => data.id !== id)
      res(id)
    })
}

function edit (id, body) {
    return new Promise((res) => {
      let i;
        for (i = 0; i< defaultData.length; i++) {
          if (defaultData[i].id === id) {
            defaultData[i].body = body;
            break;
          }
        }
        res(defaultData[i])
    })
}

module.exports = {
  get,
  getAll,
  add,
  remove,
  edit
}
