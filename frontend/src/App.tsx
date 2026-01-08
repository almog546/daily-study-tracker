import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from './Home/Home';
import { useEffect, useState } from 'react';

function App() {
    const [user, setUser] = useState(null);
    const location = useLocation();

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/auth/me`,
                    {
                        method: 'GET',
                        credentials: 'include',
                    }
                );
                const data = await res.json();
                if (res.ok) {
                    setUser(data);
                } else {
                    setUser(null);
                }
            } catch (error) {
                setUser(null);
            }
        }
        fetchUser();
    }, [location]);
    useEffect(() => {
        async function fetchSession() {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/studySession`,
                    {
                        method: 'POST',
                        credentials: 'include',
                    }
                );
                if (res.ok) {
                    const data = await res.json();
                    console.log('Study session data:', data);
                }
            } catch (error) {
                console.error(
                    'Error creating or fetching study session:',
                    error
                );
            }
        }
        fetchSession();
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/login" element={<Login user={user} />} />
            <Route path="/signup" element={<Signup user={user} />} />
        </Routes>
    );
}

export default App;
