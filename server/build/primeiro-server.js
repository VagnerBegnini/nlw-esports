import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' },
    ]);
});
app.listen(3333);


// Arquivo criado junto com a pasta build, após configurar o tsconfig.json "rootDir": "./src",  e "outDir": "./build",

// instalar "npm i ts-node-dev -D" para não ter que ficar parando o node toda hora
// no package.json em script adicionar "dev": "tsnd scr/server.ts" ou "dev": "ts-node-dev scr/server.ts"
// no prompt executar "npm run dev"