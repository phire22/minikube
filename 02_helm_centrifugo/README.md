helm dependency build

helm install centrifugo -f values.yaml .

helm install centrifugo . -f values.yaml --debug --dry-run > dry-run.yaml

kubectl get configmap centrifugo-config -o jsonpath='{.data}' 

helm uninstall centrifugo
