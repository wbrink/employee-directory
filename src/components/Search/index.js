import React, {useContext} from "react";
import SearchContext from "../../SearchContext";
import "./style.css";

export default function Search(props) {

  const {search, setSearch} = useContext(SearchContext);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  
  return (
    <div className="form">
      <label htmlFor="search">Search Name</label>
      <input type="text" id="search" onChange={handleChange}/>
    </div>
    
  )
}