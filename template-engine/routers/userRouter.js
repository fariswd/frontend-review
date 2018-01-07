const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    let usersRaw = await axios.get('http://localhost:3001/user/')
    let users = usersRaw.data.users.user
    res.render('home', {users: users})
  } catch (err) {
    res.status(500).send('oops something wrong')
  }
})

router.get('/add', async (req, res) => {
  try {
    res.render('add')
  } catch (err) {
    res.status(500).send('oops something wrong')
  }
})

router.post('/', async (req, res) => {
  try {
    await axios.post('http://localhost:3001/user/', req.body)
    res.redirect('/')
  } catch (err) {
    res.status(500).send('oops something wrong')
  }
})

router.get('/delete/:id', async (req, res) => {
  try {
    await axios.delete('http://localhost:3001/user/' + req.params.id)
    res.redirect('/')
  } catch (err) {
    res.status(500).send('oops something wrong')
  }
})

module.exports = router;
