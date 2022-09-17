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
// para usar o typescript o nodejs não entende, então deve no package.json criar um na sessão scripts a linha "build": "typescript" ou "build": "tsc"
// Quando foi instalado o typescript, foi usado o "npm i typescript -D" para criar apenas a sessão de dependência de desenvolvimento
