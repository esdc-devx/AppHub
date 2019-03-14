#!/bin/bash

docker build ./app-hub-gui/ -f ./app-hub-gui/Dockerfile -t app-hub-gui:latest && \
docker run -p 4848:80 -d --rm --name app-hub-gui app-hub-gui:latest 

docker build ./app-hub-api/ -f ./app-hub-api/Dockerfile -t app-hub-api:latest && \
docker run -p 4000:4000 -d --rm --name app-hub-api app-hub-api:latest

