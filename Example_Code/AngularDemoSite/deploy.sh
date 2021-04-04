#!/bin/bash

docker build .

docker-compose up -d

docker exec -i db sh -c 'mongoimport -u "your_username" -p "your_password" --authenticationDatabase "admin" -c test_collection -d db --jsonArray' < testJSON.json
