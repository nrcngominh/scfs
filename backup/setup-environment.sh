cd "$(dirname "$0")"

# Restore ENV file
cp .env.local ../server-api/

# Restore MongoDB database
mongorestore -d sfcs localdb/sfcs

# Create folder for serving images
sudo mkdir -p /web/sfcs
sudo chown -R $USER:$USER /web/sfcs
ln -sf $(pwd)/images /web/sfcs/images

# Restore NGINX configuration
sudo cp sfcs-nginx.conf /etc/nginx/sites-enabled/default.conf

# Restart NGINX
sudo systemctl restart nginx
