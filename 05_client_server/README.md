# Start
```
minikube start
```

# Load docker images
```
./loadImages
```

# Apply
```
kubectl apply -f k8s/deploy.yaml
```

# Call client
```
minikube service example-client

curl $client_url
```
