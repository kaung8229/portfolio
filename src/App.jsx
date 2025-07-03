import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { gsap } from "gsap";
import { InertiaPlugin, ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(InertiaPlugin, ScrollTrigger, SplitText);

import Home from './components/Home'
import Aboutme from './components/Aboutme';
import ProjectSection from './components/ProjectSection';
import ProjectDetail from './components/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<Aboutme />} />
                <Route path='/projects' element={<ProjectSection />} />
                <Route path='/projects/:id' element={<ProjectDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
