import React from 'react';

class AspectRatio extends React.Component {



  render() {
    let {parentClass, ratioAdditionalClass} = this.props;
    if (parentClass===undefined) {parentClass=""};
    if (ratioAdditionalClass===undefined) {ratioAdditionalClass=""};
    return (
      <div className={parentClass}>
        <div className={`ratio-content ${ratioAdditionalClass}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default AspectRatio;
