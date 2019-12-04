import React from 'react';
import styles from './mouseTracker.module.css';
import Cat from './cat'
import Mouse from './mouse'

class MouseTracker extends React.Component {
  render() {
    return (
      <div className={styles.renderProps}>
        <h1>Перемещайте курсор мыши!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )} />
      </div>
    );
  }
}

export default MouseTracker;