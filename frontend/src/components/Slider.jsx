// src/components/Slider.jsx

import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


function Slider({title, items, type}) {
    const navigate = useNavigate();
    const scrollRef = useRef(null); 

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            if (direction === 'left') current.scrollLeft -= 400;
            else current.scrollLeft += 400;
        }
    }

    // Mükerrer öğeleri ayıklayan kısım
    const uniqueItems = items.reduce((unique, item) => {
        if (!unique.some(u => u.id === item.id)) {
            unique.push(item);
        }
        return unique;
    }, []);


    return (
        <div className='mb-10 relative'>
            <div className='flex items-center justify-between px-4 mb-2'>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <button
                    onClick={() => navigate(`/see-all/${type}`)}
                    className='text-blue-400 hover:underline text-sm mb-[5px] px-[25px]'
                >
                    See All
                </button>
            </div>

            <button 
                onClick={() => scroll('left')} 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 p-2 rounded-full z-10 text-white hidden md:block"
            >
                <FiChevronLeft size={28} />
            </button>

            <button 
                onClick={() => scroll('right')} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 p-2 rounded-full z-10 text-white hidden md:block"
            >
                <FiChevronRight size={28} />
            </button>

            <div 
                ref={scrollRef}
                className='flex gap-4 overflow-x-auto px-4 scrollbar-hide scroll-smooth ml-[10px] mr-[15px]'>
                {uniqueItems // **Düzeltme: Burada "items" yerine "uniqueItems" kullanıyoruz**
                    .filter(item => item.poster_path || item.profile_path)
                    .map((item) => (
                        <Link
                            to={`/${type}/${item.id}`}
                            key={item.id}
                            className='shrink-0 w-[200px]'
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w200${item.poster_path || item.profile_path}`}
                                alt={item.title || item.name}
                                className='rounded-md w-full h-auto'
                            />
                            <p className='mt-3 text-md text-white text-center '>
                                {item.title || item.name}
                            </p>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default Slider