# Back-end

## Entidades

### Games
id
title 
bannerUrl

CDN (Content Delivery Network) AWS S3 => url da imagem

### Ads
id
gameId
name
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt

## Casos de uso
- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio


HTTP CODES
200+ Sucesso
300+ Redirecionamento
400+ erros por código da api
500+ erros inesperados

https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

Parametros de rotas
- Query uso do ? para filtros da página
- Route parametros de url mas não nomeados route/ads/5 (identfica o anuncio 5)
- Body várias informações em uma requisição (Password, etc)