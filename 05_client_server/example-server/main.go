package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello, World!\n")
	})

	fmt.Printf("Server listening on port 8080\n")
	http.ListenAndServe(":8080", nil)
}
