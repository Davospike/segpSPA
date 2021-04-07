#!/bin/bash

docker-compose build
docker-compose up -d

# setting up the db
# insert data into the collections
docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c newstopics -d fakeNewsDB --upsert --jsonArray' < blockData/newsTopicsOutput.json
docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c quizquestions -d fakeNewsDB --upsert --jsonArray' < blockData/quizQuestionsOutput.json
