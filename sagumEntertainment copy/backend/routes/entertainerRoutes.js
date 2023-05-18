const express = require('express')
const entertainerSchema = require('../models/entertainerSchema.js')
const router = express.Router()
// const enemySchema = require('../models/entertainerSchema.js')


// friend stuff
router.get('/entertainer', (req, res) => {
  entertainerSchema.find(req.params.id)
  .then(entertainer => {
    console.log("succesfully got entire db!")
    console.log(entertainer)
    res.json(entertainer)
  })
  .catch(err => {
    console.error(err)
  })
})

router.get('/', (req, res) => {
  entertainerSchema.findOne(req.query)
  .then(entertainer => {
    console.log("succesfully got entire db!")
    console.log(entertainer)
    res.json(entertainer)
  })
  .catch(err => {
    console.error(err)
  })
})

//Read/get by id
router.get('/:id', (req, res) => {
  entertainerSchema.findById(req.params.id)
  .then(entertainer => {
    console.log("succesfully got one!")
    console.log(entertainer)
    res.json(entertainer)
  })
  .catch(err => {
    console.error(err)
  })
})

//we will be using the '/add' to do a POST request
router.post('/add', (req, res) => {
entertainerSchema.create(req.body)
.then(entertainer => {
console.log(entertainer)
res.send(entertainer)
})
.catch(err => {
res.json(err)
})
})

// update
router.put('/update/:id', (req, res) => {
entertainerSchema.findByIdAndUpdate(req.params.id, req.body)
  .then(updated => {
    // returns the previously saved model
    res.send(updated)
  })
  .catch(err => {
    res.json(err)
  })
})

router.delete('/delete/:id', (req, res) => {
entertainerSchema.findByIdAndDelete(req.params.id)
.then(deleted => {
  res.send(deleted)
})
.catch(err => {
  res.json(err)
})
})
module.exports = router
