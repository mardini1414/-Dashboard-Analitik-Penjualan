import React from 'react';
import { Input } from './ui/input';

function SearchBar({ onChange }) {
  return <Input className="mb-4" placeholder="search" onChange={onChange} />;
}

export default SearchBar;
