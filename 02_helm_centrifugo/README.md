## Install
```
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
