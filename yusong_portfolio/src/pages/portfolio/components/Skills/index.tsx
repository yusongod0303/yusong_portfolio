import React from 'react';
import { NavEnum } from '../../data';
import { SkillItem, SkillSet, SkillProficiency } from './model';
import styles from './style.module.less';
import { Scala, Python, Bash, SQL } from './components/Language';
import { Airflow, Brightics, Excel, AWS } from './components/Framework';
import { Oracle, Mysql, MongoDB } from './components/Database';
import { Git, Docker, Kubernetes } from './components/OtherSkill';

const skillSets: SkillSet[] = [
  {
    title: 'Language',
    items: [
      {
        title: 'Scala',
        imageNode: <Scala id="scala" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#빅데이터_처리_가능'],
      },
      {
        title: 'Python',
        imageNode: <Python id="python" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#현재_주_언어'],
      },
      {
        title: 'SQL',
        imageNode: <SQL id="sql" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#query문_및_DB_관리'],
      },
      {
        title: 'Bash',
        imageNode: <Bash id="bash" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#클라우드_기반_엔지니어링'],
      },
    ],
  },
  {
    title: 'Platform / Framework',
    items: [
      {
        title: 'Airflow',
        imageNode: <Airflow id="airflow" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#파이프라인_구축'],
      },
      {
        title: 'Brightics',
        imageNode: <Brightics id="brightics" />,
        proficiency: SkillProficiency.Familiar,
        tags: [],
      },
      {
        title: 'Excel',
        imageNode: <Excel id="excel" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#EDA, 데이터_분석'],
      },
      {
        title: 'AWS',
        imageNode: <AWS id="AWS" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['파이프라인_구축, 배포'],
      },
    ],
  },
  {
    title: 'Database',
    items: [
      {
        title: 'Oracle',
        imageNode: <Oracle id="oracle" />,
      },
      {
        title: 'MySQL',
        imageNode: <Mysql id="mysql" />,
      },
      {
        title: 'MongoDB',
        imageNode: <MongoDB id="mongodb" />,
      },
    ],
  },
  {
    title: 'etc',
    items: [
      {
        title: 'Git',
        imageNode: <Git id="git" />,
        proficiency: SkillProficiency.Familiar,
        tags: [],
      },
      {
        title: 'Docker',
        imageNode: <Docker id="docker" />,
        proficiency: SkillProficiency.Familiar,
        tags: [],
      },
      {
        title: 'Kubernetes',
        imageNode: <Kubernetes id="kubernetes" />,
        proficiency: SkillProficiency.Familiar,
        tags: [],
      },
    ],
  },
];

const Skills = React.forwardRef<HTMLDivElement>((props, ref) => {
  const renderSkillItem = (item: SkillItem, key: number) => {
    return (
      <div className={styles.skillItem} key={`item-${key}`}>
        {React.cloneElement(item.imageNode, {
          iconName: item.title,
          proficiency: item.proficiency,
          tags: item.tags,
        })}
      </div>
    );
  };
  const renderSkillSet = (set: SkillSet, key: number) => {
    return (
      <div className={styles.skillSet} key={`set-${key}`}>
        <h3>{set.title}</h3>
        <div>{set.items.map((e, i) => renderSkillItem(e, i))}</div>
      </div>
    );
  };

  return (
    <div id={NavEnum.Skills} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>Skills</h2>
      <div className={styles.skillSetList}>{skillSets.map((e, i) => renderSkillSet(e, i))}</div>
    </div>
  );
});

export default Skills;
