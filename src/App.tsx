import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ToDoList from './components/ToDoList/ToDoList';

const App = () => {

  const tokenFromSession = (JSON.parse(sessionStorage.getItem('token') as string));
  const [token, setToken] = useState<string>(tokenFromSession);
  const signIn = useNavigate();

  useEffect(() => {
    if(!token) {
      signIn('/login');
    }
  }, []);

    return (
      <>
        {
          token ?
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todolist" element={<ToDoList/>}/> 
          </Routes>

          :   null
        }
          <Routes>
            <Route path="/login" element={<Login setToken={setToken}/>}/>
            <Route path="/register" element={<Register setToken={setToken}/>}/>
          </Routes>
      </>

    );
}

export default App;
