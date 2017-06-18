import React from 'react';
import AspectRatio from '../AspectRatio';

class Limb extends React.Component {
  render() {
    return (
      <AspectRatio parentClass={this.props.bodySide}>
        {this.props.children}
      </AspectRatio>
    );
  }
}
export default Limb;
