import express from 'express'
import 'dotenv/config'
import sequelize from './config/config.js'
import cors from 'cors'

const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())
try{
   await sequelize.authenticate()
   console.log('Connection established')
}catch(error){
    console.log('Unable to connect to database')
}

app.listen(port,()=> {
    console.log(`Listening on port ${port}`)
})