import React from 'react';
import './App.css';
import FetchRandomUser from './components/FetchRandomUser'

function App() {
  return (
    <React.Fragment>
      <div className="Grid">
        <div className="Row">
          <div className="User"><FetchRandomUser /></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
