const prisma = require('../prismaClient');
async function createStudySessions(req, res) {
    const now = new Date();
    const startOfDay = new Date(
        Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate(),
            0,
            0,
            0,
            0
        )
    );
    const startOfNextDay = new Date(
        Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate() + 1,
            0,
            0,
            0,
            0
        )
    );

    try {
        const checkSession = await prisma.studySession.findFirst({
            where: {
                userId: req.session.userId,
                createdAt: { gte: startOfDay, lt: startOfNextDay },
            },
        });
        if (checkSession) {
            return res
                .status(403)
                .json({ message: 'Study session for today already exists' });
        }
        
        const firstLesson = await prisma.lesson.findFirst({
            where: { sessions: { none: { userId: req.session.userId } } },
        });
        
        if (!firstLesson) {
            return res.status(404).json({ message: 'No more lessons available' });
        }
        
        const newSession = await prisma.studySession.create({
            data: {
                userId: req.session.userId,
                lessonId: firstLesson.id,
                completed: false,
            },
        });
        res.status(201).json({ newSession });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
async function updateStudySession(req, res) {
    const userId = req.session.userId;

    try {
        const checkSession = await prisma.studySession.findFirst({
            where: {
                userId: userId,
            },
        });
        if (!checkSession) {
            return res.status(404).json({ message: 'Session not found' });
        }
        const updateSession = await prisma.studySession.update({
            where: { id: checkSession.id },
            data: { completed: true },
        });
        res.json({ updateSession });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    createStudySessions,
    updateStudySession,
};
