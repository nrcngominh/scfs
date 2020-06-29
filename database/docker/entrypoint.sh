# Restore images
mkdir -p /data/images
cp -rf images/* /data/images/

# Restore mongo database
mongod --fork --logpath /var/log/mongodb.log
mongorestore mongo-dump

# Keep mongod alive
mongod --shutdown
docker-entrypoint.sh mongod