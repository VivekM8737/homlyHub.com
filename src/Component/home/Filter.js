import React,{useState} from 'react'
import FilterModal from './FilterModal'

const Filter = () => {
  // state for controlling model visibility
  const [isModalOpen,setIsModelOpen]=useState(false)
  // state for selected filter
  const [selectedFilters,setSelectedFilters]=useState({})
  const handleOpenModel = ()=>{
    setIsModelOpen(true);
  }
  // fuction to hadle  closing the modle
  const hadleCloseModel=()=>{
      setIsModelOpen(false);
  }
  const hadleFilterChange=(filterName,value)=>{
    // update the selected filters
    setSelectedFilters((prevFilters)=>({
      ...prevFilters, // its store the previouse value of filter  
      [filterName]: value,
    }))
  }
  return (
    <>
      <span className="material-symbols-outlined fliter c_ptr" onClick={handleOpenModel}>
        tune
      </span>
      {isModalOpen&& (
        <FilterModal selectedFilters={selectedFilters} onFilterChange={hadleFilterChange} onClose={hadleCloseModel}/>
      )}
    </>
  )
}

export default Filter