const prisma = require('../prismaClient');
async function createStudySessions(req, res) {
    try {
        const sessions = await prisma.studySession.create({
            data: {
                userId: req.session.userId,
                lessonId: req.body.lessonId,
            },
        });
        res.json({ sessions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = {
    createStudySessions,
};
