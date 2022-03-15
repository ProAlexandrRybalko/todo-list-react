import axios from "axios";

export const setRegister = (fullName: string, email: string, password: string) => axios.post<string>("http://localhost:8000/register", 
    {
        fullName,
        email,
        password
    }
);

