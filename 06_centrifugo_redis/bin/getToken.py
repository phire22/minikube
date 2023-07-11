import jwt

secret = "secret"
token = jwt.encode({"sub": "42"}, secret)

print(token)
