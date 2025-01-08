import React from 'react';
import SkillIcon, { SkillIconProps } from './SkillIcon';
import styles from './style.module.less';

export const Scala: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.scala} {...props} />;
};

export const Typescript: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.typescript} {...props} />;
};

export const Javascript: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.javascript} {...props} />;
};

export const Kotlin: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.kotlin} {...props} />;
};

export const Python: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.python} {...props} />;
};

export const Bash: React.FC<SkillIconProps> = (props) => {
  return <SkillIcon imageClassName={styles.bash} {...props} />;
};
