import React from 'react'
import { Link, useParams } from 'react-router'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';
import { detailProjects } from '../contants';



function ProjectDetail() {
    const { id } = useParams();
    // console.log(id);

    const findProject = detailProjects.find(project => project.id == id);
    // console.log(findProject);

    if(!findProject) return <p>Not found</p>

    useGSAP(()=>{
        document.fonts.ready.then(()=>{
            const titleSplit = SplitText.create('.projecttitle', {type: "words, chars"});
            const subtitle1Split = SplitText.create('.subtitle1', {type: "words, chars"});
            const description1Split = SplitText.create('.description1', {type: "lines"});
            const subtitle2Split = SplitText.create('.subtitle2', {type: "words, chars"});
            const description2Split = SplitText.create('.description2', {type: "lines"});
            const featuretitleSplit = SplitText.create('.featuretitle', {type: "words, chars"});

            gsap.timeline({
                ease: "power1.inOut"
            })
            .from(titleSplit.chars, {
                opacity: 0,
                scale: 1.1,
                filter: 'blur(5px)',
                stagger: 0.02
            })
            .from(subtitle1Split.chars, {
                opacity: 0,
                scale: 1.1,
                filter: 'blur(5px)'
            }, 0.3)
            .from(description1Split.lines, {
                opacity: 0,
                scale: 1.1,
                filter: 'blur(5px)',
                stagger: 0.02
            }, 0.3)
            .from(subtitle2Split.chars, {
                opacity: 0,
                scale: 1.1,
                filter: 'blur(5px)'
            }, 1)
            .from(description2Split.lines, {
                opacity: 0,
                scale: 1.1,
                filter: 'blur(5px)',
                stagger: 0.02
            }, 1)
            .from(featuretitleSplit.chars, {
                opacity: 0,
                scale: 1.1,
                filter: 'blur(5px)'
            })
            .from('.featurelist > li', {
                opacity: 0,
                scale: 1.1,
                filter: 'blur(5px)',
                stagger: 0.02
            })
            .from('.links', {
                opacity: 0,
                scale: 1.1,
                filter: 'blur(5px)',
                stagger: 0.02
            })


            gsap.timeline({
                scrollTrigger: {
                    trigger: '.images',
                    start: 'top center'
                }
            })
            .from('.images', {
                opacity: 0,
                scale: 1.1,
                filter: 'blur(5px)',
                stagger: 0.02
            })
        })
    })

    return (
        <section>
            <Navbar />

            <div className='responsive-container overflow-hidden py-30'>
                <h3 className='font-allenoire lg:text-5xl md:text-4xl text-3xl text-center mb-10 projecttitle'>
                    {findProject.title}
                </h3>

                <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5'>
                    <div className={'md:col-span-2'}>
                        <p className='md:text-xl text-lg font-bold mb-2 subtitle1'>Overview</p>
                        <p className='text-gray-400 lg:text-lg text-base lg:leading-loose leading-relaxed description1'>
                            {findProject.overview}
                        </p>
                    </div>
                    <div className={''}>
                        <p className='md:text-xl text-lg font-bold mb-2 subtitle2'>Technologies used</p>
                        <p className='text-gray-400 lg:text-lg text-base lg:leading-loose leading-relaxed description2'>
                            {findProject.tech.join(", ")}
                        </p>
                    </div>
                    <div className={'row-span-2'}>
                        <p className='md:text-xl text-lg font-bold mb-2 featuretitle'>Features</p>
                        <ul className='list-disc pl-5 featurelist'>
                            {findProject.features.map((feature, idx) => (
                                <li key={idx}>
                                    <p className='text-gray-400 lg:text-lg text-base lg:leading-loose leading-relaxed'>
                                        {feature}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                    <div className={''}>
                        <div className='flex items-center gap-5 links'>
                            <a href={findProject.demoLink} target='_blank' className='flex justify-center items-center gap-2 hover:gap-3 sm:text-2xl text-xl rounded-full text-stone-950 bg-white transition-all hover:scale-105 cursor-pointer px-3 py-2'>
                                <span className='sm:text-base text-sm'>Go Live</span>
                                <ion-icon name="eye"></ion-icon>
                            </a>
                            <a href={findProject.gitHubLink} target='_blank' className='size-10 flex justify-center items-center text-2xl rounded-[50%] text-stone-950 bg-white transition hover:scale-110 cursor-pointer'>
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </div>
                    </div>
                    <div className={'md:col-span-2 images'}>
                        <div className='relative w-full max-sm:h-75 rounded-lg overflow-hidden'>
                            <img src={findProject.img.desktop} className='size-full object-cover object-top' />
                        </div>
                    </div>
                    <div className={'md:col-span-2 images'}>
                        <div className='relative w-full max-sm:h-75 rounded-lg overflow-hidden'>
                            <img src={findProject.img.mobile} className='size-full object-cover object-top' />
                        </div>
                    </div>
                </div>

                <Breadcrumb
                    className='mt-20'
                    title1='Projects showcase'
                    route1='/projects'
                    title2='About me'
                    route2='/about'
                />
            </div>
        </section>
    )
}

export default ProjectDetail