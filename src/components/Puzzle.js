import React from 'react';

class Puzzle extends React.Component {
  render() {
    return (
      <div className="puzzle">
        {this.props.children}
      </div>
    );
  }
}
export default Puzzle;
