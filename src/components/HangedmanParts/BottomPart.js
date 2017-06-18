import React from 'react';
import AspectRatio from '../AspectRatio';

class BottomPart extends React.Component {
  render() {
    return (
      <AspectRatio parentClass="bottom-part">
        {this.props.children}
      </AspectRatio>
    );
  }
}
export default BottomPart;
