import React from 'react';
import Game from './game/Game';

class Index extends React.Component {
  render() {
    return (
      <div className="screen-wrapper">
        <Game/>
        <div className="grass"/>
      </div>
    );
  }
}
export default Index;
