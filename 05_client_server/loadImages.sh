#!/bin/bash

docker build -t example-server example-server/.
docker build -t example-client example-client/.

docker save -o example-server.tar example-server
docker save -o example-client.tar example-client

eval $(minikube -p minikube docker-env)

docker load -i example-server.tar
docker load -i example-client.tar

