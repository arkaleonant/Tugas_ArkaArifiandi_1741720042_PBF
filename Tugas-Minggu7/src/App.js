import React from 'react';
import CreateTodo from './containers/CreateTodo';
import Table from './containers/Table';

function App() {
  return (
    <div className="App">
      <div>
        <CreateTodo/>
      </div>
      <Table/>
    </div>
  );
}

export default App;