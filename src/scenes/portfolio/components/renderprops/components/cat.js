import React from 'react';
import cat from '../../../../../assets/images/pcat.jpg'

export default class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={cat} alt="" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}