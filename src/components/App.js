import React from 'react';
import GameComponent from './Game/GameComponent';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className=" container-fluid padding">
        <GameComponent />
      </div>
    </div>
  );
}

export default App;
