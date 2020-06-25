FROM mongo

WORKDIR /dump

COPY mongo .

CMD mongod --fork --logpath /var/log/mongodb.log; \
    mongorestore; \
    mongod --shutdown; \
    docker-entrypoint.sh mongod