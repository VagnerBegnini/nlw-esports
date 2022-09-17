// ECMAScript Modules (alterando o package.json passar o "type": "module", e usar a extensão mjs e não apenas js)
import express from 'express'

const app = express()




// www.minhaapi.com/ads

app.get('/ads', (request, response) => {    
    console.log('Acessou ADS')
    //return response.send('Acessou ADS!')
    return response.json([
        { id: 1, name: 'Anúncio 1'},
        { id: 2, name: 'Anúncio 2'},
        { id: 3, name: 'Anúncio 3'},
    ])
})


// localhost:3333 
app.listen(3333)

// para testar rotas usar ferramentas
// insomnia.rest
// postman.com
// hoppscotch.io