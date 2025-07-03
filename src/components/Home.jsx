import React, { lazy, Suspense, useRef } from 'react'
import { Link } from 'react-router'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all";

import Navbar from './Navbar'
import Marquee from './Marquee'
import DotGrid from '../reactbits/DotGrid';

function Home() {
    const projectRef = useRef(null);
    const aboutRef = useRef(null);

    useGSAP(()=>{
        document.fonts.ready.then(()=>{
            const titleSplit = SplitText.create('.title', {type: 'words,chars'});
            const subtitle1Split = SplitText.create('.subtitle1', {type: 'words,chars'});
            const subtitle2Split = SplitText.create('.subtitle2', {type: 'words,chars'});
            
            gsap.timeline({
                ease: 'power1.out'
            })
            .to('#fadeIn',{
                opacity: 1
            })
            .from(subtitle1Split.chars, {
                opacity: 0,
                filter: 'blur(5px)',
                stagger: 0.03
            }, 0)
            .from(titleSplit.chars, {
                opacity: 0,
                xPercent: -100,
                filter: 'blur(5px)',
                stagger: 0.03
            }, 0.5)
            .from(subtitle2Split.chars, {
                opacity: 0,
                filter: 'blur(5px)',
                stagger: 0.03
            }, 0)
            .from([projectRef.current, aboutRef.current], {
                xPercent: 100,
                stagger: 0.2
            })
        })

        gsap.set('.pj-boxs > div', { y: 500 });
        gsap.set('.ab-boxs > div', { y: 500 });

        const onMove = (e, ele)=>{
            const ew = e.target.closest('div').offsetWidth;
            const eh = e.target.closest('div').offsetHeight;
            const cx = e.clientX - e.target.closest('div').offsetLeft;
            const cy = e.clientY - e.target.closest('div').offsetTop;

            const px = Math.round((cx / ew) * 100);
            const py = Math.round((cy / eh) * 100);

            gsap.to(ele, {
                x: cx,
                y: cy,
                stagger: 0.02
            })
        }
        const onEnter = (ele)=>{
            gsap.to(ele, {
                y: 0,
                stagger: 0.1
            })
        }
        const onLeave = (ele)=>{
            gsap.to(ele, {
                y: 500,
                stagger: 0.1
            })
        }

        projectRef.current.addEventListener('mousemove', (e)=> onMove(e, '.pj-boxs > div'));
        projectRef.current.addEventListener('mouseenter', ()=> onEnter('.pj-boxs > div'));
        projectRef.current.addEventListener('mouseleave', ()=> onLeave('.pj-boxs > div'));

        aboutRef.current.addEventListener('mousemove', (e)=> onMove(e, '.ab-boxs > div'));
        aboutRef.current.addEventListener('mouseenter', ()=> onEnter('.ab-boxs > div'));
        aboutRef.current.addEventListener('mouseleave', ()=> onLeave('.ab-boxs > div'));

        return ()=>{
            projectRef.current.removeEventListener('mousemove', onMove);
            projectRef.current.removeEventListener('mouseenter', onEnter);
            projectRef.current.removeEventListener('mouseleave', onLeave);

            aboutRef.current.removeEventListener('mousemove', onMove);
            aboutRef.current.removeEventListener('mouseenter', onEnter);
            aboutRef.current.removeEventListener('mouseleave', onLeave);
        }

    }, []);

    return (
        <section className='overflow-hidden'>
            <div id='fadeIn' className='relative h-screen flex lg:flex-row flex-col items-center opacity-0'>
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

                <div className='relative lg:w-[50%] w-full lg:h-full h-[50%] flex flex-col justify-center gap-5 max-lg:text-center xl:pl-30 lg:pl-20 max-lg:pt-20 max-lg:px-5'>
                    <p className='md:text-2xl text-xl font-bold text-gray-500 subtitle1'>
                        Hi, I'm Kaung Myat Hein
                    </p>
                    <p className='font-allenoire lg:text-[5vw] sm:text-[7vw] text-4xl title'>
                        Frontend Web Developer
                    </p>
                    <p className='md:text-2xl text-xl font-bold subtitle2'>
                        who loves creating clean, responsive and interactive websites.
                    </p>
                </div>

                <div className='lg:w-[50%] w-full lg:h-full h-[50%] pb-10'>
                    <Link to={'/projects'}>
                        <div ref={projectRef} className='relative h-[50%] grid place-items-center text-stone-950 bg-white overflow-hidden max-sm:px-5 transition-opacity duration-500 '>
                            <button className='relative z-40 font-allenoire md:text-5xl text-4xl cursor-pointer hover:underline'>Projects Showcase</button>
                            <div className='max-lg:hidden absolute top-0 left-0 pj-boxs pointer-events-none'>
                                <div className='absolute top-0 left-0 z-30 -translate-1/2 rotate-5 size-25 bg-red-500'></div>
                                <div className='absolute top-0 left-0 z-20 -translate-1/2 -rotate-5 size-35 bg-blue-500'></div>
                                <div className='absolute top-0 left-0 z-10 -translate-1/2 rotate-15 size-45 bg-green-500'></div>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/about'}>
                        <div ref={aboutRef} className='relative h-[50%] grid place-items-center bg-amber-500 overflow-hidden max-sm:px-5 transition-opacity duration-500'>
                            <button className='relative z-40 font-allenoire md:text-5xl text-4xl cursor-pointer hover:underline'>About me</button>
                            <div className='max-lg:hidden absolute top-0 left-0 ab-boxs pointer-events-none'>
                                <div className='absolute top-0 left-0 z-30 -translate-1/2 rotate-5 size-25 bg-red-500'></div>
                                <div className='absolute top-0 left-0 z-20 -translate-1/2 -rotate-5 size-35 bg-blue-500'></div>
                                <div className='absolute top-0 left-0 z-10 -translate-1/2 rotate-15 size-45 bg-green-500'></div>
                            </div>
                        </div>
                    </Link>
                </div>

                <Marquee />
            </div>
        </section>
    )
}

export default Home