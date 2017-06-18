import React from 'react';
import AspectRatio from '../AspectRatio';

class TheMan extends React.Component {
  render() {
    return (
      <AspectRatio parentClass="hangedman">
        {this.props.children}
      </AspectRatio>
    );
  }
}
export default TheMan;
