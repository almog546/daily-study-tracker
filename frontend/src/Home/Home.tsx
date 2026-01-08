import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';

type HomeProps = {
    user: any;
};

export default function Home({ user }: HomeProps) {
    return (
        <>
            {user ? (
                <>
                    <h2>Welcome !</h2>
                </>
            ) : (
                <div className={styles.description}>
                    <h1 className={styles.title}>
                        Welcome to the Daily Study Tracker
                    </h1>
                    <p className={styles.subtitle}>
                        Track your study sessions and stay motivated!
                    </p>
                    <Link to="/signup" className={styles.signupLink}>
                        Sign Up
                    </Link>
                </div>
            )}
        </>
    );
}
