import React from 'react';
import gitHubImage from '@/images/GitHub-Mark-Light-64px.png';
import { NavEnum } from '../../data';
import styles from './style.module.less';

export interface FooterProps {
  onLeadDown: (e: NavEnum) => void;
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leadUp}>
        <div
          className={styles.scrollUp}
          aria-hidden="true"
          onClick={() => props.onLeadDown(NavEnum.Home)}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.copyright}>
          <span>Copyright &copy; 2025 Yusong Lee</span>
        </div>
        <div className={styles.link}>
          <ul className={styles.iconList}>
            <li className={styles.icon}>
              <a href="https://github.com/yusongod0303" target="_blank" className={styles.gitHub}>
                <img src={gitHubImage} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
