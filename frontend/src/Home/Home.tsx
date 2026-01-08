import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';

type HomeProps = {
    user: any;
};

export default function Home({ user }: HomeProps) {
    const [todadylesson, setTodayLesson] = useState<any>(null);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        async function fetchlesson() {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/lesson`,
                    {
                        method: 'GET',
                        credentials: 'include',
                    }
                );
                if (res.ok) {
                    const data = await res.json();

                    setTodayLesson(data.lesson);
                    setIsDisabled(data.completed);
                }
            } catch (error) {
                console.error('Error fetching today lesson status:', error);
            }
        }
        fetchlesson();
    }, []);

    function handleShowMessage(text: string) {
        setMessage(text);
        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    }
    async function updateStudySession() {
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/studySession`,
                {
                    method: 'PUT',
                    credentials: 'include',
                }
            );
            if (res.ok) {
                handleShowMessage('Lesson finished successfully');
                setIsDisabled(true);
            }
        } catch (error) {
            console.error('Error marking lesson as finished:', error);
        }
    }
    async function logout() {
        async function performLogout() {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/auth/logout`,
                    {
                        method: 'POST',
                        credentials: 'include',
                    }
                );
                if (res.ok) {
                    window.location.href = '/login';
                }
            } catch (error) {
                console.error('Error during logout:', error);
            }
        }
        performLogout();
    }

    return (
        <>
            {user ? (
                <>
                    {showMessage && (
                        <div className={styles.overlay}>
                            <div className={styles.messageBox}>{message}</div>
                        </div>
                    )}
                    <div className={styles.lessonContainer}>
                        <span className={styles.lessonTag}>Today's Lesson</span>
                        <h1>{todadylesson?.title}</h1>
                        <p>{todadylesson?.description}</p>
                        <div className={styles.buttonContainer}>
                            <button
                                className={styles.finishButton}
                                onClick={updateStudySession}
                                disabled={isDisabled}
                            >
                                {isDisabled
                                    ? 'Lesson Completed'
                                    : 'Mark as Finished'}
                            </button>
                            <button
                                className={styles.logoutButton}
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
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
