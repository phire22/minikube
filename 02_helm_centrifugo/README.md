## Start
```
minikube start
```

## Install
```
kubectl apply -f k8s/secrets.yaml

helm dependency build

helm install centrifugo -f values.yaml .
```
### Dry-run
```
helm install centrifugo . -f values.yaml --debug --dry-run > dry-run.yaml
```

### Check deployment
```
kubectl get configmap centrifugo-config -o jsonpath='{.data}' 
```

### Uninstall
```
helm uninstall centrifugo
```

## Connect
```
npm install centrifuge

kubectl port-forward deployment/centrifugo 8000:8000

node bin/main.js
```
