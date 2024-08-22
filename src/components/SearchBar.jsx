import React, { useEffect, useRef } from 'react';
import '../style/SearchBar.css';

function SearchBar() {
    const searchBtnRef = useRef(null);
    const searchInputRef = useRef(null);

    useEffect(() => {
        const searchButton = searchBtnRef.current;
        const searchInput = searchInputRef.current;

        const handleSearch = () => {
            let query = searchInput.value;
            let personElement = document.getElementById(query);
            if (personElement) {
                personElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Name not found!');
            }
        };

        searchButton.addEventListener('click', handleSearch);

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            searchButton.removeEventListener('click', handleSearch);
        };
    }, []);  // The empty dependency array means this effect runs once after the component is mounted

    return (
        <div className="search-container">
            <input type="text" id="searchInput" ref={searchInputRef} placeholder="Search names..."/>
            <button id="searchBtn" ref={searchBtnRef}>Search</button>
        </div>
    );
}

export default SearchBar;