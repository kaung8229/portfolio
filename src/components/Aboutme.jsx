import React, { lazy, Suspense } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all";


import { marquessTexts } from '../contants'

import Navbar from './Navbar'
import Breadcrumb from './Breadcrumb';
import BlurBackgroundDiv from '../reusable-components/BlurBackgroundDiv';
import DotGrid from '../reactbits/DotGrid';
// import GreetRobot from '../spline/GreetRobot';
// import Spline from '@splinetool/react-spline';

const GreetRobot = lazy(()=> import('../spline/GreetRobot'));

function Aboutme() {

    useGSAP(()=>{
        document.fonts.ready.then(()=>{
            const abouttitleSplit = SplitText.create('.abouttitle', {type: "words, chars"});

            gsap.timeline({
                ease: 'power1.inOut'
            })
            .from(abouttitleSplit.chars, {
                opacity: 0,
                filter: 'blur(5px)',
                scale: 1.5,
                stagger: 0.05
            })
            .from('.aboutboxes > div', {
                opacity: 0,
                yPercent: 100,
                stagger: 0.1
            })
        })

    }, [])

    return (
        <>
            <section className='py-20'>
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
                <div className='responsive-container'>
                    <h3 className='text-4xl lg:text-5xl font-allenoire text-center my-10 abouttitle'>Who am I ?</h3>
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 lg:mb-20 mb-10 aboutboxes">
                        <BlurBackgroundDiv className="md:max-w-[100%] max-w-[100%] row-span-2 flex justify-center items-center">
                            <div className='relative w-full lg:h-100 h-75'>
                                <Suspense fallback={<></>}>
                                    <GreetRobot />
                                </Suspense>
                                <div className='absolute bottom-0 right-0 w-full h-15 bg-stone-950'></div>
                            </div>
                        </BlurBackgroundDiv>
                        <BlurBackgroundDiv className="md:max-w-[100%] max-w-[100%]">
                            <p className='lg:text-lg text-base lg:leading-loose leading-relaxed'>
                            Hi, Nice to meet you. <br/> I'm Kaung Myat Hein, a front-end Web developer who loves creating clean, responsive and interactive websites. I specialize in React, Redux and Tailwind Css and I enjoy turning ideas into polished digital experiences. I'm passionate about writing maintainable code and learning new technologies.
                            </p>
                        </BlurBackgroundDiv>
                        <BlurBackgroundDiv className="md:max-w-[100%] max-w-[100%] flex sm:flex-row flex-col gap-3 items-center">
                            <div className='flex sm:border-r pr-3'>
                                <a href='' className='size-10 flex justify-center items-center text-3xl rounded-[50%]'>
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                                <a href='' className='size-10 flex justify-center items-center text-3xl rounded-[50%]'>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </div>
                            <div>
                                <p className='lg:text-lg text-base lg:leading-loose leading-relaxed'>
                                    kaung8229@gmail.com
                                </p>
                            </div>
                        </BlurBackgroundDiv>
                        <BlurBackgroundDiv className="md:max-w-[100%] max-w-[100%]">
                            <h3 className='md:text-xl text-lg font-bold mb-2'>
                                Languages
                            </h3>
                            <p className='lg:text-lg text-base lg:leading-loose leading-relaxed'>
                                HTML, CSS, Javascript(ES6+)
                            </p>
                        </BlurBackgroundDiv>
                        <BlurBackgroundDiv className="md:max-w-[100%] max-w-[100%]">
                            <h3 className='md:text-xl text-lg font-bold mb-2'>
                                Tools & Platforms
                            </h3>
                            <p className='lg:text-lg text-base lg:leading-loose leading-relaxed'>
                                Git & GitHub, Vite, Adobe XD
                            </p>
                        </BlurBackgroundDiv>
                        <BlurBackgroundDiv className="md:max-w-[100%] max-w-[100%]">
                            <h3 className='md:text-xl text-lg font-bold mb-2'>
                                Frameworks & libraries
                            </h3>
                            <p className='lg:text-lg text-base lg:leading-loose leading-relaxed'>
                                React, Redux, Bootstrap, Tailwind CSS, CSS Modules, Styled-components
                            </p>
                        </BlurBackgroundDiv>
                        <BlurBackgroundDiv className="md:max-w-[100%] max-w-[100%]">
                            <h3 className='md:text-xl text-lg font-bold mb-2'>
                                Development Practices
                            </h3>
                            <p className='lg:text-lg text-base lg:leading-loose leading-relaxed'>
                                {marquessTexts.join(", ")}
                            </p>
                        </BlurBackgroundDiv>
                    </div>

                    <div className='relative h-auto md:h-[50vh] flex flex-col md:flex-row items-center justify-between gap-20 md:gap-15'>
                        <div className='md:self-start w-full md:w-[50%] flex flex-col md:flex-row items-center'>
                            <BlurBackgroundDiv className={'shrink-0 max-sm:w-[100%] text-center md:text-right'}>
                                <h3 className='text-lg font-bold'>Advanced Diploma in Computing</h3>
                                <p className='my-2'>Amity Global Institute</p>
                                <p>January 2024 | Augest 2025</p>
                            </BlurBackgroundDiv>

                            <div className='relative z-10 w-1 md:w-full h-5 md:h-1 bg-gray-500 before:content-[""] before:absolute before:-right-1 md:before:right-0 before:top-[100%] md:before:-top-1 before:size-3 before:rounded-[50%] before:bg-gray-500'></div>
                        </div>

                        <h3 className='absolute top-[45%] md:top-[50%] left-[50%] translate-x-[-50%] md:translate-[-50%] md:rotate-90 text-5xl md:text-6xl font-allenoire'>Education</h3>

                        <div className='md:self-end w-full md:w-[50%] flex flex-col md:flex-row items-center'>
                            <div className='relative z-10 w-1 md:w-full h-5 md:h-1 bg-gray-500 before:content-[""] before:absolute before:-left-1 md:before:left-0 before:-top-3 md:before:-top-1 before:size-3 before:rounded-[50%] before:bg-gray-500'></div>
                            <BlurBackgroundDiv className={'shrink-0 max-sm:w-[100%] text-center md:text-right'}>
                                <h3 className='text-lg font-bold'>Advanced Diploma in Computing</h3>
                                <p className='my-2'>Amity Global Institute</p>
                                <p>January 2024 | Augest 2025</p>
                            </BlurBackgroundDiv>
                        </div>
                    </div>

                    <Breadcrumb
                        className='relative mt-10'
                        title1='Home'
                        route1='/'
                        title2='Projects showcase'
                        route2='/projects'
                    />
                </div>
            </section>
        </>
    )
}

export default Aboutme