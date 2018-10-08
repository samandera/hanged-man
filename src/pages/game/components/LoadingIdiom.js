import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({});

class LoadingIdiom extends React.Component {
  render() {
    return (
      <div className="loading-idiom">
        LOADING IDIOM!!!!!
      </div>
    )
  }
}

export default connect(mapStateToProps)(LoadingIdiom);
