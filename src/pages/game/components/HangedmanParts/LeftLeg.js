import React from 'react';

const displayHangedmanParts = (bodyPart) => {
  return visibleParts.indexOf(bodyPart) >= 0 ? "hidden" : "visible" ;
}

const visibleParts = ['LeftLeg']

class LeftLeg extends React.Component {
  render() {
    console.log(displayHangedmanParts('LeftLeg'));
    return (
      <div className="left-leg" style={{visibility:"hidden"}}></div>
    );
  }
}
export default LeftLeg;
