FROM golang:alpine as builder

WORKDIR /app 

COPY . .

RUN go build -o main .

FROM alpine

WORKDIR /app

COPY --from=builder /app/main ./

CMD ["./main"]
