import React from 'react';
import AspectRatio from '../AspectRatio';

class MiddlePart extends React.Component {
  render() {
    return (
      <AspectRatio parentClass="middle-part">
        {this.props.children}
      </AspectRatio>
    );
  }
}
export default MiddlePart;
