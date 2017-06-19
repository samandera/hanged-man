import React from 'react';

class EndGame extends React.Component {
  render() {
    return (
      <div className="ratio-content game-end">
        <div className="message">
          <p>Game over</p>
          <form onSubmit={this.props.getWord}>
            <button>New word</button>
          </form>
        </div>
      </div>
    );
  }
}
export default EndGame;
