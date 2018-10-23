import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  hangedman: state.missedLettersState.hangedman
})

class Hangedman extends React.Component {
  render() {
    return (
      <div className="hangedman">
        {this.props.hangedman.map(hangedman => {
          const visible = hangedman.visible ? ' visible' : '';
          const partClass = `${hangedman.bodyPart}${visible}`
          return (<div key={hangedman.bodyPart} className={partClass} />)
        })}
      </div>
    );
  }
}
export default connect(mapStateToProps)(Hangedman);
