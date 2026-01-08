const prisma = require('../prismaClient');
async function getLessons(req, res) {
    try {
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

        const todaySession = await prisma.studySession.findFirst({
            where: {
                userId: req.session.userId,
                createdAt: { gte: startOfDay, lt: startOfNextDay },
            },
            include: { lesson: true },
        });

        if (todaySession) {
            return res.json({
                lesson: todaySession.lesson,
                completed: todaySession.completed,
            });
        }

        const lesson = await prisma.lesson.findFirst({
            where: {
                sessions: {
                    none: {
                        userId: req.session.userId,
                    },
                },
            },
        });

        res.json({ lesson, completed: false });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getLessons,
};
