import React, {useContext} from "react";
import SearchContext from "../../SearchContext";

export default function Search(props) {

  const {search, setSearch} = useContext(SearchContext);

  return (
    <h3>Search</h3>
  )
}

