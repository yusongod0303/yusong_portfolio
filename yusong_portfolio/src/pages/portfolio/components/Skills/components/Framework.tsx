import React from 'react';
import SkillIcon, { SkillIconProps } from './SkillIcon';
import styles from './style.module.less';

export const Akka: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.akka} {...props} />;
};

export const ReactJS: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.reactjs} {...props} />;
};

export const NodeJS: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.nodejs} {...props} />;
};

export const Spring: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.spring} {...props} />;
};

export const VueJS: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.vuejs} {...props} />;
};
