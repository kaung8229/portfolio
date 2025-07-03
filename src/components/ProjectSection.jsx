import React, { useRef } from 'react'
import { Link } from 'react-router';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all";
import { sectionProjects } from '../contants';

import DotGrid from '../reactbits/DotGrid'
import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';

function ProjectSection() {
    const bannerRef = useRef(null);
    const boxRef = useRef(null);

    useGSAP(()=>{

        document.fonts.ready.then(()=>{
            const sectiontitleSplit = SplitText.create('.sectiontitle', {type: "words, chars"});

            gsap.from(sectiontitleSplit.chars, {
                opacity: 0,
                filter: 'blur(5px)',
                scale: 1.5,
                ease: 'power1.inOut',
                stagger: 0.2
            })
            
        })

        gsap.to(bannerRef.current, {
            height: '20vh',
            ease: 'none',
            scrollTrigger: {
                trigger: bannerRef.current,
                start: 'top top',
                end: 'bottom center',
                scrub: 1
            }
        })

        const boxes = gsap.utils.toArray(boxRef.current.children);

        const boxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: boxRef.current,
                start: 'top 20%',
                end: 'bottom top',
                scrub: 1,
                pin: true
            }
        })

        boxTimeline.from(boxes, {
            yPercent: 100,
            scale: 1.1,
            stagger: 0.5
        })

    }, []);

    return (
        <section className='relative pt-[50vh]'>
            <Navbar />

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

            <div ref={bannerRef} className='fixed top-0 w-full h-screen flex justify-center items-center'>
                <h3 className='font-allenoire lg:text-8xl md:text-7xl text-6xl sectiontitle'>Projects</h3>
            </div>

            <div ref={boxRef} className='relative h-[80vh]'>
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
                            <a href={project.gitHubLink} target='_blank' className='w-30 flex justify-center items-center gap-1 hover:gap-2 text-2xl rounded-full text-stone-950 bg-white transition-all hover:scale-110 cursor-pointer py-2'>
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
            </div>

            <div className='responsive-container relative my-15'>
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