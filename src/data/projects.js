export const projects = [
    {
        id: 1,
        name: 'Metro Optics',
        category: 'E-Commerce',
        sectionIcon: 'data_object',
        image: '/img/metro-optics.png',
        shortDesc: 'A high-performance e-commerce solution for premium eyewear. Features real-time inventory tracking, 3D virtual try-on integration, and a headless CMS architecture.',
        fullDesc: 'A comprehensive e-commerce platform for premium eyewear, offering seamless shopping experiences with advanced features like prescription management, real-time inventory tracking, and intuitive admin controls for streamlined business operations.',
        tech: ['React', 'Node.js', 'Stripe'],
        status: 'LIVE_SYSTEM',
        liveUrl: 'https://metro-optics.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/metro-optics',
        featured: true,
        challenges: [
            'Implementing secure authentication and role-based access control for admin panel',
            'Building responsive UI components that work seamlessly across all device sizes',
            'Integrating Firebase for real-time data synchronization and user management',
            'Designing an efficient product catalog with advanced filtering and search capabilities'
        ],
        improvements: [
            'Add payment gateway integration for secure checkout process',
            'Implement AI-powered virtual try-on feature for eyewear',
            'Build mobile app versions for iOS and Android',
            'Add multi-language support for broader accessibility'
        ]
    },
    {
        id: 2,
        name: 'eTuitionBD',
        category: 'Ed-Tech',
        sectionIcon: 'school',
        image: '/img/e-tutionhub.png',
        shortDesc: 'An educational platform connecting students with tutors. Includes real-time scheduling, video conferencing integration, and a robust reputation system for educators.',
        fullDesc: 'A robust platform connecting students with qualified tutors in Bangladesh, streamlining finding, applying for, and managing tuition opportunities with automated workflows.',
        tech: ['Next.js', 'Firebase', 'Tailwind'],
        status: 'DEPLOYED',
        liveUrl: 'https://e-tuitionhub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/etuitionhub-frontend',
        featured: false,
        challenges: [
            'Implementing real-time notification system for tuition applications',
            'Building a secure payment gateway integration with Stripe',
            'Designing an intuitive matching algorithm for student-tutor pairing',
            'Optimizing database queries for fast search results'
        ],
        improvements: [
            'Add video calling feature for online tutoring sessions',
            'Implement AI-powered tutor recommendations',
            'Build mobile app versions for iOS and Android',
            'Add multi-language support for broader accessibility'
        ]
    },
    {
        id: 3,
        name: 'Import-Export Hub',
        category: 'Logistics',
        sectionIcon: 'hub',
        image: '/img/iehub.jpeg',
        shortDesc: 'B2B logistics dashboard designed for high-volume tracking. Features interactive route mapping, customs document automation, and container tracking APIs.',
        fullDesc: 'An integrated trade nexus facilitating global commerce with specialized product listing and supply chain management tools.',
        tech: ['Vue.js', 'Python', 'PostgreSQL'],
        status: 'LIVE_SYSTEM',
        liveUrl: 'https://iehub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/iehub-client',
        featured: false,
        challenges: [
            'Handling complex product categorization across industries',
            'Building responsive data tables for large product listings',
            'Implementing secure authentication for business accounts'
        ],
        improvements: [
            'Add real-time chat between buyers and sellers',
            'Integrate shipping cost calculators',
            'Build analytics dashboard for trade insights'
        ]
    },
    {
        id: 4,
        name: 'ToyTopia',
        category: 'Experiential',
        sectionIcon: 'view_in_ar',
        image: '/img/ToyTopia.png',
        shortDesc: 'An immersive interactive catalog for vintage toy collectors. Built with WebGL for 360-degree product views and physics-based interactions on the landing page.',
        fullDesc: 'A high-end marketplace platform connecting families with local sellers of quality toys and collectibles through a curated catalog.',
        tech: ['Three.js', 'WebGL', 'GSAP'],
        status: 'BETA',
        liveUrl: 'https://toy-topia-ashy.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/ToyTopia',
        featured: false,
        challenges: [
            'Creating an engaging UI for family-friendly browsing',
            'Implementing Firebase for real-time inventory updates',
            'Building a smooth cart and checkout experience'
        ],
        improvements: [
            'Add wishlist and favorites functionality',
            'Implement seller verification system',
            'Add product review and rating system'
        ]
    },
];
