import React from 'react';
import {connect} from 'react-redux';
import store from '../reducers/store';
import AspectRatio from './AspectRatio';

const mapStateToProps = (store) => {
  return {
    word: store.wordState.word
  }
}

class WinningLetter extends React.Component {
  constructor() {
    super();
  }

  render() {
    let index=this.props.index;
    return (
      <AspectRatio key={this.props.key}>
        <div>
          {this.props.word[index].visible ? this.props.word[index].letter : ''}
        </div>
      </AspectRatio>
    );
  }
}

export default connect(mapStateToProps)(WinningLetter);
