cd "$(dirname "$0")"

# Upload database
rm -rf localdb/sfcs
mongodump -d sfcs -o localdb/

# Upload images
rm -rf images
cp -rf /web/sfcs/images .

# Upload .env.local of server-api
cp ../server-api/.env.local .

# Upload NGINX config
cp /etc/nginx/sites-enabled/default.conf .
