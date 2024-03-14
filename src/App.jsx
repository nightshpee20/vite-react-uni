import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Add from './pages/Add';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';
import SelectedItems from './components/SelectedItems';

export default function App() {

  const [results, setResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="app">
      <div className="container">
        <SelectedItems selectedItems={selectedItems} />

        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} setSelectedItems={setSelectedItems} />

        <Link to="/add"><button>Add Item</button></Link>
      </div>
    </div>
  );
}
