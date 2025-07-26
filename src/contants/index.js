import tododesktop from '../assets/tododesktop.png';
import todomobile from '../assets/todomobile.png';
import moviedesktop from '../assets/moviedesktop.png';
import moviemobile from '../assets/moviemobile.png';
import cocktaildesktop from '../assets/cocktaildesktop.png';
import cocktailmobile from '../assets/cocktailmobile.png';
import foodrecipedesktop from '../assets/foodrecipedesktop.png';
import foodrecipemobile from '../assets/foodrecipemobile.png';

export const skillset = {
    languages: ['HTML', 'CSS', 'Javascript(ES6+)'],
    tools: ['Git & GitHub', 'npm', 'Vite', 'RESTful APIs', 'Figma', 'Adobe XD'],
    libraries: ['React.js', 'Redux', 'Bootstrap', 'Tailwind CSS'],
    additional: ['Responsive Web Design', 'Performance Optimization', 'Cross-browser Compatibility', 'Problem Solving', 'Communication', 'Self-learning', 'Teamwork']
};

export const sectionProjects = [
    {
        id: 1, 
        title: 'React Task Organizer with Real-Time Storage', 
        img: tododesktop, 
        demoLink: 'https://multitaskmanager.netlify.app/', 
        gitHubLink: 'https://github.com/kaung8229/TodoList',
    },
    {
        id: 2, 
        title: 'React Movie App with Firebase & API Integration', 
        img: moviedesktop, 
        demoLink: 'https://moviesinfocenter.netlify.app/', 
        gitHubLink: 'https://github.com/kaung8229/movies-info'
    },
    {
        id: 3, 
        title: 'Cocktail Landing Page', 
        img: cocktaildesktop, 
        demoLink: 'https://cocktailsland.netlify.app/', 
        gitHubLink: 'https://github.com/kaung8229/cocktail-gsap',
    },
    {
        id: 4, 
        title: 'Food & Recipe App', 
        img: foodrecipedesktop, 
        demoLink: 'https://kaung8229.github.io/footrecipe/', 
        gitHubLink: 'https://github.com/kaung8229/footrecipe',
    }
];

export const detailProjects = [
    {
        id: 1,
        title: 'React Task Organizer with Real-Time Storage', 
        img: {
            desktop: tododesktop,
            mobile: todomobile
        }, 
        demoLink: 'https://multitaskmanager.netlify.app/', 
        gitHubLink: 'https://github.com/kaung8229/TodoList',
        overview: 'This Todo List App is a responsive and modern task management tool built with React and styled using Tailwind CSS. It allows users to create, categorize, and manage tasks efficiently. Tasks are stored in Firebase Firestore, enabling real-time updates and persistent storage across sessions. The interface is designed for a clean and intuitive user experience, and task data is automatically synced in the cloud.',
        tech: [
            'React',
            'Tailwind CSS',
            'Firebase'
        ],
        features: [
            'Users can easily manage their daily tasks with basic CRUD operations.',
            'Tasks can be grouped by custom categories for better organization.',
            'Uses Firebase Firestore to store and sync tasks in real-time across devices.',
            'Designed with Tailwind CSS to look great on mobile, tablet, and desktop screens.',
            'Built using a component-based architecture for maintainable and scalable code.'
        ]
    },
    {
        id: 2,
        title: 'React Movie App with Firebase & API Integration', 
        img: {
            desktop: moviedesktop,
            mobile: moviemobile
        }, 
        demoLink: 'https://moviesinfocenter.netlify.app/', 
        gitHubLink: 'https://github.com/kaung8229/movies-info',
        overview: 'Movies.net is a responsive movie discovery web application built with React, Redux, and Tailwind CSS. It allows users to search, view, and save movies using data fetched from Rapid API. The application includes full user authentication using Firebase Authentication, and supports a personalized watchlist feature stored in Firestore. Designed with modern UI principles and scalable architecture, Movies.net demonstrates strong integration between frontend technologies and third-party services.',
        tech: [
            'React',
            'Redux',
            'Tailwind CSS',
            'Firebase'
        ],
        features: [
            'Fetches real-time movie data from Rapid API and displays detailed information with clean UI.',
            'Users can sign up, log in, and log out securely using Firebase Authentication.',
            'Logged-in users can add or remove movies from a personalized watchlist stored in Cloud Firestore.',
            'Fully responsive layout designed with Tailwind CSS and optimized for mobile, tablet, and desktop devices.',
            'Global app state is managed using React Redux for efficient and organized data flow.',
            'Only authenticated users can access certain features like the watchlist, using protected routing logic.'
        ]
    },
    {
        id: 3, 
        title: 'Cocktail Landing Page', 
        img: {
            desktop: cocktaildesktop,
            mobile: cocktailmobile
        }, 
        demoLink: 'https://cocktailsland.netlify.app/', 
        gitHubLink: 'https://github.com/kaung8229/cocktail-gsap',
        overview: 'This is a modern, responsive landing page built with React and animated using GSAP and ScrollTrigger. The project was created while learning GSAP animation techniques through a YouTube tutorial. It helped me understand how to build smooth, scroll-based animations and control timeline sequences in a React environment. I followed the original layout for learning purposes, and customized parts of the design to explore animation behavior, layout responsiveness, and visual flow.',
        tech: [
            'React',
            'Tailwind CSS',
            'GSAP'
        ],
        features: [
            'Used GSAP and ScrollTrigger to animate text, images, and sections smoothly as the user scrolls through the page.',
            'Built the landing page using modular React components for clean and maintainable code.',
            'Ensured the layout works well across mobile, tablet, and desktop using Tailwind CSS.',
            'Followed a visually appealing layout to practice design principles like hierarchy, spacing, and alignment.',
            'Rebuilt and modified from a YouTube GSAP tutorial to practice animation logic and styling customization in a React environment.'
        ]
    },
    {
        id: 4, 
        title: 'Food & Recipe App', 
        img: {
            desktop: foodrecipedesktop,
            mobile: foodrecipemobile
        }, 
        demoLink: 'https://kaung8229.github.io/footrecipe/', 
        gitHubLink: 'https://github.com/kaung8229/footrecipe',
        overview: 'The Food & Recipe web application is a modern, user-friendly platform that allows users to search for food items and instantly access detailed recipes. Built using React JS for dynamic UI rendering and Tailwind CSS for sleek, responsive styling, this app aims to make cooking and meal planning easier and more enjoyable. Whether a beginner or an experienced cook, users can quickly discover new dishes and follow step-by-step instructions right from their browser.',
        tech: [
            'React',
            'Tailwind CSS'
        ],
        features: [
            'Users can search for any food item or ingredient with real-time results fetched from a public recipe API.',
            'Displays ingredients, preparation steps, and cooking time',
            'Fully responsive layout using Tailwind CSS and optimized for all screen sizes and devices',
            'Access to a wide range of international recipes'
        ]
    }
];



