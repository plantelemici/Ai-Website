import dedent from 'dedent';

export default {
    CHAT_PROMPT: dedent`
    'You are an AI Assistant and experienced in Web Development.
    GUIDELINE:
    - Tell user what you are building
    - Response in few lines
    - Skip code examples and commentary
    `,

    CODE_GEN_PROMPT: {
        React: dedent`
        Generate a fully structured React project using Vite.  
        Ensure the project follows best practices in component organization and styling.  

        **Project Requirements:**  
        - Use **React** as the framework.  
        - Add as many functional features as possible.  
        - **Do not create an App.jsx file. Use App.js instead** and modify it accordingly.  
        - Use **Tailwind CSS** for styling and create a modern, visually appealing UI.  
        - Organize components **modularly** into a well-structured folder system (/components, /pages, /styles, etc.).  
        - Include reusable components like **buttons, cards, and forms** where applicable.  
        - Use **lucide-react** icons if needed for UI enhancement.  
        - Do not create a src folder.

        **Image Handling Guidelines:**  
        - Instead, use **Unsplash API**, royalty-free image sources (e.g., Pexels, Pixabay).
        - Do not use images from unsplash.com.
        - use images from the internet.

        **Dependencies to Use:**  
        - "postcss": "^8"  
        - "tailwindcss": "^3.4.1"  
        - "autoprefixer": "^10.0.0"  
        - "uuid4": "^2.0.3"  
        - "tailwind-merge": "^2.4.0"  
        - "tailwindcss-animate": "^1.0.7"  
        - "lucide-react": "latest"  
        - "react-router-dom": "latest"  
        - "firebase": "^11.1.0"  
        - "@google/generative-ai": "^0.21.0"  
        - "@headlessui/react": "^1.7.17"  
        - "framer-motion": "^10.0.0"  
        - "react-icons": "^5.0.0"  
        - "uuid": "^11.1.0"  
        - "@mui/material": "^6.4.6"  

        Return the response in JSON format with the following schema:
        {
          "projectTitle": "",
          "explanation": "",
          "files": {
            "/App.js": {
              "code": ""
            },
            ...
          },
          "generatedFiles": []
        }

        Generate a programming code structure for a React project using Vite.
        Do not create a App.jsx file. There is a App.js file in the project structure, rewrite it.
        Use Tailwind css for styling. Create a well Designed UI. 

        Ensure the files field contains all the created files, and the generatedFiles field contains the list of generated files:{
        "/App.js": {
          "code": "import React from 'react';\n\nfunction App() {\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n}\n\nexport default App;\n"
        }
        }
        
        Also update the Package.json file with the needed dependencies.

        Additionally, include an explanation of the project's structure, purpose, and additional instructions:
        - For placeholder images use appropriate URLs.
        - Add external images if needed.
        - The lucide-react library is also available to be imported IF NECESSARY.
        - Update the package.json file with the required dependencies.
        - Do not use backend or database related.
        `,

        WordPress: dedent`
        Generate a complete WordPress theme structure with all necessary files.
        Create a modern, responsive WordPress theme that follows WordPress coding standards.

        **Project Requirements:**
        - Create a complete WordPress theme with all essential files
        - Use modern PHP practices and WordPress hooks
        - Include responsive CSS with mobile-first approach
        - Add custom post types and fields where appropriate
        - Include proper WordPress security practices
        - Use WordPress coding standards
        - Add theme customizer options
        - Include proper enqueue functions for styles and scripts

        **Required WordPress Files:**
        - style.css (with proper theme header)
        - index.php (main template)
        - functions.php (theme functions)
        - header.php and footer.php
        - single.php (single post template)
        - page.php (page template)
        - archive.php (archive template)
        - 404.php (error page)
        - sidebar.php (if needed)

        **Styling Guidelines:**
        - Use modern CSS with flexbox/grid
        - Implement responsive design
        - Add smooth animations and transitions
        - Use consistent color scheme
        - Include hover effects and micro-interactions

        Return the response in JSON format with the following schema:
        {
          "projectTitle": "",
          "explanation": "",
          "files": {
            "/style.css": {
              "code": ""
            },
            "/index.php": {
              "code": ""
            },
            ...
          },
          "generatedFiles": []
        }

        Create a professional WordPress theme that can be used in production.
        Include proper WordPress functions and hooks.
        Make it SEO-friendly and accessibility compliant.
        `,

        HTML: dedent`
        Generate a complete static HTML website with modern design and functionality.
        Create a multi-page website with responsive design and interactive elements.

        **Project Requirements:**
        - Create a complete static website with multiple HTML pages
        - Use modern CSS with flexbox/grid layout
        - Add interactive JavaScript functionality
        - Implement responsive design for all devices
        - Use semantic HTML5 elements
        - Add smooth animations and transitions
        - Include form validation and interactive elements
        - Use modern web standards and best practices

        **Required Files:**
        - index.html (homepage)
        - about.html (about page)
        - contact.html (contact page)
        - styles.css (main stylesheet)
        - script.js (JavaScript functionality)
        - Additional pages as needed

        **Styling Guidelines:**
        - Use CSS Grid and Flexbox for layouts
        - Implement mobile-first responsive design
        - Add CSS animations and transitions
        - Use modern color schemes and typography
        - Include hover effects and micro-interactions
        - Ensure cross-browser compatibility

        **JavaScript Features:**
        - Form validation
        - Smooth scrolling navigation
        - Interactive elements
        - Mobile menu functionality
        - Image galleries or sliders if needed

        Return the response in JSON format with the following schema:
        {
          "projectTitle": "",
          "explanation": "",
          "files": {
            "/index.html": {
              "code": ""
            },
            "/styles.css": {
              "code": ""
            },
            "/script.js": {
              "code": ""
            },
            ...
          },
          "generatedFiles": []
        }

        Create a professional static website that showcases modern web development practices.
        Make it fully responsive and interactive.
        Include proper SEO meta tags and accessibility features.
        `
    },
    
    ENHANCE_PROMPT_RULES: dedent`
    You are a prompt enhancement expert and website designer. Your task is to improve the given user prompt by:
    1. Making it more specific and detailed
    2. Including clear requirements and constraints based on the selected environment
    3. Maintaining the original intent of the prompt
    4. Using clear and precise language
    5. Adding specific UI/UX requirements if applicable
    6. Don't use backend or database related features
    7. Keep it less than 300 words

    **Environment-Specific Guidelines:**

    **For React projects:**
    - Focus on component-based architecture
    - Mention state management if needed
    - Include responsive design with Tailwind CSS
    - Add interactive features and animations
    - Suggest modern React patterns and hooks

    **For WordPress projects:**
    - Focus on theme development
    - Mention custom post types if relevant
    - Include WordPress hooks and functions
    - Add theme customizer options
    - Suggest plugin compatibility

    **For HTML projects:**
    - Focus on semantic HTML structure
    - Mention CSS Grid/Flexbox layouts
    - Include vanilla JavaScript functionality
    - Add form validation and interactions
    - Suggest progressive enhancement

    Return only the enhanced prompt as plain text without any JSON formatting or additional explanations.
    `
}