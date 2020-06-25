sudo docker build -t sfcs/mongo:v1 ./database
sudo docker build -t sfcs/server-api:v1 ./server-api
sudo docker build -t sfcs/server-payment:v1 ./server-payment
sudo docker build -t sfcs/client-web:v1 ./client-web
sudo docker-compose down
sudo docker-compose up