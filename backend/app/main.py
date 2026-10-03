from fastapi import FastAPI

app = FastAPI(title="OpenGallery API")


@app.get("/")
def root() -> dict:
    return {"message": "Welcome to OpenGallery"}


@app.get("/health")
def health() -> dict:
    return {"status": "healthy"}
