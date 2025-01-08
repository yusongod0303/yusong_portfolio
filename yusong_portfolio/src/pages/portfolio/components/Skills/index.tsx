import React from 'react';
import { NavEnum } from '../../data';
import { SkillItem, SkillSet, SkillProficiency } from './model';
import styles from './style.module.less';
import { Scala, Typescript, Javascript, Kotlin, Python, Bash } from './components/Language';
import { Akka, ReactJS, NodeJS, Spring, VueJS } from './components/Framework';
import { Oracle, Mysql } from './components/Database';
import { Git, Docker, Kubernetes, Jenkins } from './components/OtherSkill';

const skillSets: SkillSet[] = [
  {
    title: 'Language',
    items: [
      {
        title: 'Scala',
        imageNode: <Scala id="scala" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#만_4년을_함께'],
      },
      {
        title: 'Typescript',
        imageNode: <Typescript id="typescript" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#JS보다_TS_선호'],
      },
      {
        title: 'Javascript',
        imageNode: <Javascript id="javascript" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#현재_주_언어'],
      },
      {
        title: 'Bash',
        imageNode: <Bash id="bash" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#쉘스크립트_작성_가능'],
      },
    ],
  },
  {
    title: 'Platform / Framework',
    items: [
      {
        title: 'Akka',
        imageNode: <Akka id="akka" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#Scala_Akka_조합'],
      },
      {
        title: 'React',
        imageNode: <ReactJS id="reactjs" />,
        proficiency: SkillProficiency.Familiar,
        tags: [],
      },
      {
        title: 'Node.js',
        imageNode: <NodeJS id="nodejs" />,
        proficiency: SkillProficiency.Familiar,
        tags: [],
      },
      {
        title: 'Vue',
        imageNode: <VueJS id="spring" />,
        proficiency: SkillProficiency.Familiar,
        tags: [],
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
      {
        title: 'Jenkins',
        imageNode: <Jenkins id="jenkins" />,
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
