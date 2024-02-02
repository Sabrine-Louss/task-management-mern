const express = require('express')
const router = express.Router()
const {getTasks,addTask,updateTask,deleteTask}= require('../controllers/taskControllers')
const authMiddleware = require('../middlewares/authMiddleware')


router.post('/newtask',authMiddleware, addTask )
router.get('/gettasks',authMiddleware, getTasks )
router.delete('/deletetask/:id',authMiddleware, deleteTask )
router.put('/updatetask/:id',authMiddleware, updateTask )

module.exports = router