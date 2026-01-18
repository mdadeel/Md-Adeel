export const projects = [
    {
        id: 1,
        name: 'eTuitionBD',
        category: 'Ed-Tech Platform',
        image: '/img/e-tutionhub.png',
        problem: 'An online tuition management platform connecting students with tutors across Bangladesh.',
        constraints: [
            'Multi-role flows (students, tutors, admin)',
            'Authentication and authorization logic',
            'Async UI states and form-heavy workflows'
        ],
        decision: 'Clear separation between UI logic and data handling. API-driven UI instead of hardcoded flows. Predictable state updates for application status.',
        notBuilt: [
            'Tutor–student matching algorithm',
            'Video sessions',
            'Reviews & reputation system'
        ],
        outcome: 'A functional platform handling complex user flows and payment integrations.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Stripe'],
        liveUrl: 'https://e-tuitionhub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/etuitionhub-frontend',
    },
    {
        id: 2,
        name: 'Import-Export Hub',
        category: 'Trade Platform',
        image: '/img/iehub.jpeg',
        problem: 'A product listing and discovery platform for importers and exporters.',
        constraints: [
            'Complex filtering logic',
            'High-variance product data',
            'Preventing UI inconsistency as features scale'
        ],
        decision: 'Learned why naive state management breaks quickly. How poor data modeling leaks into UX. The cost of weak component boundaries.',
        notBuilt: [
            'Advanced analytics dashboard',
            'Multi-language support',
            'Mobile app (React Native)'
        ],
        outcome: 'A searchable, filterable product marketplace handling diverse data structures.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
        liveUrl: 'https://iehub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/iehub-client',
    },
    {
        id: 3,
        name: 'ToyTopia',
        category: 'E-Commerce Concept',
        image: '/img/ToyTopia.png',
        problem: 'A frontend-focused e-commerce experience for local toy sellers.',
        constraints: [
            'Authentication UX',
            'Responsive layout discipline',
            'Component reuse and structure'
        ],
        decision: 'This project exists to practice frontend architecture, not to pretend it’s production-ready. Focused on component reusability and clean UI patterns.',
        notBuilt: [
            'Mock backend',
            'No real order pipeline yet',
            'Seller dashboard enhancements'
        ],
        outcome: 'A polished, responsive frontend interface demonstrating layout mastery.',
        tech: ['React', 'Firebase', 'Tailwind CSS', 'DaisyUI'],
        liveUrl: 'https://toy-topia-ashy.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/ToyTopia',
    },
];
