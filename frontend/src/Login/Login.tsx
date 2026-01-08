import { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
type LoginProps = {
    user: any;
};

export default function Login({ user }: LoginProps) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/login`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                    credentials: 'include',
                }
            );
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <>
            {user ? (
                <Navigate to="/" replace />
            ) : (
                <form className={styles.container}>
                    <h1>Login</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Log In</button>
                    {error && <div className={styles.error}>{error}</div>}
                </form>
            )}
        </>
    );
}
