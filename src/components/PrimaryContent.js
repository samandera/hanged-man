import React from 'react';
import Hangedman from './Hangedman';
import AspectRatio from './AspectRatio';
import Puzzle from './Puzzle';
import MissedCharacters from './MissedCharacters';

class PrimaryContent extends React.Component {
  render() {
    return (
      <div className="ratio-content primary-content">
        <Hangedman/>
        <MissedCharacters/>
        <Puzzle>
          <AspectRatio>D</AspectRatio>
          <AspectRatio>D</AspectRatio>
          <AspectRatio>E</AspectRatio>
          <AspectRatio parentClass="disabled"></AspectRatio>
        </Puzzle>
      </div>
    );
  }
}
export default PrimaryContent;
