import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';

type HomeProps = {
    user: any;
};

export default function Home({ user }: HomeProps) {
    const [todadylesson, setTodayLesson] = useState<Lesson | null>(null);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
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
                }
            } catch (error) {
                console.error('Error fetching today lesson status:', error);
            }
        }
        fetchlesson();
    }, []);
    async function handleFinishLesson() {
        if (!todadylesson) {
            handleShowMessage('No lesson to finish today.');

            return;
        }
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/studySession`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        lessonId: todadylesson.id,
                    }),
                }
            );

            if (res.ok) {
                handleShowMessage('Job created successfully');
                setTodayLesson('');
            }
        } catch (error) {
            console.error('Error marking lesson as finished:', error);
        }
    }
    function handleShowMessage(text: string) {
        setMessage(text);
        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
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
                        <button
                            onClick={handleFinishLesson}
                            className={styles.finishButton}
                        >
                            {todadylesson
                                ? 'Finish Lesson'
                                : 'alrady finished!'}
                        </button>
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
