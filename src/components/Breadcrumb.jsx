import React from 'react'
import { Link } from 'react-router'

function Breadcrumb({className='', title1='', route1='/', title2='', route2='/'}) {
    return (
        <div className={`flex justify-between items-center ${className}`}>
            <Link to={`${route1}`}>
                <button className='flex justify-center items-center gap-2 hover:gap-3 sm:text-2xl text-xl rounded-full text-stone-950 bg-white transition-all hover:scale-105 cursor-pointer px-3 py-2'>
                    <ion-icon name="arrow-back-circle"></ion-icon>
                    <span className='sm:text-base text-sm'>{title1}</span>
                </button>
            </Link>
            <Link to={`${route2}`}>
                <button className='flex justify-center items-center gap-2 hover:gap-3 sm:text-2xl text-xl rounded-full text-stone-950 bg-white transition-all hover:scale-105 cursor-pointer px-3 py-2'> 
                    <span className='sm:text-base text-sm'>{title2}</span>
                    <ion-icon name="arrow-forward-circle"></ion-icon>
                </button>
            </Link>
        </div>
    )
}

export default Breadcrumb