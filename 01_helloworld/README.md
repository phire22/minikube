## Build
docker build -t go-rest-server .

## Save
docker save -o go-rest-server.tar go-rest-server

## Copy to minikube
scp -i $(minikube ssh-key) go-rest-server.tar docker@$(minikube ip):

## SSH into minikube
minikube ssh

## Load
docker load -i go-rest-server.tar

## Exit minikube
exit

## Go to k8s
cd k8s

## Apply
kubectl apply -f deploy.yaml

## Show deployment
kubectl get deploy

## Show IP of service
minikube service go-rest-server --url

## Call endpoint
curl <URL>
