import moviedesktop from '../assets/moviedesktop.jpg';
import moviemobile from '../assets/moviemobile.jpg';
import tododesktop from '../assets/tododesktop.jpg';
import todomobile from '../assets/todomobile.jpg';

export const marquessTexts = [
    "Responsive Web Design",
    "Component-Based Architecture",
    "API Integration",
    "State Management with Redux",
    "Code Reusability",
    "Performance Optimization",
];

export const sectionProjects = [
    {
        id: 1, 
        title: 'React Movie App with Firebase & API Integration', 
        img: {
            desktop: moviedesktop,
            mobile: moviemobile
        }, 
        demoLink: 'https://moviesinfocenter.netlify.app/', 
        gitHubLink: 'https://github.com/kaung8229/movies-info'
    },
    {
        id: 2, 
        title: 'Responsive tasks management', 
        img: {
            desktop: tododesktop,
            mobile: todomobile
        }, 
        demoLink: 'https://multitaskmanager.netlify.app/', 
        gitHubLink: 'https://github.com/kaung8229/TodoList',
    }
];

export const detailProjects = [
    {
        id: 1,
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
        id: 2,
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
    }
];



