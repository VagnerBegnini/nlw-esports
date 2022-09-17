"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
// para executar foi rodado o comando "npx tsc --init" que cria o arquivo de configuração "tsconfig.json"
// após entrar no tsconfig.json e configurar o "moduleResolution": "node", o erro mudou por conta do express não ter suporte nativo ao typescript visível em 
// npmjs.com/package/express ao clicar no simbolo DT ao lado do nome da biblioteca é indicado o pacote que deve ser instalado @types/express "npm i @types/express -D"
