#!/bin/bash

#docker-compose build
#docker-compose up -d

docker-compose up --build -d

# setting up the db
# insert data into the collections
docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c options -d db --upsert --jsonArray' < blockData/optionsOutput.json
docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c newstopics -d db --upsert --jsonArray' < blockData/newsTopicsOutput.json
docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c quizquestions -d db --upsert --jsonArray' < blockData/quizQuestionsOutput.json
