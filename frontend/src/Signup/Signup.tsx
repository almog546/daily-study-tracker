import { useState } from 'react';
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

type SignupProps = {
    user: any;
};

const signupSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

export default function Signup({ user }: SignupProps) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    async function handleSignup(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            await signupSchema.validate(
                { name, email, password, confirmPassword },
                { abortEarly: false }
            );

            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/signup`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password }),
                    credentials: 'include',
                }
            );
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Signup failed');
            }
            navigate('/login');
        } catch (err) {
            if (err.name === 'ValidationError') {
                setError(err.errors.join(' '));
            } else {
                setError(err.message);
            }
        }
    }

    return (
        <>
            {user ? (
                <Navigate to="/" replace />
            ) : (
                <form className={styles.container}>
                    <h1>Signup</h1>

                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button onClick={handleSignup}>Sign Up</button>
                    {error && <div className={styles.error}>{error}</div>}
                    {success && (
                        <div className={styles.success}>
                            Signup successful! Please login.
                        </div>
                    )}
                    <Link to="/login" className={styles.loginLink}>
                        Already have an account? Login
                    </Link>
                </form>
            )}
        </>
    );
}
