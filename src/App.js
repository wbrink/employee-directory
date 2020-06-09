import React, {useState, useEffect, useContext, createContext} from 'react';
import './App.css';
import Search from './components/Search';
import EmployeeList from './components/EmployeeList';
import SearchContext from "./SearchContext";

function App() {

  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{search, setSearch}}>
      <div className="App">
        <header>
          <h1>Employee Directory</h1>
        </header>

        <Search />
        <EmployeeList />
      </div>

    </SearchContext.Provider>
    
  );
}

export default App;
