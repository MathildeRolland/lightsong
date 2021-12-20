import React from 'react';

// == COMPONENTS
import Home from './layouts/Home';
import Menu from './components/Menu/Menu';

// == STYLES
import './App.scss';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
    </div>
  );
}

export default App;
