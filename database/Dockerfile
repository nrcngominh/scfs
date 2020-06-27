FROM mongo

WORKDIR /raw

COPY . .

RUN chmod 777 ./docker/entrypoint.sh

ENTRYPOINT ./docker/entrypoint.sh