import React from 'react';
import styles from './style.module.less';

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.loading}>
        <h1>Loading ...</h1>
      </div>
    </div>
  );
};

export default Loading;
