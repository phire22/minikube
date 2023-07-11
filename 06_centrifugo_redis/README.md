## Start
```
minikube start
```

## Install
```
helm install redis -f redis/values.yaml redis/.

kubectl apply -f k8s/secret-centrifugo.yaml

helm install centrifugo -f centrifugo/values.yaml centrifugo/.
```
### Dry-run
```
helm install centrifugo -f centrifugo/values.yaml centrifugo/. --debug --dry-run > centrifugo/dry-run.yaml

helm install redis -f redis/values.yaml redis/. --debug --dry-run > redis/dry-run.yaml

```

### Check deployment
```
kubectl get configmap centrifugo-config -o jsonpath='{.data}' 
```

### Uninstall
```
helm uninstall centrifugo

helm uninstall redis
```

## Connect
```
npm install centrifuge

kubectl port-forward deployment/centrifugo 8000:8000

node bin/client.js
```

## Publish a message
```
kubectl port-forward deployment/centrifugo 9000:9000

curl --header "Authorization: apikey secret" \
  --request POST \
  --data '{"method": "publish", "params": {"channel": "chat", "data": {}}}' \
  http://localhost:9000/api
```
