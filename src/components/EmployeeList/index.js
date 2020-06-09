import React, {useContext} from "react";
import SearchContext from "../../SearchContext";
import data from "../../employees.json";

export default function EmployeeList(props) {
  
  const {search, setSearch} = useContext(SearchContext);

  return(

    <ul class="list-group">
      {
      search == "" 
      ?  data.map(el => {
          return (
            <li class="list-group-item">{el.name} {el.department} {el.salary}</li>
          )
        })
      
      : data.map(el => {
        if (el.name.toLowerCase().startsWith(search.toLowerCase())) {
          return (
            <li class="list-group-item">{el.name} {el.department} {el.salary}</li>
          )
        }
      })

      }
    </ul>
  )
}

