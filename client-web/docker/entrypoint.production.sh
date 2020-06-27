# Restore images
mkdir -p /data/images
cp -rf images/* /data/images/

nginx -g daemon off