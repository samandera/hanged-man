import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  definitions: state.definitionsState.definitions
})

class Definition extends React.Component {
  render() {
    console.log(this.props);
    return (
      <ol className="definitions">

      </ol>
    )
  }
}
export default connect(mapStateToProps)(Definition);
