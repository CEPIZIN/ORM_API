const express = require('express')
const people = require('./PeopleRouter.js')
const category = require('./categoryRouter.js')
const course = require('./courseRouter.js')

module.exports = app =>{
    app.use(
        express.json(),
        people,
        category,
        course
    )

}