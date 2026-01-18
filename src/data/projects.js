export const projects = [
    {
        id: 1,
        name: 'eTuitionBD',
        category: 'Ed-Tech Platform',
        image: '/img/e-tutionhub.png',
        problem: 'eTuitionBD is a comprehensive online tuition management platform effectively connecting students with qualified tutors in Bangladesh.',
        constraints: [
            'Implementing role-based access control (RBAC) for diverse user types',
            'Integrating secure Stripe payment gateways for tuition transactions',
            'Managing real-time application status updates between tutors and students'
        ],
        decision: 'Utilized React 19 & Node.js/Express with MongoDB to create a scalable full-stack ecosystem, securing authentication via Firebase and JWT.',
        notBuilt: [
            'Advanced matching algorithm for tutor-student pairing',
            'Video calling integration for online sessions',
            'Rating and review system (roadmap)'
        ],
        outcome: 'Streamlined the tuition finding process with automated workflows, digitizing an otherwise fragmented market.',
        tech: ['React 19', 'Node.js', 'MongoDB', 'Firebase', 'Stripe', 'DaisyUI'],
        liveUrl: 'https://e-tuitionhub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/etuitionhub-frontend',
    },
    {
        id: 2,
        name: 'Import-Export Hub',
        category: 'Global Trade Platform',
        image: '/img/iehub.jpeg',
        problem: 'A sophisticated global trade platform connecting exporters and importers worldwide to list products and manage inventory.',
        constraints: [
            'Implementing real-time inventory management to prevent overselling',
            'Building a multi-parameter search & filtering engine (category, price, origin)',
            'Managing complex state for product listings and user imports'
        ],
        decision: 'Built on React 19.2.0 and Node.js with a MongoDB backend to handle high-volume product data and complex user interactions.',
        notBuilt: [
            'Advanced analytics dashboard for trade insights',
            'Multi-language support for global accessibility',
            'Mobile app (React Native) for on-the-go trading'
        ],
        outcome: 'Created a seamless ecosystem for global commerce, enabling users to list exports and find imports efficiently.',
        tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Recharts'],
        liveUrl: 'https://iehub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/iehub-client',
    },
    {
        id: 3,
        name: 'ToyTopia',
        category: 'E-Commerce Marketplace',
        image: '/img/ToyTopia.png',
        problem: 'A premium marketplace connecting families with local toy sellers, offering detailed catalogs and seller information.',
        constraints: [
            'Robust authentication system with Google Sign-in',
            'Managing local storage for user favorites',
            'Building a responsive UI for seamless mobile and desktop experience'
        ],
        decision: 'Leveraged Firebase for backend services and authentication to rapidly deploy a secure, reactive marketplace interface.',
        notBuilt: [
            'Live backend API integration (transitioning from JSON)',
            'Order management and checkout functionality',
            'Seller dashboard enhancements'
        ],
        outcome: 'Established a trusted platform for local toy discoveries with comprehensive product information and user ratings.',
        tech: ['React', 'Firebase', 'Tailwind CSS', 'DaisyUI', 'Swiper.js'],
        liveUrl: 'https://toy-topia-ashy.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/ToyTopia',
    },
];
