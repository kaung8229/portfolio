import React from 'react'
import { Link } from 'react-router';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all";

function Navbar({className=""}) {

    useGSAP(()=>{
        document.fonts.ready.then(()=>{
            const shortnameSplit = SplitText.create('.shortname', {type: "words, chars"});

            gsap.from(shortnameSplit.chars, {
                opacity: 0,
                filter: 'blur(5px)',
                scale: 1.5,
                stagger: 0.2
            })
        })
    }, [])

    return (
        <nav className={`${className}`}>
            <div className='py-5'>
                <Link to={"/"}>
                    <h3 className='font-allenoire lg:text-3xl text-2xl shortname'>KMH.</h3>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar