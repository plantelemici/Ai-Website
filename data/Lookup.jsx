export default {
    SUGGSTIONS: {
        React: [
            'Create a modern e-commerce store with shopping cart',
            'Build a social media dashboard with real-time updates',
            'Develop a task management app with drag-and-drop',
            'Create a weather app with location-based forecasts',
            'Build a recipe sharing platform with user profiles',
            'Develop a fitness tracking app with progress charts'
        ],
        WordPress: [
            'Create a custom business theme with contact forms',
            'Build a blog theme with custom post types',
            'Develop an e-commerce theme for WooCommerce',
            'Create a portfolio theme for creative professionals',
            'Build a restaurant theme with menu management',
            'Develop a real estate theme with property listings'
        ],
        HTML: [
            'Create a responsive landing page for a startup',
            'Build a portfolio website with smooth animations',
            'Develop a restaurant website with online menu',
            'Create a corporate website with multiple pages',
            'Build a photography portfolio with image galleries',
            'Develop a personal blog with clean typography'
        ]
    },

    DEFAULT_FILE: {
        React: {
            '/public/index.html': {
                code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>
</body>
</html>`
            },
            '/App.css': {
                code: `@tailwind base;
@tailwind components;
@tailwind utilities;`
            },
            '/tailwind.config.js': {
                code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
            },
            '/postcss.config.js': {
                code: `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;`
            }
        },
        WordPress: {
            '/index.php': {
                code: `<?php get_header(); ?>

<main id="main" class="site-main">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
                </header>
                
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    <?php endif; ?>
</main>

<?php get_footer(); ?>`
            },
            '/style.css': {
                code: `/*
Theme Name: Custom Theme
Description: A custom WordPress theme
Version: 1.0
*/

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

.site-header {
    background: #333;
    color: white;
    padding: 1rem 0;
}

.site-main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.entry-title {
    color: #333;
    margin-bottom: 1rem;
}`
            },
            '/functions.php': {
                code: `<?php
function theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'theme_setup');

function theme_scripts() {
    wp_enqueue_style('theme-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'theme_scripts');
?>`
            },
            '/header.php': {
                code: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <header class="site-header">
        <div class="container">
            <h1 class="site-title">
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <?php bloginfo('name'); ?>
                </a>
            </h1>
            <nav class="main-navigation">
                <?php wp_nav_menu(array('theme_location' => 'primary')); ?>
            </nav>
        </div>
    </header>`
            },
            '/footer.php': {
                code: `    <footer class="site-footer">
        <div class="container">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
        </div>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>`
            }
        },
        HTML: {
            '/index.html': {
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <h1>My Website</h1>
            </div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="hero-content">
                <h2>Welcome to My Website</h2>
                <p>Creating amazing web experiences</p>
                <button class="cta-button">Get Started</button>
            </div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>`
            },
            '/styles.css': {
                code: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

header {
    background: #333;
    color: white;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #007bff;
}

.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
}

.hero-content h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.cta-button {
    background: #007bff;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.cta-button:hover {
    background: #0056b3;
}`
            },
            '/script.js': {
                code: `// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(51, 51, 51, 0.95)';
    } else {
        header.style.background = '#333';
    }
});

// CTA button click handler
document.querySelector('.cta-button')?.addEventListener('click', function() {
    alert('Welcome! Ready to get started?');
});`
            }
        }
    },

    DEPENDANCY: {
        React: {
            "@google/generative-ai": "^0.21.0",
            "@heroicons/react": "^1.0.6",
            "@headlessui/react": "^1.7.17",
            "autoprefixer": "^10.0.0",
            "firebase": "^11.1.0",
            "framer-motion": "^10.0.0",
            "lucide-react": "latest",
            "postcss": "^8",
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "react-icons": "^5.0.0",
            "react-router-dom": "latest",
            "react-toastify": "^10.0.0",
            "tailwind-merge": "^2.4.0",
            "tailwindcss": "^3.4.1",
            "tailwindcss-animate": "^1.0.7",
            "uuid4": "^2.0.3",
            "uuidv4": "^6.2.13",
            "uuid": "^11.1.0",
            "@mui/material": "^6.4.6"
        },
        WordPress: {},
        HTML: {}
    }
}