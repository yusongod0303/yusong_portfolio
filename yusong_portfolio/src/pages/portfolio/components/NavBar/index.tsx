import React, { useState, useEffect } from 'react';
import { NavEnum } from '../../data';
import styles from './style.module.less';

export interface NavBarProps {
  nav: NavEnum;
  onLeadDown: (e: NavEnum) => void;
  hideNav: boolean;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const { nav, onLeadDown } = props;

  const dynamicStyle = (key: NavEnum) => (nav === key ? styles.current : undefined);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target =
      Object.values(NavEnum).find((v) => v === event.currentTarget.getAttribute('target-menu')) ||
      NavEnum.Home;
    onLeadDown(target);
  };

  const renderChildById = (key: NavEnum) => (
    <li key={key} className={dynamicStyle(key)}>
      <a target-menu={key} onClick={handleClick}>
        {key.substring(0, 1).toUpperCase() + key.substring(1)}
      </a>
    </li>
  );

  return (
    <div
      className={[
        styles.navBar,
        props.hideNav ? styles.fadeOut : styles.fadeIn,
        props.nav !== NavEnum.Home ? styles.noHeader : null,
      ].join(' ')}
    >
      <ul>
        {Object.values(NavEnum)
          .filter((e) => e !== NavEnum.Projects)
          .map((e) => renderChildById(e))}
        <li key="blog" className={styles.current}>
          <a href="https://velog.io/@yusongod0303" target="_blank">
            {'Blog'}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
