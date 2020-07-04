jacd database
sudo docker build -t sfcs/database:v1.production . -f Dockerfile.production

cd ../server-api
sudo docker build -t sfcs/server-api:v1.production . -f Dockerfile.production

cd ../client-web
sudo docker build -t sfcs/client-web:v1.production . -f Dockerfile.production

cd ..
sudo docker-compose -f docker-compose.production.yml down
sudo docker-compose -f docker-compose.production.yml up