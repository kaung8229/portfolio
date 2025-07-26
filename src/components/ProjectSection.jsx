import React, { lazy, Suspense, useRef } from 'react'
import { Link } from 'react-router';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all";

import { sectionProjects } from '../contants';

import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';

const DotGrid = lazy(()=> import("../reactbits/DotGrid"));

function ProjectSection() {
    const boxRef = useRef(null);

    useGSAP(()=>{

        document.fonts.ready.then(()=>{
            const sectiontitleSplit = SplitText.create('.sectiontitle', {type: "words, chars"});
            const sectionsubtitleSplit = SplitText.create('.sectionsubtitle', {type: "words"});

            gsap.from([sectiontitleSplit.chars, sectionsubtitleSplit.words], {
                opacity: 0,
                filter: 'blur(5px)',
                scale: 1.5,
                ease: 'power1.inOut',
                stagger: 0.05
            })
            
        })

        const boxes = gsap.utils.toArray(boxRef.current.children);

        boxes.forEach(box => {
            gsap.from(box, {
                pointerEvents: 'none',
                opacity: 0,
                scale: 1.1,
                scrollTrigger:{
                    trigger: box,
                    start: '20px center'
                }
            })
        })

    }, []);

    return (
        <section className='relative pt-[20vh] py-20'>
            <Navbar />

            <Suspense fallback={<></>}>
                <DotGrid
                    dotSize={10}
                    gap={15}
                    baseColor="#222222"
                    activeColor="#000000"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </Suspense>

            <div className='responsive-container flex lg:flex-row flex-col justify-between items-center gap-10'>
                <h3 className='font-allenoire shrink-0 lg:w-1/2 w-full lg:text-left text-center lg:text-8xl md:text-7xl text-6xl sectiontitle'>Projects</h3>
                <p className='font-mono md:text-2xl text-xl lg:text-left text-center sectionsubtitle'>Explore how I transform ideas into interactive, user-friendly web experiences.</p>
            </div>

            {/* <div ref={boxRef} className='relative h-[80vh]'>
                {sectionProjects.map((project, idx) => (
                    <div key={idx} className='absolute w-[90%] left-1/2 -translate-x-1/2 grid place-items-center size-full rounded-lg shadow-top overflow-hidden'>
                        <div className='absolute inset-0 bg-stone-950'>
                            <img src={project.img.desktop} alt="project-img" className='size-full object-cover opacity-20' loading='lazy' />
                        </div>

                        <div className='relative flex flex-col items-center text-center gap-5'>
                            <h3 className='lg:text-5xl md:text-4xl text-3xl'>
                                {project.title}
                            </h3>
                        </div>
                        
                        <div className='absolute top-10 right-10 flex md:flex-row items-center gap-5'>
                            <a href={project.demoLink} target='_blank' className='w-30 flex justify-center items-center gap-1 hover:gap-2 text-2xl rounded-full text-stone-950 bg-white transition-all hover:scale-110 cursor-pointer py-2'>
                                <span className='text-base'>Go Live</span>
                                <ion-icon name="eye"></ion-icon>
                            </a>
                            <Link to={`/projects/${project.id}`}>
                                <button className='w-25 flex justify-center items-center gap-1 hover:gap-2 text-2xl rounded-full text-stone-950 bg-white transition-all hover:scale-110 cursor-pointer py-2'>
                                    <ion-icon name="reader-outline"></ion-icon>
                                    <span className='text-base'>Detail</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div> */}

            <div ref={boxRef} className='responsive-container md:mt-[20vh] mt-[10vh] md:space-y-20 space-y-8'>
                {sectionProjects.map((project, idx)=>(
                <div key={idx} className='group rounded-3xl bg-cyan-50'>
                    <Link to={`/projects/${project.id}`} style={{cursor: 'url(/uprighticon.png),auto'}}>
                        <div className='group-hover:scale-95 group-hover:shadow-2xl transition-all aspect-[9/6] bg-white rounded-3xl overflow-hidden'>
                            <img src={project.img} alt="" className='size-full object-cover' />
                        </div>
                    </Link>
                </div>
                ))}
            </div>

            <div className='responsive-container relative mt-20'>
                <Breadcrumb
                    title1='Home'
                    route1='/'
                    title2='About me'
                    route2='/about'
                />
            </div>

        </section>
    )
}

export default ProjectSection