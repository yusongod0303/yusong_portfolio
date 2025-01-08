import React from 'react';
import SkillIcon, { SkillIconProps } from './SkillIcon';
import styles from './style.module.less';

export const Git: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.git} {...props} />;
};

export const Docker: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.docker} {...props} />;
};

export const Kubernetes: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.kubernetes} {...props} />;
};

export const Jenkins: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.jenkins} {...props} />;
};
