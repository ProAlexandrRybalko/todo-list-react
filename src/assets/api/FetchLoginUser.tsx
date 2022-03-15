import axios from "axios";

export const getToken = (email: string, password: string) => axios.post<string>("http://localhost:8000/signIn", {
    email,
    password
});
