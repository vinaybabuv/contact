import Express from 'express'
import bodyParser from 'body-parser'
import Contact from './models/Contact'

const app = new Express()

app.use(bodyParser.json())

app.post('/contact', (req, res) => {
  const contact = new Contact()
  contact.add(req.body, (err, result) => {
    if (err) {
      return res.status(400).send({message: err.toString()})
    }
    res.send(result)
  })
})

app.get('/contact/list', (req, res) => {
  const contact = new Contact()
  contact.getAll((err, result) => {
    if (err) {
      return res.status(400).send({message: err.toString()})
    }
    res.send(result)
  })
})

app.get('/contact/id/:id', (req, res) => {
  const contact = new Contact()
  contact.getById(req.params.id, (err, result) => {
    if (err) {
      return res.status(400).send({message: err.toString()})
    }
    res.send(result)
  })
})

app.listen(3001, () => {
  // eslint-disable-next-line
  console.log('app is running at http://localhost:3001')
})
