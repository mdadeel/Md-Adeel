// Google Analytics Integration
// Replace GA_MEASUREMENT_ID with your actual ID

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your ID

// Initialize GA
export const initGA = () => {
    if (typeof window === 'undefined') return;

    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
    });
};

// Track page views
export const pageView = (url) => {
    if (typeof window.gtag === 'undefined') return;
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

// Track events
export const trackEvent = (action, category, label, value) => {
    if (typeof window.gtag === 'undefined') return;
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};

// Common tracking helpers
export const analytics = {
    // Track button clicks
    buttonClick: (buttonName) => {
        trackEvent('click', 'Button', buttonName);
    },

    // Track section views
    sectionView: (sectionName) => {
        trackEvent('view', 'Section', sectionName);
    },

    // Track external link clicks
    externalLink: (url) => {
        trackEvent('click', 'External Link', url);
    },

    // Track resume download
    resumeDownload: () => {
        trackEvent('download', 'Resume', 'PDF');
    },

    // Track email copy
    emailCopy: () => {
        trackEvent('copy', 'Contact', 'Email');
    },

    // Track theme change
    themeChange: (theme) => {
        trackEvent('change', 'Theme', theme);
    },

    // Track terminal usage
    terminalCommand: (command) => {
        trackEvent('command', 'Terminal', command);
    },
};
