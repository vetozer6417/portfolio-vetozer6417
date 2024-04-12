import React, { ReactNode } from 'react';
import { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

interface CarouselProps {
  children: ReactNode[];
}

function Carousel({ children }: CarouselProps) {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1))

    const imageWidth = children.length > 0 ? (children[0] as JSX.Element).props.width : 'auto';
    const containerStyle = { width: imageWidth };

    return (
        <div className='overflow-hidden relative' style={containerStyle}>
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr*100}%)`}}>
                {children}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-2'>
                <button onClick={prev} className='
                bg-primary 
                px-1 
                text-sm
                border-t-2
                border-l-2
                border-b-2 border-b-zinc-600
                border-r-2 border-r-zinc-600
                '>
                    Prev
                    {/* <FaChevronCircleLeft size={30}/> */}
                </button>
                <button onClick={next} className='
                bg-primary 
                px-1 
                text-sm
                border-t-2
                border-l-2
                border-b-2 border-b-zinc-600
                border-r-2 border-r-zinc-600
                '>
                    Next
                    {/* <FaChevronCircleRight size={30}/> */}
                </button>
            </div>
        </div>
    );
}

export default Carousel;
