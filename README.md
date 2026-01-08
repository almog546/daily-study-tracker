# Daily Study Tracker

Daily Study Tracker is a simple full-stack app built to help people stay consistent with learning when time is limited.

The app shows one lesson per day and tracks whether the user completed it.  
All progress logic is handled on the backend to keep the data reliable and prevent manipulation.

---

## Preview

| Mark as Finished | Lesson Completed | Phone View |
|------------------|------------------|------------|
| ![](Mark%20As%20Finished.png) | ![](Lesson%20Completed.png) | ![](Phone%20View.png) |

---

## How it works

- Users sign up and log in
- The server checks if the user already studied today
- If not, a new lesson is shown
- Completing a lesson marks the day as done
- A new lesson becomes available the next day

All date and progress logic is handled on the backend.

---

## Tech stack

- React + TypeScript
- Node.js + Express
- PostgreSQL + Prisma
- Session-based authentication (cookies)

---

## Notes

Built as a portfolio project focusing on backend logic, authentication, and time-based data handling.
