const express = require('express')

const app = express()

app.get('/projects',(request, response) =>{
    return response.json([
        'projeto 01',
        'projeto 02',
        'projeto 03',
        'projeto 04'
    ])
})

app.post('/projects',(request, response) =>{
    return response.json([
        'projeto 01',
        'projeto 02',
        'projeto 03',
        'projeto 04'
    ])
})

app.pu('/projects/:id',(request, response) =>{
    return response.json([
        'projeto 04',
        'projeto 02',
        'projeto 03',
    ])
})

app.delete('/projects/:id',(request, response) =>{
    return response.json([
        'projeto 01',
        'projeto 02',
        'projeto 03',
    ])
})

app.listen(3333)