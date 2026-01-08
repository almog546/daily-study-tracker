const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.lesson.createMany({
        data: [
            {
                title: 'How habits are formed',
                description:
                    'Habits are created when the brain connects a situation, an action, and a reward into a single loop. Over time, this loop becomes automatic, which is why habits often feel hard to control. For example, boredom can trigger phone use without conscious decision. Changing a habit usually requires changing the cue or the reward, not just stopping the behavior. This explains why willpower alone often fails. Understanding habit loops makes behavior change more realistic and sustainable.',
            },
            {
                title: 'Why sleep matters',
                description:
                    'Sleep is essential for memory, emotional balance, and physical recovery. During sleep, the brain organizes information learned during the day and removes waste that builds up while awake. Poor sleep reduces focus, reaction time, and decision-making ability. Long-term sleep deprivation increases the risk of serious health problems. Improving sleep often starts with small changes like consistent timing and reduced screen exposure.',
            },
            {
                title: 'How dogs communicate',
                description:
                    'Dogs communicate primarily through body language rather than sounds. Tail position, ear movement, posture, and facial expressions all convey information. A wagging tail does not always mean happiness, and barking can signal many emotions. Misunderstanding these signals can lead to conflict or fear. Learning dog communication improves trust and safety. It also highlights how much communication happens without words.',
            },
            {
                title: 'Why humans need social connection',
                description:
                    'Humans are naturally social beings, and connection plays a key role in mental health. Positive relationships reduce stress and provide emotional support during difficult times. Even brief interactions can improve mood and motivation. Prolonged isolation often leads to anxiety and depression. Social connection is not a luxury, but a basic psychological need. Investing in relationships supports long-term well-being.',
            },
            {
                title: 'How memory really works',
                description:
                    'Memory is not a perfect recording of past events. Each time a memory is recalled, it is reconstructed and slightly changed. Emotions, expectations, and later experiences influence what is remembered. This explains why memories can feel real but still be inaccurate. Understanding memory helps explain misunderstandings and false recollections. Learning improves when repetition and context are used intentionally.',
            },

            {
                title: 'Why animals adapt to their environment',
                description:
                    'Animals develop adaptations that help them survive in specific environments. These adaptations may be physical, such as thick fur, or behavioral, such as migration. Over many generations, traits that improve survival become more common. This process explains the diversity of life on Earth. Studying adaptation helps us understand ecosystems and evolution. Every species reflects its environment.',
            },
            {
                title: 'The role of mistakes in learning',
                description:
                    'Mistakes provide valuable feedback about what does not work. When learners analyze errors, they develop deeper understanding. Avoiding mistakes often limits growth and experimentation. Many experts credit failure as a key teacher. Viewing mistakes as information rather than failure changes learning outcomes. Progress depends on willingness to be wrong.',
            },
            {
                title: 'Why walking helps thinking',
                description:
                    'Walking increases blood flow and oxygen to the brain. This gentle movement often reduces mental tension and improves clarity. Many people experience better ideas while walking than while sitting. Walking also removes distractions and allows thoughts to develop naturally. The link between movement and thinking has been observed for centuries. Simple actions can improve cognitive performance.',
            },
            {
                title: 'The difference between knowledge and understanding',
                description:
                    'Knowledge involves remembering facts, while understanding involves connecting ideas. Someone can memorize information without being able to apply it. Understanding allows explanation, adaptation, and problem-solving. It develops through practice and reflection. True learning focuses on understanding rather than memorization. Depth matters more than quantity.',
            },
            {
                title: 'Why boredom can be useful',
                description:
                    'Boredom creates space for reflection and imagination. When stimulation is reduced, the mind begins to wander. This wandering often leads to creativity and insight. Constant entertainment prevents this process. Allowing boredom supports deeper thinking. Not every moment needs stimulation.',
            },

            {
                title: 'How environments shape behavior',
                description:
                    'Human behavior is strongly influenced by surroundings. Small environmental changes can make good habits easier and bad habits harder. For example, visible healthy food increases better choices. Environment design often works better than motivation alone. Adjusting surroundings supports consistent behavior change. Context shapes action.',
            },
            {
                title: 'Why repetition improves learning',
                description:
                    'Repetition strengthens neural connections in the brain. Each repetition improves recall and speed. Without repetition, information fades quickly. Effective learning combines repetition with understanding. Short, repeated practice works better than long, rare sessions. Consistency builds mastery.',
            },
            {
                title: 'Why humans tell stories',
                description:
                    'Stories help humans organize information and share meaning. They make complex ideas easier to understand and remember. Stories also carry emotion, which strengthens memory. Every culture uses storytelling to teach lessons. Narrative is a powerful learning tool. Meaning sticks better than facts alone.',
            },
            {
                title: 'The importance of reflection',
                description:
                    'Reflection turns experience into learning. It helps identify patterns and lessons. Without reflection, mistakes repeat. Even short reflection improves awareness. Growth depends on reviewing actions and outcomes. Learning continues after action.',
            },
            {
                title: 'Why patience is difficult',
                description:
                    'Modern life encourages speed and instant results. This makes patience harder to practice. Many valuable outcomes take time to develop. Impatience often leads to poor decisions. Learning patience improves long-term results. Waiting is a skill.',
            },

            {
                title: 'How motivation actually works',
                description:
                    'Motivation often follows action rather than preceding it. Waiting to feel motivated usually leads to inaction. Small actions create momentum. Momentum builds motivation naturally. This explains why starting small works. Progress creates energy.',
            },
            {
                title: 'Why focus matters',
                description:
                    'Focus allows deeper processing of information. Constant interruptions reduce learning quality. Focused time improves understanding and retention. Focus is a trainable skill. Creating boundaries supports concentration. Attention shapes results.',
            },
            {
                title: 'Why routines reduce stress',
                description:
                    'Routines reduce decision fatigue. Predictability saves mental energy. This leads to calmer thinking. Routines provide structure during uncertainty. Simple routines improve daily stability. Structure supports clarity.',
            },
            {
                title: 'How animals learn',
                description:
                    'Animals learn through observation, repetition, and feedback. Many species show problem-solving ability. Learning helps survival and adaptation. This challenges the idea that learning is uniquely human. Intelligence appears in many forms. Learning is fundamental to life.',
            },
            {
                title: 'Why curiosity drives growth',
                description:
                    'Curiosity motivates exploration and learning. Curious people ask questions and seek understanding. This leads to deeper knowledge. Curiosity supports creativity and adaptability. Growth depends on interest. Questions fuel progress.',
            },

            {
                title: 'How stress affects decision-making',
                description:
                    'Stress narrows attention and limits thinking. Under stress, people rely on habits rather than reasoning. Chronic stress reduces judgment quality. Managing stress improves decisions. Calm thinking supports better outcomes. Emotional state shapes choices.',
            },
            {
                title: 'Why consistency beats intensity',
                description:
                    'Short intense effort fades quickly. Consistent effort compounds over time. Small daily actions create large change. Consistency builds reliability. Sustainable progress depends on regularity. Showing up matters more than pushing hard.',
            },
            {
                title: 'How learning changes the brain',
                description:
                    'Learning physically changes brain structure. Neural connections strengthen with use. Unused connections weaken. This process is called neuroplasticity. Learning is lifelong. The brain adapts continuously.',
            },
            {
                title: 'Why humans seek meaning',
                description:
                    'Humans look for meaning beyond survival. Meaning provides direction and motivation. Without meaning, effort feels empty. Meaning differs between individuals. Purpose supports resilience. Meaning drives persistence.',
            },
            {
                title: 'How animals cooperate',
                description:
                    'Many animals cooperate to survive. Cooperation increases efficiency and safety. Examples include hunting and protection. Cooperation appears across species. This challenges the idea of pure competition. Collaboration supports survival.',
            },

            {
                title: 'Why attention is limited',
                description:
                    'The brain can focus on only a few things at once. Multitasking reduces quality and speed. Divided attention increases errors. Managing attention improves performance. Focus requires boundaries. Attention is a resource.',
            },
            {
                title: 'How habits shape identity',
                description:
                    'Habits influence how people see themselves. Repeated actions form self-image. Identity follows behavior. Changing habits changes identity. Small actions redefine self-perception. Behavior builds identity.',
            },
            {
                title: 'Why rest improves productivity',
                description:
                    'Rest allows recovery and clarity. Overwork reduces efficiency. Breaks restore focus and energy. Rest improves long-term performance. Productivity requires balance. Recovery supports output.',
            },
            {
                title: 'How curiosity develops in childhood',
                description:
                    'Children are naturally curious. Exploration drives learning. Curiosity declines when discouraged. Supportive environments maintain curiosity. Curiosity fuels lifelong learning. Encouragement matters.',
            },
            {
                title: 'Why habits feel automatic',
                description:
                    'Habits move actions to the subconscious. This saves mental energy. Automatic behavior frees attention. However, it also reduces awareness. Mindfulness interrupts habits. Awareness enables change.',
            },
        ],
        skipDuplicates: true,
    });
}

main()
    .then(() => console.log('✅ 50 deep lessons seeded successfully'))
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });
