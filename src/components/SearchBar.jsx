import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

export default function SearchBar({ setResults }) {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("http://127.0.0.1:8080/food-lookup")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((food) => {
                    return (
                        value &&
                        food &&
                        food.name &&
                        food.name.toLowerCase().includes(value.toLowerCase())
                    )
                });
                setResults(results);
            });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return <>
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    </>
}