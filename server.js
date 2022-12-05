import { application, Application } from 'express'
const express = require('express')

application.prepare().then(() => {
    

    const server = express()

    server.use(express.json())

    server.post('/api/login', (req, res) => {
        const { email, password} = req.body
        res.json({
            email,
            password,
            success: true
        })
    })

    server.get('/', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err;
        console.log(`Listening on PORT ${port}`)
    })
})
