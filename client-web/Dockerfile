FROM node:14 as build-stage

WORKDIR /app

COPY ./app/package.json .
RUN npm install
RUN npm rebuild node-sass

COPY ./app .

ARG VUE_APP_DOMAIN
ARG VUE_APP_GOOGLE_CLIENT_ID
ARG VUE_APP_GOOGLE_REDIRECT_URI

ENV VUE_APP_DOMAIN=${VUE_APP_DOMAIN}
ENV VUE_APP_GOOGLE_CLIENT_ID=${VUE_APP_GOOGLE_CLIENT_ID}
ENV VUE_APP_GOOGLE_REDIRECT_URI=${VUE_APP_GOOGLE_REDIRECT_URI}

RUN npm run build

FROM nginx:1.19 as production-stage

WORKDIR /app

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./nginx.prod.conf /etc/nginx/conf.d/default.conf
COPY ./docker ./docker
RUN chmod 777 ./docker/entrypoint.production.sh

ENTRYPOINT ./docker/entrypoint.production.sh