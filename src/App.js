import React from 'react';
import logo from './logo.svg';
import './App.css';

// import PeopleList from './components/PeopleList.js';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <div className="main-container">
        <h2>Star Wars People List</h2>
        <div>
          A single page application where users can view the details 
          about all the people in the Star Wars Universe.
        </div>

        {/* <PeopleList 
          peopleListData = {this.state.peopleListData}
        /> */}
      </div>
    </div>
  );
}

export default App;
