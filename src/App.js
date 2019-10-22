import React from 'react';
import './App.css';
import FetchRandomUser from './components/FetchRandomUser'

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <FetchRandomUser />
      </div>
      <div className="App">
        <FetchRandomUser />
      </div>
    </React.Fragment>
  );
}

export default App;
