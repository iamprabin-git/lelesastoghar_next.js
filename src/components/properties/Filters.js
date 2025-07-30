<<<<<<< HEAD
"use client"
import React, { useState } from 'react'
import PropertyDrawer from './Drawer';
import { FiFilter } from "react-icons/fi";

function PropertyFilters({brands, categories}) {
    const [showFilters, setShowFilters] = useState(false);
  return (
    <div className='container '>
        <button onClick={() => setShowFilters(!showFilters)} 
        className='bg-slate-600 text-white items-center border flex rounded-lg px-3 py-1 hover:bg-slate-100 hover:text-black'>
        <span>Filters</span> <FiFilter /></button>
        <PropertyDrawer 
        brands={brands}
        categories={categories}
        showFilters={showFilters} 
        setShowFilters={setShowFilters}/>   
    </div>
  )
}

=======
"use client"
import React, { useState } from 'react'
import PropertyDrawer from './Drawer';
import { FiFilter } from "react-icons/fi";

function PropertyFilters({brands, categories}) {
    const [showFilters, setShowFilters] = useState(false);
  return (
    <div className='container '>
        <button onClick={() => setShowFilters(!showFilters)} 
        className='bg-slate-600 text-white items-center border flex rounded-lg px-3 py-1 hover:bg-slate-100 hover:text-black'>
        <span>Filters</span> <FiFilter /></button>
        <PropertyDrawer 
        brands={brands}
        categories={categories}
        showFilters={showFilters} 
        setShowFilters={setShowFilters}/>   
    </div>
  )
}

>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
export default PropertyFilters;