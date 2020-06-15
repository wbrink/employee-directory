import React, {useContext, useState, useEffect} from "react";
import SearchContext from "../../SearchContext";
import data from "../../employees.json";

export default function EmployeeList(props) {
  
  const {search, setSearch} = useContext(SearchContext);
  const [employees, setEmployees] = useState([]);

  const sortName = () => {
    // console.log("sorting names", employees);
    setEmployees(Array.from(employees.sort((a,b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    })));
  }

  const sortDepartment = () => {
    setEmployees(Array.from(employees.sort((a,b) => {
      if (a.department.toLowerCase() < b.department.toLowerCase()) {
        return -1;
      } else if (a.department.toLowerCase() > b.department.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    })));
  }

  const sortSalary = () => {
    setEmployees(Array.from(employees.sort((a,b) => {
      if (a.salary < b.salary) {
        return -1;
      } else if (a.salary > b.salary) {
        return 1;
      } else {
        return 0;
      }
    })))
  }

  useEffect(() => {
    setEmployees(Array.from(data));
  }, [])

  return(
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={sortName}>Name</th>
          <th scope="col" onClick={sortDepartment}>Department</th>
          <th scope="col" onClick={sortSalary}>Salary</th>
        </tr>
      </thead>
      <tbody>
        { search == "" ? employees.map(el => {return (<tr><td>{el.name}</td><td>{el.department}</td><td>{el.salary}</td></tr>) }) 
          : employees.map(el => {
            if (el.name.toLowerCase().startsWith(search.toLowerCase())) {
              return (
                <tr>
                  <td>{el.name}</td>
                  <td>{el.department}</td>
                  <td>{el.salary}</td>
                </tr>
              )
            }
          })

        }
      </tbody>
    </table>
  )
}

