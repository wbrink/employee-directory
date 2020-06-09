import React, {useContext} from "react";
import SearchContext from "../../SearchContext";
import "./style.css";

export default function Search(props) {

  const {search, setSearch} = useContext(SearchContext);

  return (
    <div className="form">
      <label htmlFor="search">Search Here</label>
      <input type="text" id="search"/>
    </div>
    
  )
}