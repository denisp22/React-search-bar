import React from 'react';
import SearchBar from './SearchBar';
import UserForm from './UserForm';

function App() {
  return (
    <div className="App container p-5">
      <div className="row">
        <div className="col">
          <SearchBar/>
        </div>

        <div className="col">
          <UserForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
