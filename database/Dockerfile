FROM mongo

WORKDIR /dump

COPY mongo .

RUN mongod --bind_ip_all --fork --logpath /var/log/mongodb.log && mongorestore -d sfcs sfcs

CMD [ "mongod" ]