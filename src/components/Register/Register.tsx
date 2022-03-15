import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setRegister } from "../../assets/api/FetchCreateRegister";
import setTokenType from "../Login/LoginType";


const Register = ({ setToken }: setTokenType) => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await setRegister(fullName, email, password);
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
            <h1>Register</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="fullname">Email</label>
                <input id="fullname" name="fullname" onChange={(e) => setFullName(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                <input type={'submit'}/>
            </form>
            <Link to="/login">Sign In</Link>
        </div>
    )

}

export default Register;