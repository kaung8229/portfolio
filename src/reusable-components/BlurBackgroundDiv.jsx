import React from 'react'

function BlurBackgroundDiv({className, children}) {
    return (
        <div className={`backdrop-blur-[3px] bg-stone-950/80 border border-gray-700 rounded-2xl p-5 sm:p-8 ${className}`}>
            {children}
        </div>
    )
}

export default BlurBackgroundDiv