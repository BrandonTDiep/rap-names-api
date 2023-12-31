const express = require('express')
const app =  express()
const PORT = 8000


const rappers = {
    '21 savage':{
        'age': 29,
        'birthName':'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England' 
    },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois' 
    },
    'unknown':{
        'age': 0,
        'birthName':'unknown',
        'birthLocation': 'unknown' 
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
// can do params.name so whenever request comes in,if there is a bit of text after the slash we grab it
app.get('/api/:name', (request, response) => { 
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){ //if rapper name is a property of rappers 
        response.json(rappers[rapperName])
    }
    else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=> {
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})