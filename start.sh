docker build -t sfcs/database:v1 .database
docker build -t sfcs/server-api:v1 ./server-api
docker build -t sfcs/server-payment:v1 ./server-payment
docker build -t sfcs/client-web:v1 ./client-web
docker-compose down
docker-compose up