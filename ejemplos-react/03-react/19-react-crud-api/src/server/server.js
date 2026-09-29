require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const notes = require("./notes")
const port = process.env.PORT || 3001
const origin = process.env.ORIGIN || `http://localhost:${exports.port}`


const app = express()

app.use(express.static("public"))
app.use(cors())


app.get("/", (req, res) => {
  const apiDoc = `
  <pre>
  Check the README.md for the api documentation

 </pre>
  `

  res.send(apiDoc)
})


app.get("/notes", (req, res) => {
    notes.getAll(req.token)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error)
              res.status(500).send({
                 error: "There was an error."
          })
        }
      )
})

app.post("/notes", bodyParser.json(), (req, res) => {
    notes.add(req.body)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error)
              res.status(500).send({
                 error: "There was an error."
          })
        }
      )
})

app.get("/notes/:id", (req, res) => {
    notes.get(req.params.id)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error)
              res.status(500).send({
                  error: "There was an error."
              })
          }
      )
})

app.delete("/notes/:id", (req, res) => {
    notes.remove(req.params.id)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error)
              res.status(500).send({
                  error: "There was an error."
              })
          }
      )
})

app.post("/notes/:id", bodyParser.json(), (req, res) => {
    const { option } = req.body
    const id = req.params.id
    notes.vote(id, option)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error)
              res.status(500).send({
                  error: "There was an error."
              })
          }
      )
})

app.put("/notes/:id", bodyParser.json(), (req, res) => {
    notes.edit(req.params.id, req.body)
      .then(
        (data) => res.send(data),
          (error) => {
              console.error(error)
              res.status(500).send({
                  error: "There was an error."
              })
          }
      )
})



app.listen(port, () => {
  console.log("Server listening on port %s", port)
})
