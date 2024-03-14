import React from 'react';
import './SearchResultsList.css';
import SearchResult from './SearchResult';

export default function SearchResultsList({ results, setSelectedItems }) {
    return <>
        <div className="results-list">
            {
                results.map((result, id) => {
                    return <SearchResult setSelectedItems={setSelectedItems} result={result} key={id} />
                })
            }
        </div>
    </>
}