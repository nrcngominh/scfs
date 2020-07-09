FROM node:14-alpine

WORKDIR /app

COPY ./app/package.json .

RUN npm install

RUN npm rebuild node-sass