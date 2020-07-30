mkdir -p /data/images
cp -rf /app/images/* /data/images/

nginx -g "daemon off;"