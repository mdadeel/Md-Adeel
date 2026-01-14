export const projects = [
    {
        id: 1,
        name: 'Metro Optics',
        category: 'Production E-Commerce',
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
        outcome: 'Reduced inventory management friction by 70%. Zero support calls since deployment. In production since March 2024.',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase'],
        liveUrl: 'https://metro-optics.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/metro-optics',
    },
    {
        id: 2,
        name: 'eTuitionBD',
        category: 'Ed-Tech Platform',
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
        outcome: 'Automated 100% of the application workflow. Achieved 95+ Lighthouse SEO score on all profiles. Serving 200+ daily active users.',
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
        outcome: 'Achieved near-zero operational costs while maintaining high-performance search for B2B users. Catalog scale: 1000+ entries, <50ms search response time.',
        tech: ['React', 'Tailwind', 'Vercel', 'JSON/Static'],
        liveUrl: 'https://iehub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/iehub-client',
    },
];
