import express, { request, response } from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string'

const app = express()
app.use(express.json())
app.use(cors())
const prisma = new PrismaClient( {log: ['query']} )

app.get('/games', async (request, response) => {
    const games = await prisma.games.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })
    return response.json(games);
});

app.post('/games/:id/ads', async (request, response) => {
    const gamesId = request.params.id;
    const body = request.body;

    // validação zod typescript
    console.log(body)
    const ads = await prisma.ads.create({
        data: {
            gamesId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    })

    return response.status(201).json(ads);
});


app.get('/games/:id/ads', async (request, response) => {    
    const gamesId = request.params.id;
    const ads = await prisma.ads.findMany({
        select: {
            id: true,
            name: true,
            gamesId: true,
            yearsPlaying: true,
            discord: false,
            weekDays: true,
            hourStart: true,
            hourEnd: true,
            useVoiceChannel: true,
            createdAt: true,
        },
        where: {
            gamesId
        },
        orderBy: {
            createdAt: 'desc',
        }
    })

    return response.json(ads.map(ads => {
        return {
            ...ads,
            weekDays: ads.weekDays.split(','),
            hourStart: convertMinutesToHourString(ads.hourStart),
            hourEnd: convertMinutesToHourString(ads.hourEnd),
        }
    }))
});

app.get('/ads/:id/discord', async (request, response) => {    
    const adsId = request.params.id;
    const ads = await prisma.ads.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adsId,
        }
    })
    return response.json({ discord: ads.discord })
});

app.listen(3333)


// para usar o typescript o nodejs não entende, então deve no package.json criar um na sessão scripts a linha "build": "typescript" ou "build": "tsc"
// Quando foi instalado o typescript, foi usado o "npm i typescript -D" para criar apenas a sessão de dependência de desenvolvimento
// para executar foi rodado o comando "npx tsc --init" que cria o arquivo de configuração "tsconfig.json"

// após entrar no tsconfig.json e configurar o "moduleResolution": "node", o erro mudou por conta do express não ter suporte nativo ao typescript visível em 
// npmjs.com/package/express ao clicar no simbolo DT ao lado do nome da biblioteca é indicado o pacote que deve ser instalado @types/express "npm i @types/express -D"