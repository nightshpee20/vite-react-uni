import React from 'react';
import './SearchResult.css';

export default function SearchResult({ result, setSelectedItems }) {
    return <>
        <div
            className="search-result"
            onClick={(e) => setSelectedItems((prevState) => {
                return [...prevState, result];
            })}
        >
            {result.name}
        </div>
    </>
}