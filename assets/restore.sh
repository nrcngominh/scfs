cd "$(dirname "$0")"

# Restore MongoDB database
mongo sfcs --eval "db.dropDatabase()"
mongorestore -d sfcs localdb/sfcs

# Restore images
sudo rm -rf /web/sfcs
sudo mkdir -p /web/sfcs
sudo chown -R $USER:$USER /web/sfcs
cp -rf images /web/sfcs/

# Restore ENV file
cp .env.local ../server-api/

# Restore NGINX configuration
sudo cp default.conf /etc/nginx/sites-enabled/

# Restart NGINX
sudo systemctl restart nginx
