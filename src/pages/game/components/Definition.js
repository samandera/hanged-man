import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  definitions: state.definitionsState.definitions
})

class Definition extends React.Component {
  render() {
    return (
      <ol className="definitions">
        {this.props.definitions.map( (definition, i) => (
          <li key={i} >{definition}</li>
        ))}
      </ol>
    )
  }
}
export default connect(mapStateToProps)(Definition);
