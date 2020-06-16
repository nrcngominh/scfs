cd "$(dirname "$0")"

# Restore ENV file
cp .env.local ../server/

# Restore MongoDB database
mongorestore -d sfcs localdb/sfcs

# Create folder for serving images
sudo mkdir -p /web/sfcs
sudo chmod -r $USER:$USER /web/sfcs
ln -sf images /web/sfcs/images
chmod 755 /web/sfcs/images
chmod 644 /web/sfcs/images/*

# Restore NGINX configuration
sudo cp sfcs-nginx.conf /etc/nginx/sites-enabled/default.conf

# Restart NGINX
sudo systemctl restart nginx
