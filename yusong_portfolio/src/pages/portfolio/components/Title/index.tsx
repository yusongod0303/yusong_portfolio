import React, { useEffect } from 'react';
import { NavEnum } from '../../data';
import NavBar from '../NavBar';
import Typer from '../Typer';
import styles from './style.module.less';

export interface TitleProps {
  onLeadDown: (e: NavEnum) => void;
  nav: NavEnum;
  hideNav: boolean;
}

const Title = React.forwardRef<HTMLDivElement, TitleProps>((props, ref) => {
  return (
    <div id={NavEnum.Home} className={styles.wrapper} ref={ref}>
      <NavBar {...props} />
      <div className={styles.title}>
        <h1>Yusong Lee</h1>
        <div>
          <Typer className={styles.typer} message="Data Scientiest" />
          <Typer className={styles.typer} message="Data Analyst" />
          <Typer className={styles.typer} message="Data Engineering" />
        </div>
        <div className={styles.leadDown}>
          <div
            className={styles.scrollDown}
            aria-hidden="true"
            onClick={() => props.onLeadDown(NavEnum.About)}
          />
        </div>
      </div>
    </div>
  );
});

export default Title;
