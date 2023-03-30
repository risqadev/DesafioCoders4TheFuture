# Desafio Coders4TheFuture

## Enunciado

Construa um programa para receber uma chamada de api no formato get em NodeJS com a biblioteca express com as devidas especificações abaixo:

Baseada nesse endpoint você irá consumir
https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true

Sua resposta deverá voltar todos os resultados acima de 2.000.000 de infectados.

Seu endpoint deverá se chamar
http://localhost:[porta_que_será_usada]/api/infectados2m

Seu retorno deverá ser no formato json apenas com o Estado e a quantidade de infectados.

## Implementação

O app foi constrído em Javascript para ser rodado em Node.js v. 16.20, utilizando [Express](https://www.npmjs.com/package/express) e [Node-Fetch](https://www.npmjs.com/package/node-fetch).

## Execução

Para rodar, execute no diretório do projeto:

```
npm start
```
