export const projects = [
    {
        id: 1,
        name: 'Metro Optics',
        category: 'MERN E-Commerce',
        image: '/img/metro-optics.png',
        problem: 'Local eyewear retailers needed a high-conversion digital presence without the bloat of enterprise SaaS platforms.',
        constraints: [
            'Solo engineered from zero to production',
            '30-day delivery hard deadline',
            'Complex prescription data modeling requirements'
        ],
        decision: 'Implemented a custom MERN architecture to handle nested prescription JSON objects which standard e-commerce plugins couldn\'t accommodate without heavy overrides.',
        notBuilt: [
            'Server-side rendering (deferred) — high interactivity priority favored client-side state',
            'Global search index — overkill for limited inventory catalog'
        ],
        outcome: 'Reduced inventory management friction by 70%. Zero support calls since deployment.',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase'],
        liveUrl: 'https://metro-optics.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/metro-optics',
    },
    {
        id: 2,
        name: 'eTuitionBD',
        category: 'Next.js Ed-Tech',
        image: '/img/e-tutionhub.png',
        problem: 'Fragmented tutor-discovery market in Bangladesh requiring real-time updates and SEO searchability.',
        constraints: [
            'Zero-cost serverless infrastructure budget',
            'Critical SEO requirements for tutor profiles',
            'Low-latency real-time application workflow'
        ],
        decision: 'Leveraged Next.js App Router with Server Components for profile SEO, paired with Firebase Real-time DB to avoid expensive socket server maintenance.',
        notBuilt: [
            'Custom Auth server — prioritized Firebase Auth for security/speed compliance',
            'Video SDK — deferred to external links to maintain MVP performance'
        ],
        outcome: 'Automated 100% of the application workflow. Achieved 95+ Lighthouse SEO score on all profiles.',
        tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: 'https://e-tuitionhub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/etuitionhub-frontend',
    },
    {
        id: 3,
        name: 'Import-Export Hub',
        category: 'Business Infrastructure',
        image: '/img/iehub.jpeg',
        problem: 'Regional B2B directory requiring fast catalog browsing without server overhead.',
        constraints: [
            'High-volume catalog listing (1000+ entries)',
            'Instant client-side filtering requirements',
            'Static hosting environment constraints'
        ],
        decision: 'Architected as a static-first directory using JSON data stores to eliminate database cold starts and ensure sub-second search speeds.',
        notBuilt: [
            'User login system — rejected to maximize catalog visibility and scannability',
            'Dynamic product editing — moved to a GitHub-backed CMS workflow'
        ],
        outcome: 'Achieved near-zero operational costs while maintaining high-performance search for B2B users.',
        tech: ['React', 'Tailwind', 'Vercel', 'JSON/Static'],
        liveUrl: 'https://iehub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/iehub-client',
    },
    {
        id: 4,
        name: 'ToyTopia',
        category: 'Engineering Sandbox',
        image: '/img/ToyTopia.png',
        problem: 'Controlled environment to stress-test MERN state management and Firebase integration patterns.',
        constraints: [
            'Purely educational project scope',
            'Focused on complex cart synchronization logic',
            'Single-developer code audit'
        ],
        decision: 'Chose to build a full CRUD flow to master the integration gaps between Firebase storage and MondoDB metadata syncing.',
        notBuilt: [
            'Payment stripe integration — deferred as learning was focused on state, not billing',
            'Admin dashboard UI — managed directly via database console to save time'
        ],
        outcome: 'Deepened understanding of real-time state sync and Firebase security rules.',
        tech: ['React', 'Firebase', 'Context API', 'CSS Grid'],
        liveUrl: 'https://toy-topia-ashy.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/ToyTopia',
    },
];
