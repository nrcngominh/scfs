sudo docker build -t sfcs/database:v1.dev ./database
sudo docker build -t sfcs/server-api:v1.dev ./server-api
sudo docker build -t sfcs/client-web:v1.dev ./client-web

sudo docker-compose down
sudo docker-compose up