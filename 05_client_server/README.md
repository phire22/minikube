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
client_url=$(minikube service example-client --url)

curl $client_url
```
