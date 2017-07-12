import React from 'react';
import fetchWord from '../methods/fetchWord';
import handleKeyPress from '../methods/handleKeyPress';
import PrimaryContent from './PrimaryContent';
import EndGame from './EndGame';

class Index extends React.Component {

  componentWillMount() {
    fetchWord();
    window.onkeydown = () => {handleKeyPress(String.fromCharCode(event.keyCode))}
  }


  render() {
    return (
      <div className="container">
        <EndGame/>
        <PrimaryContent/>

        <svg viewBox="0 0 100 100"  className="triangle">
          <polygon points="0,100 100,100 100,0"/>
        </svg>
      </div>
    );
  }
}
export default Index;
