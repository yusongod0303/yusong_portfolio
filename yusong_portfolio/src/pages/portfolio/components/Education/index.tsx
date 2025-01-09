import React from 'react';
import { NavEnum } from '../../data';
import { EducationContent, EducationContentItem } from './model';
import styles from './style.module.less';

const Education = React.forwardRef<HTMLDivElement>((props, ref) => {
  const renderList = (items: EducationContentItem[], idx?: number) => {
    return (
      <ul className={styles.desc}>
        {items.map((e, i) =>
          React.createElement(
            'li',
            { key: `${idx}-${i}` },
            <a href={e.link} target="_blank">
              {e.content}
            </a>,
          ),
        )}
      </ul>
    );
  };

  const renderEducation = (content: EducationContent) => {
    return (
      <div className={styles.educationWrapper} key={content.idx}>
        <div className={styles.titleBox}>
          <div>
            <div className={styles.title}>{content.title}</div>
            <div className={styles.subTitle}>{content.subTitle}</div>
          </div>
          <div>
            <div className={styles.datePeriod}>{content.datePeriod}</div>
          </div>
        </div>
        <div className={styles.education}>
          {Array.isArray(content.desc) ? (
            renderList(content.desc, content.idx)
          ) : (
            <p className={styles.desc}>{content.desc}</p>
          )}
        </div>
      </div>
    );
  };

  const contentList: EducationContent[] = [
    {
      datePeriod: 'Mar 2018 - Feb 2024',
      title: '강원대학교',
      subTitle: '컴퓨터과학과 학사 졸업',
      desc:
        '인공지능, 기계학습, 데이터베이스, 데이터 분석 프로그래밍, 웹 프로그래밍, 알고리즘 등을 비롯한 컴퓨터과학 분야 전공 과목들을 이수하였습니다.',
    },
  ];

  return (
    <div id={NavEnum.Education} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>Education</h2>
      <div className={styles.educationList}>
        {contentList.map((c, idx) => renderEducation({ ...c, idx }))}
      </div>
    </div>
  );
});

export default Education;
