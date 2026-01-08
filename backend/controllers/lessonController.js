const prisma = require('../prismaClient');
async function getLessons(req, res) {
    try {
        const lesson = await prisma.lesson.findFirst({
            where: {
                sessions: {
                    none: {
                        userId: req.session.userId,
                    },
                },
            },
        });

        res.json({ lesson });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    0;
}

module.exports = {
    getLessons,
};
