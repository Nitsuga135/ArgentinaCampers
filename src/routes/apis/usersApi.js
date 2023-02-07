const express = require ('express');
const router = express.Router();
const path = require('path')
const usersApi = require ('../../controllers/apis/usersApi')


router.get('/users', usersApi.users)
router.get('/users/:idUser', usersApi.usersById)
router.get('/userName', usersApi.userName)

module.exports = router;