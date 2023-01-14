# Start
```
minikube start
```
# Put image to minikube

## Build and save
```
docker build -t go-rest-server .
docker save -o go-rest-server.tar go-rest-server
```
## Put docker image to minikube
```
scp -i $(minikube ssh-key) go-rest-server.tar docker@$(minikube ip):
minikube ssh
docker load -i go-rest-server.tar
exit
```
# Apply
```
kubectl apply -f k8s/deploy.yaml
kubectl get deploy
```
# Call endpoint
```
service_url=$(minikube service example-service --url)
curl $service_url
```
