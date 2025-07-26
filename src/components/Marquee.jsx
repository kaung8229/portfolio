import React from 'react'
import { skillset } from '../contants'
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

function Marquee() {

    useGSAP(()=>{
        gsap.to('.marquee', {
            xPercent: -100,
            repeat: -1,
            duration: 20,
            ease: 'none'
        })
    }, []);

    return (
        <div className='absolute left-0 bottom-0 flex text-stone-950 bg-white py-3'>
            <div className='absolute w-screen h-full z-20 overlay-gradient'></div>
            <ul className='flex items-center gap-5 marquee'>
                {skillset.additional.map((text, idx)=>(
                    <div key={idx} className='flex items-center gap-5 first:pl-5'>
                        <li className='sm:text-xl text-lg font-bold text-nowrap'>{text}</li>
                        <ion-icon name="ellipse"></ion-icon>
                    </div>
                ))}
            </ul>
            <ul className='flex items-center gap-5 marquee'>
                {skillset.additional.map((text, idx)=>(
                    <div key={idx} className='flex items-center gap-5'>
                        <li className='sm:text-xl text-lg font-bold text-nowrap'>{text}</li>
                        <ion-icon name="ellipse"></ion-icon>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Marquee