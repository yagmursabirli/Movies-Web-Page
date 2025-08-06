// src/components/BackToTopButton.jsx

import React, { useState, useEffect } from 'react'; 
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false); 

  
  const toggleVisibility = () => {
    if (window.scrollY > 300) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); 

  return (
    <div className="fixed bottom-5 right-5 z-[999]">
      {isVisible && ( 
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
          aria-label="Sayfanın en üstüne dön"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;