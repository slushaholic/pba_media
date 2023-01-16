import mongoose from 'mongoose'


const connectDB = () => new Promise((resolve, reject) => {
    if (mongoose.connections[0].readyState) {
        console.log('Already Connected')
        resolve("Already Connected")
        return
    }
    mongoose.connect(process.env.MONGODB_URI,{},err => {
        if (err) reject(err) 
        console.log('Connected Successfully')
        resolve("Connected Successfully")
    })
})

export default connectDB