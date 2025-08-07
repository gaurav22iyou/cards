
const mongoose = require('mongoose')

const express = require('express')

const app = express()

const PORT = 8080;


const cardModel = require('../backend/CardSchema/CardSchema.js');

const { default: Cards } = require('../frontend/src/cards/Cards.jsx');

const mongooseUri = `mongodb+srv://gauravSomji123:gauravSomji123@cluster0.1svinzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const intializeDataBase = () => {


    try {

        mongoose.connect(mongooseUri)
            .then(() => {
                console.log(" Connected Succesfully");

            })
            .catch((err) => {
                console.log(err + "Error During the Connection")
            })

    } catch (error) {

        console.log(error)
    }

}

intializeDataBase();


app.get('/', (req, res) => {

    res.send("hello from the server")
})


async function findUsers(user) {

    const foundUser = cardModel.findOne({ name: user })

    return foundUser
}



app.get('/getusers', (req, res) => {

    try {
        res.send({ foundUser })

    } catch (error) {

        res.json({ 'error': 'No Users Found' })
    }

})

app.listen(PORT, () => {


    console.log(`Connected On Port ${PORT} sucessfully`)
})