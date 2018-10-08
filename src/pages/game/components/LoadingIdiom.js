import React from 'react';
import {connect} from 'react-redux';
import { CircleLoader } from 'react-spinners';

const mapStateToProps = state => ({
  message: state.loadingState.message
});

class LoadingIdiom extends React.Component {
  render() {
    return (
      <div className="loading-idiom">
        <CircleLoader/>
        <div className="currenly-loading">
          {this.props.message}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(LoadingIdiom);
