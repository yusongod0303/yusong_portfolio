import React from 'react';
import ReactTooltip from 'react-tooltip';
import { SkillProficiency } from '../model';
import styles from './style.module.less';

export interface SkillIconProps {
  iconName?: string;
  id: string;
  tags?: string[];
  imageClassName?: string;
  proficiency?: SkillProficiency;
}

const SkillIcon: React.FC<SkillIconProps> = (props) => {
  const { tags, id, imageClassName, iconName, proficiency } = props;
  return (
    <>
      <div className={styles.skillIcon} data-tip data-for={id}>
        <div className={imageClassName} />
        {iconName && <p>{iconName}</p>}
        {proficiency && <div className={styles.proficiency}>{proficiency}</div>}
      </div>
      {(tags || []).length > 0 && (
        <ReactTooltip id={id} place="bottom" type="dark" effect="solid">
          <p className={styles.tooltip}>{tags!.join('\n')}</p>
        </ReactTooltip>
      )}
    </>
  );
};

export default SkillIcon;
