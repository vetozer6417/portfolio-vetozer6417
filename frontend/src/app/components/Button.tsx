'use client'

import Link from "next/link";

function Button({ width, height, children } : { width: number, height: number, children: React.ReactNode  }) {
    return (
        <button className={`bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 
            shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
            rounded-lg
            px-10 py-2 
            flex items-center text-center
            w-${width} h-${height}`
        }>  
            <Link href='/'>
                <p className="text-white text-lg font-lato italic font-semibold">{children}</p>
            </Link>
        </button>
    );
}

export default Button;