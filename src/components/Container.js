import React from 'react';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.childern}
      </div>
    )
  }
}

export default Container;
