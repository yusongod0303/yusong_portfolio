import React from 'react';
import SkillIcon, { SkillIconProps } from './SkillIcon';
import styles from './style.module.less';

export const Oracle: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.oracle} {...props} />;
};

export const Mysql: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.mysql} {...props} />;
};
