package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)


const (
	serverHost = "http://example-server"
	serverPort = ":8080"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Send a request to the server
		resp, err := http.Get(serverHost + serverPort + "/")
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer resp.Body.Close()

		// Read the response
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		
		// Add to the response
    		body = []byte("Response from server: " + string(body))
    
		// Return the response
		w.Write(body)
	})
        
	fmt.Printf("Server listening on port 8080\n")
	http.ListenAndServe(":8080", nil)
}
