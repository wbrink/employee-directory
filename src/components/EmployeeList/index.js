import React, {useContext, useState, useEffect} from "react";
import SearchContext from "../../SearchContext";
import data from "../../employees.json";

export default function EmployeeList(props) {
  
  const {search, setSearch} = useContext(SearchContext);
  const [employees, setEmployees] = useState([]);
  const [sorted, setSorted] = useState({
    name: "ascend",
    department: "ascend",
    salary: "ascend"
  })

  // if they were clicked to sort
  const [nameSort, setNameSort] = useState(false);
  const [deptSort, setdeptSort] = useState(false);
  const [salarySort, setSalarySort] = useState(false);

  const sortName = () => {
    setNameSort(true);
    setdeptSort(false);
    setSalarySort(false);
    if (sorted.name == "ascend") {
      setEmployees(Array.from(employees.sort((a,b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      })));
      setSorted({...sorted, name: "descend"});
    } else {
      setEmployees(Array.from(employees.sort((a,b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      })));
      setSorted({...sorted, name: "ascend"});
    }
    
  }

  const sortDepartment = () => {
    setdeptSort(true);
    setNameSort(false);
    setSalarySort(false);
    if (sorted.department == "ascend") {
      setEmployees(Array.from(employees.sort((a,b) => {
        if (a.department.toLowerCase() < b.department.toLowerCase()) {
          return -1;
        } else if (a.department.toLowerCase() > b.department.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      })));
      setSorted({...sorted, department: "descend"});
    } else {
      setEmployees(Array.from(employees.sort((a,b) => {
        if (a.department.toLowerCase() > b.department.toLowerCase()) {
          return -1;
        } else if (a.department.toLowerCase() < b.department.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      })));
      setSorted({...sorted, department: "ascend"});
    }
    
  }

  const sortSalary = () => {
    setSalarySort(true);
    setdeptSort(false);
    setNameSort(false);
    if (sorted.salary == "ascend") {
      setEmployees(Array.from(employees.sort((a,b) => {
        if (a.salary < b.salary) {
          return -1;
        } else if (a.salary > b.salary) {
          return 1;
        } else {
          return 0;
        }
      })))
      setSorted({...sorted, salary: "descend"})
    } else {
      setEmployees(Array.from(employees.sort((a,b) => {
        if (a.salary > b.salary) {
          return -1;
        } else if (a.salary < b.salary) {
          return 1;
        } else {
          return 0;
        }
      })))
      setSorted({...sorted, salary: "ascend"})
    }
    
  }

  useEffect(() => {
    setEmployees(Array.from(data));
  }, [])

  return(
    <table className="table">
      <thead>
        <tr>


          {nameSort === false 
            ? <th scope="col" onClick={sortName}>Name</th>
            : sorted.name == "ascend"
              ? <th scope="col" onClick={sortName}>Name <svg class="bi bi-caret-up-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg></th> 
              : <th scope="col" onClick={sortName}>Name <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg></th>
          }  

          {deptSort === false 
            ? <th scope="col" onClick={sortDepartment}>Department</th>
            : sorted.department == "ascend"
              ? <th scope="col" onClick={sortDepartment}>Department <svg class="bi bi-caret-up-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg></th> 
              : <th scope="col" onClick={sortDepartment}>Department <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg></th>
          }  

          {salarySort === false 
            ? <th scope="col" onClick={sortSalary}>Salary</th>
            : sorted.salary == "ascend"
              ? <th scope="col" onClick={sortSalary}>Salary <svg class="bi bi-caret-up-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg></th> 
              : <th scope="col" onClick={sortSalary}>Salary <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg></th>
          }  
            
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

