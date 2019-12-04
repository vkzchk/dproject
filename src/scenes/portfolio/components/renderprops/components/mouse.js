import React from 'react';
import styles from './mouse.module.css'


export default class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div
        className={styles.mouse}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}