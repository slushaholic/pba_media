const express = require('express')

const server = express()

server.post('/', (req, res) => {
    const { email, password } = req.body
    res.json({
        email,
        password,
        success: true
    })
})