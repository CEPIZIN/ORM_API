const express = require('express')
const people = require('./PeopleRouter.js')

module.exports = app =>{
    app.use(
        express.json(),
        people
    )

}