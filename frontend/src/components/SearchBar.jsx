// src/components/SearchBar.jsx

import React, { useState } from 'react';

const SearchBar = ({ onSearch, initialQuery = "" }) => {
    const [searchQuery, setSearchQuery] = useState(initialQuery);

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery); // Dışarıdan gelen onSearch fonksiyonunu çağırır
        setSearchQuery(""); // Arama yapıldıktan sonra input'u temizler
    };

    return (
        <form onSubmit={handleSearch} className='search-form max-w-[600px] mt-6 mx-auto md:mb-[25px] mb-[15px] flex gap-[16px] py-0 px-[16px]'>
            <input 
                type="text" 
                placeholder='Search...' 
                className='search-input flex-1 py-[12px] px-[16px] border-none rounded-md bg-bgHome text-white text-[16px] focus:outline-none shadow-home' 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
                type='submit' 
                className='search-button py-[12px] px-[24px] bg-bgSearch text-white rounded-md font-500 whitespace-nowrap transition-colors duration-200 hover:bg-hoverSearch'
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;