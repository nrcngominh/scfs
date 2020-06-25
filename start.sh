<<<<<<< HEAD
docker build -t sfcs/mongo:v1 ./database
docker build -t sfcs/server-api:v1 ./server-api
docker build -t sfcs/server-payment:v1 ./server-payment
docker build -t sfcs/client-web:v1 ./client-web
docker-compose down
docker-compose up
=======
sudo docker build -t sfcs/mongo:v1 ./database
sudo docker build -t sfcs/server-api:v1 ./server-api
sudo docker build -t sfcs/server-payment:v1 ./server-payment
sudo docker build -t sfcs/client-web:v1 ./client-web
sudo docker-compose down
sudo docker-compose up
>>>>>>> ba3f26eafa9b086d6975382da1a4dfb1c9ace806
