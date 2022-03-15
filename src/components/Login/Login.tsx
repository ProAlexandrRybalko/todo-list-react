import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../../assets/api/FetchLoginUser";
import setTokenType from "./LoginType";


const Login = ({ setToken }: setTokenType) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await getToken(email, password);
            if(response.status === 201) {
                sessionStorage.setItem('token', JSON.stringify(response.data));
                setToken(response.data);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
      }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                <input type={'submit'}/>
            </form>
            <Link to="/register">Register</Link>
        </div>
    )
}

export default Login;