#!/bin/bash

docker build .
docker-compose up -d

# setting up the db
# - need to find a way to clear the DB 
# insert data into the collections
docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c newstopics -d fakeNewsDB --upsert --jsonArray' < blockData/newsTopicsOutput.json
docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c quizquestions -d fakeNewsDB --upsert --jsonArray' < blockData/quizQuestionsOutput.json
docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c useranswers -d fakeNewsDB --upsert --jsonArray' < blockData/userAnswersOutput.json
