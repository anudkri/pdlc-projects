import os
from fastapi import FastAPI
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="PDLC-11",
    description="Unknown Architecture",
    version="0.1.0"
)

@app.get("/health")
async def health():
    return {"status": "ok", "service": "PDLC-11"}

@app.get("/api/v1/info")
async def info():
    return {
        "name": "PDLC-11",
        "architecture": "Unknown Architecture",
        "version": "0.1.0"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("src.main:app", host="0.0.0.0", port=3000, reload=True)
