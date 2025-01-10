import React from 'react';
import SkillIcon, { SkillIconProps } from './SkillIcon';
import styles from './style.module.less';

export const Airflow: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.airflow} {...props} />;
};

export const Brightics: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.brightics} {...props} />;
};

export const Excel: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.excel} {...props} />;
};

export const AWS: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.AWS} {...props} />;
};