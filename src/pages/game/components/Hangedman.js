import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  hangedman: [
    {bodyPart: 'tree', visible: true},
    {bodyPart: 'left-calf', visible: true},
    {bodyPart: 'right-calf', visible: true},
    {bodyPart: 'right-thigh', visible: true},
    {bodyPart: 'left-thigh', visible: true},
    {bodyPart: 'corpse', visible: true},
    {bodyPart: 'head', visible: true},
    {bodyPart: 'hair', visible: true},
    {bodyPart: 'left-arm', visible: true},
    {bodyPart: 'right-arm', visible: true}
  ]
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
