import React from 'react';

class EndGame extends React.Component {
  render() {
    return (
      <div className="ratio-content game-end">
        <div className="message">
          <p>Game over</p>
          <button>New word</button>
        </div>
      </div>
    );
  }
}
export default EndGame;
