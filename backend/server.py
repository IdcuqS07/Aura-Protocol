from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Aura Protocol API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to Aura Protocol API"}

@app.get("/api")
def api_root():
    return {"message": "Aura Protocol API", "version": "1.0.0"}

@app.get("/api/health")
def health_check():
    return {"status": "healthy"}

@app.get("/api/wallet/{address}")
def get_wallet_info(address: str):
    return {
        "address": address,
        "balance": "1.2345 ETH",
        "network": "mainnet"
    }

# Vercel serverless handler
handler = app

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)