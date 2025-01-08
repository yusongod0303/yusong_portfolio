import React from 'react';
import { NavEnum } from '../../data';
import styles from './style.module.less';

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id={NavEnum.Projects} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>Projects</h2>
    </div>
  );
});

export default Projects;
