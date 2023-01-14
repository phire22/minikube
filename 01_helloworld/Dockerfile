# Alpine is a lightweight docker image
FROM golang:alpine

# Create a working directory
RUN mkdir /app
WORKDIR /app

# Copy the source code to the working directory
COPY . .

# Build the server
RUN go build -o main .

# Expose port 8080
EXPOSE 8080

# Run the server
CMD ["./main"]
