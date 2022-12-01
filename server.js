import { application } from "express";
const express = require('express')

application.prepare().then(() => {
    

    const server = express()

    

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err;
        console.log(`Listening on PORT ${port}`)
    })
})
