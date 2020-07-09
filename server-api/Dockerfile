FROM node:14

WORKDIR /app

COPY ./app/package.json .
RUN npm install
RUN npm install -g pm2

COPY ./app .
RUN npm run build

CMD ["pm2-runtime", "dist/main.js"]