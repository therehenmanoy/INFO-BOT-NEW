from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

fake_user_db ={
    "admin":{"password":"admin123"},
}

class LoginRequest(BaseModel):
    username: str
    password: str

@router.post("/login")
async def login(request:LoginRequest):
    user = fake_user_db.get(request.username)
    if not user or user["password"] != request.password:
        raise HTTPException(status_code=401, detail="Invalid Username or Password")
    return {"message":"Login Successful", "username":request.username}