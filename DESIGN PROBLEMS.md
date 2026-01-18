1. Generic AI Aesthetic (Purple/Blue Gradients)
Prompt:
"Replace all gradient backgrounds and typical AI color schemes (purple, blue, cyan gradients) with a professional, modern color palette. Use a neutral base (whites, grays, blacks) with 1-2 carefully chosen accent colors. Remove glassmorphism effects and excessive visual noise. Make the design feel human-crafted, not template-generated."
2. Inconsistent Spacing & Alignment
Prompt:
"Audit all spacing and alignment throughout the site. Ensure consistent padding and margins using a spacing scale (e.g., 8px, 16px, 24px, 32px, 48px). Fix any misaligned elements, uneven gaps between sections, and inconsistent component spacing. Apply a systematic grid layout."
3. Poor Typography Hierarchy
Prompt:
"Fix the typography hierarchy. Establish clear size differences between headings (H1, H2, H3) and body text. Use appropriate font weights. Ensure readable line heights (1.5-1.7 for body text). Replace overly decorative or rounded fonts with professional typefaces. Limit to 2 font families maximum."
4. Overlapping Text and Icons
Prompt:
"Fix all text and icon overlap issues in forms, buttons, and input fields. Add proper padding to accommodate icons (left padding: 40-50px for input fields with icons). Ensure adequate spacing between all interactive elements and their labels."
5. Excessive Shadows and Border Radius
Prompt:
"Reduce excessive use of box shadows and border radius throughout the site. Use subtle shadows only where necessary for depth (e.g., cards, modals). Standardize border radius values (e.g., 4px, 8px, 12px max). Remove any glowing or neon effects."
6. Poor Color Contrast & Accessibility
Prompt:
"Ensure all text meets WCAG AA accessibility standards with minimum 4.5:1 contrast ratio for body text and 3:1 for large text. Fix low-contrast text on colored backgrounds. Make sure all interactive elements are clearly distinguishable and have visible focus states."
7. Cluttered Layout / No Whitespace
Prompt:
"Add generous whitespace throughout the design. Increase spacing between sections. Remove unnecessary elements that create visual clutter. Let content breathe. Use the 'less is more' principle - simplify the layout and focus on essential content."
8. Mobile Responsiveness Issues
Prompt:
"Fix all mobile responsiveness issues. Ensure the site works perfectly on screens from 320px to 1920px wide. Test and fix: hamburger menu functionality, touch targets (minimum 44x44px), text readability, image scaling, horizontal scrolling issues, and stacked layouts on mobile."

LAYOUT & STRUCTURE PROBLEMS
9. Broken Grid Systems
Prompt:
"Implement a proper responsive grid system. Ensure columns stack correctly on mobile, maintain consistent gutters, and align elements properly. Fix any layout breaks at different breakpoints (mobile, tablet, desktop)."
10. Navigation Issues
Prompt:
"Fix navigation functionality. Ensure mobile menu opens/closes properly, active states are visible, dropdowns work correctly, links scroll smoothly to sections, and the navigation is sticky/fixed when scrolling. Add proper hamburger menu animation."
11. Footer Not Staying at Bottom
Prompt:
"Fix the footer positioning. Ensure it stays at the bottom of the page on short content pages using flexbox or grid. The footer should not float in the middle of the page or overlap content."

FUNCTIONAL PROBLEMS
12. Non-Functional Forms
Prompt:
"Make all forms fully functional. Implement proper form validation (required fields, email format, password strength). Add error messages that appear below fields. Ensure submit button shows loading state and success/error feedback. Prevent form submission with empty fields."
13. Broken Button Actions
Prompt:
"Ensure all buttons perform their intended actions. Connect 'Learn More' buttons to relevant sections, make 'Contact' buttons open contact forms or modals, implement scroll-to-top buttons, and ensure all CTAs have proper functionality or navigate to the correct pages."
14. Image Loading Issues
Prompt:
"Fix image loading problems. Add proper alt text to all images. Implement lazy loading for better performance. Add placeholder backgrounds while images load. Ensure images are properly sized and optimized. Fix any broken image links showing broken icons."
15. Modal/Popup Not Working
Prompt:
"Fix all modal and popup functionality. Ensure they open/close properly, have working close buttons (X button and clicking outside), trap focus when open, prevent background scrolling, and are accessible with keyboard navigation (Escape key to close)."
16. Accordion/Dropdown Not Expanding
Prompt:
"Fix accordion and dropdown components. Ensure they expand/collapse on click, show proper open/closed indicators (arrows rotating), animate smoothly, and only one accordion item stays open at a time if designed that way. Add proper ARIA attributes for accessibility."
17. Slider/Carousel Not Working
Prompt:
"Fix carousel/slider functionality. Ensure navigation arrows work, auto-play functions properly (if intended), slides transition smoothly, indicators show active slide, touch/swipe works on mobile, and it's accessible via keyboard arrows."

JAVASCRIPT ERRORS
18. Console Errors Breaking Site
Prompt:
"Review the code and fix all JavaScript console errors. Look for: undefined variables, missing function declarations, incorrect event listeners, typos in function names, and null reference errors. Test all interactive features after fixing."
19. Event Listeners Not Working
Prompt:
"Fix all event listener issues. Ensure click, submit, scroll, and hover events are properly attached. Check that event listeners are added after DOM loads (use DOMContentLoaded). Fix any delegation issues for dynamically added elements."
20. Scroll Animations Not Triggering
Prompt:
"Fix scroll-triggered animations. Ensure Intersection Observer or scroll event listeners are properly implemented. Test that animations trigger at the right viewport position, don't re-trigger unnecessarily, and work on all screen sizes."

DATA & STATE MANAGEMENT
21. Form Data Not Persisting
Prompt:
"Implement form data persistence using localStorage. Save input values as users type, restore data when page reloads, clear stored data after successful submission, and handle multiple forms independently."
22. State Not Updating (React/Vue)
Prompt:
"Fix state management issues. Ensure useState/setState updates correctly, component re-renders when state changes, props are passed correctly to child components, and there are no stale closures or reference issues causing outdated state values."
23. Data Not Displaying After Fetch
Prompt:
"Fix API data fetching and display. Ensure fetch/axios calls are properly implemented with error handling, loading states are shown while fetching, data is correctly parsed and mapped to UI components, and errors display user-friendly messages."

PERFORMANCE PROBLEMS
24. Slow Page Load Times
Prompt:
"Optimize page performance. Minify CSS and JavaScript, compress and optimize images (convert to WebP if possible), implement lazy loading for images and components below fold, remove unused CSS/JS, and defer non-critical scripts."
25. Memory Leaks from Event Listeners
Prompt:
"Fix memory leaks. Ensure all event listeners are removed when components unmount or pages change. Clear intervals and timeouts. Remove observers when no longer needed. Use cleanup functions in useEffect hooks."

CSS PROBLEMS
26. Z-Index Issues / Layering Problems
Prompt:
"Fix z-index and layering issues. Establish a z-index scale (e.g., 1, 10, 100, 1000) and apply consistently. Ensure modals appear above all content, dropdowns don't hide behind other elements, and fixed headers stay on top."
27. Hover Effects Not Working
Prompt:
"Fix all hover effects. Ensure buttons, links, and cards have visible hover states with smooth transitions. Add cursor:pointer to clickable elements. Test that hover effects work properly and don't cause layout shifts."
28. Flexbox/Grid Not Centering
Prompt:
"Fix centering issues with flexbox and grid. Ensure items are properly centered both horizontally and vertically. Fix any alignment issues where content appears off-center or misaligned in containers."

ACCESSIBILITY PROBLEMS
29. Missing ARIA Labels & Alt Text
Prompt:
"Add proper accessibility attributes. Include alt text for all images, ARIA labels for icon buttons, ARIA-expanded for toggles, role attributes for custom components, and ensure screen reader users can navigate the entire site."
30. No Keyboard Navigation
Prompt:
"Implement full keyboard navigation. Ensure users can tab through all interactive elements, Enter/Space activate buttons, Escape closes modals, Arrow keys navigate menus/carousels, and focus indicators are clearly visible."
31. Focus Trapping in Modals
Prompt:
"Implement proper focus management for modals. When modal opens, focus should move to it, tabbing should cycle only through modal elements (focus trap), and focus should return to trigger element when modal closes."

CONTENT PROBLEMS
32. Lorem Ipsum Placeholder Text
Prompt:
"Replace all Lorem Ipsum and placeholder text with realistic, relevant content. Write actual headlines, descriptions, and body text that makes sense for this website's purpose. Ensure proper length and context for each section."
33. Inconsistent Capitalization/Tone
Prompt:
"Standardize all text for consistent capitalization (Title Case for headings, Sentence case for buttons) and tone of voice. Ensure professional, clear, and grammatically correct copy throughout. Fix any awkward phrasing or AI-generated text that sounds unnatural."

BROWSER COMPATIBILITY
34. Safari-Specific Issues
Prompt:
"Fix Safari browser compatibility issues. Test and fix: date input styling, flexbox gaps (use margin fallback), backdrop-filter support, smooth scrolling behavior, and any CSS properties that need -webkit- prefixes."
35. CSS Not Working in Older Browsers
Prompt:
"Add fallbacks for older browsers. Provide alternatives for CSS Grid (flexbox fallback), custom properties (static values), backdrop-filter (solid background), and modern CSS features. Test in browsers at least 2 versions back."

SECURITY & VALIDATION
36. No Form Validation
Prompt:
"Implement comprehensive form validation. Add required field checks, email format validation, password strength requirements, phone number formatting, character limits, and display clear error messages. Prevent submission until all fields are valid."
37. XSS Vulnerabilities in User Input
Prompt:
"Sanitize all user input to prevent XSS attacks. Escape HTML entities, validate input types, use textContent instead of innerHTML when displaying user data, and implement Content Security Policy headers."

SEO PROBLEMS
38. Missing Meta Tags
Prompt:
"Add all essential SEO meta tags: title (unique, under 60 chars), description (under 160 chars), Open Graph tags for social sharing, viewport meta tag, canonical URL, and favicon link. Ensure each page has unique, descriptive titles."
39. Poor Heading Structure (Missing H1, Multiple H1s)
Prompt:
"Fix heading hierarchy. Ensure one H1 per page, logical progression (H1 → H2 → H3), no skipped levels, and headings accurately describe content sections. Screen readers and SEO depend on proper heading structure."

ANIMATION PROBLEMS
40. Janky/Laggy Animations
Prompt:
"Optimize animations for smooth performance. Use transform and opacity for animations (GPU-accelerated). Avoid animating width, height, or margin. Use will-change property sparingly. Reduce motion for users who prefer-reduced-motion."
41. Animations Triggering Multiple Times
Prompt:
"Fix animation triggers. Ensure animations only play once on scroll using Intersection Observer with proper thresholds. Remove animation classes after they complete if they shouldn't repeat. Prevent animations from triggering on every scroll event."

BACKEND/API INTEGRATION
42. CORS Errors Blocking Requests
Prompt:
"Handle CORS errors properly. Add error handling for blocked requests, provide user-friendly error messages, implement proxy if needed, or add instructions for backend team to enable CORS headers. Show meaningful feedback instead of silent failures."
43. API Errors Not Handled
Prompt:
"Implement comprehensive API error handling. Use try-catch blocks, handle network errors, display user-friendly error messages, implement retry logic for failed requests, and show loading states during API calls."

SPECIFIC COMPONENT ISSUES
44. Cards Not Aligning Properly
Prompt:
"Fix card component alignment and consistency. Ensure all cards are the same height in a row (use grid or flex with min-height), images scale consistently, text doesn't overflow, and spacing is uniform across all cards."
45. CTA Buttons Not Standing Out
Prompt:
"Make CTA buttons more prominent. Use high-contrast colors, adequate padding (at least 12px vertical, 24px horizontal), clear hover states, and position them strategically. Primary CTAs should be immediately obvious. Add slight elevation or subtle animation."
46. Search Bar Not Functional
Prompt:
"Implement functional search. Add input filtering logic, display results dynamically as user types, handle no results state with helpful message, allow clearing search, and ensure search works case-insensitively. Add search icon that's properly positioned."
47. Social Media Icons Not Linked
Prompt:
"Link all social media icons to actual profiles or add placeholder URLs. Ensure icons open in new tabs (target='_blank' with rel='noopener noreferrer'). Add hover effects. Include sr-only text for screen readers (e.g., 'Visit our Facebook page')."

COPY-PASTE & STRUCTURE
48. Duplicated IDs
Prompt:
"Fix all duplicated ID attributes. IDs must be unique on a page. Replace duplicate IDs with classes or generate unique IDs. This is critical for JavaScript targeting and accessibility (form labels, ARIA references)."
49. Inline Styles Instead of Classes
Prompt:
"Refactor all inline styles into CSS classes. Create reusable utility classes or component styles. This improves maintainability, reduces file size, and makes global style changes easier. Use a consistent naming convention (BEM or similar)."
50. Messy Code Structure
Prompt:
"Clean up and organize the code structure. Properly indent all HTML/CSS/JS, remove commented-out code, group related styles together, add comments for complex sections, follow consistent naming conventions, and separate concerns (HTML structure, CSS styling, JS behavior)."