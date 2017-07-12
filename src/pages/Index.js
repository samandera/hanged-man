import React from 'react';
import Game from './game/Game';

class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Game/>

        <svg viewBox="0 0 100 100"  className="triangle">
          <polygon points="0,100 100,100 100,0"/>
        </svg>
      </div>
    );
  }
}
export default Index;
