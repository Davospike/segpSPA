#!/bin/bash

docker-compose up --build -d

username=$(grep "MONGO_USERNAME" .env | cut -d '=' -f2)
password=$(grep "MONGO_PASSWORD" .env | cut -d '=' -f2)

# setting up the db
# insert data into the collections
docker exec -i db sh -c "mongoimport -u "$username" -p "$password" --authenticationDatabase admin -c options -d db --upsert --jsonArray" < blockData/optionsOutput.json
docker exec -i db sh -c "mongoimport -u "$username" -p "$password" --authenticationDatabase admin -c newstopics -d db --upsert --jsonArray" < blockData/newsTopicsOutput.json
docker exec -i db sh -c "mongoimport -u "$username" -p "$password" --authenticationDatabase admin -c quizquestions -d db --upsert --jsonArray" < blockData/quizQuestionsOutput.json