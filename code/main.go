package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/health", healthHandler)
	http.HandleFunc("/api/v1/info", infoHandler)
	
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	
	log.Printf("🚀 Server running on port %s", port)
	log.Printf("📐 Architecture: Monolithic Web Application")
	
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatalf("Server error: %v", err)
	}
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, `{"status": "ok", "service": "PDLC-17"}`)
}

func infoHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, `{"name": "PDLC-17", "architecture": "Monolithic Web Application", "version": "0.1.0"}`)
}
