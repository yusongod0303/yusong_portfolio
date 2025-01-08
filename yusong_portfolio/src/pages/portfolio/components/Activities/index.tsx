import React from 'react';
import { NavEnum } from '../../data';
import { ActivityContent, ActivityContentItem } from './model';
import styles from './style.module.less';

const Activities = React.forwardRef<HTMLDivElement>((props, ref) => {
  const renderList = (items: ActivityContentItem[], idx?: number) => {
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

  const renderActivity = (content: ActivityContent) => {
    return (
      <div className={styles.activityWrapper} key={content.idx}>
        <div className={styles.titleBox}>
          <div>
            <div className={styles.title}>{content.title}</div>
            <div className={styles.subTitle}>{content.subTitle}</div>
          </div>
          <div>
            <div className={styles.datePeriod}>{content.datePeriod}</div>
          </div>
        </div>
        <div className={styles.activity}>
          {Array.isArray(content.desc) ? (
            renderList(content.desc, content.idx)
          ) : (
            <p className={styles.desc}>{content.desc}</p>
          )}
        </div>
      </div>
    );
  };

  const contentList: ActivityContent[] = [
    {
      datePeriod: '',
      title: 'AWS 공인 교육 과정',
      subTitle: '수료한 과정 목록:',
      desc: [
        {
          content: 'AWS 기반 데브옵스 엔지니어링 (Feb 2020)',
          link: 'https://aws.amazon.com/ko/training/course-descriptions/devops-engineering/',
        },
        {
          content: 'AWS 기반 개발 (Nov 2019)',
          link: 'https://aws.amazon.com/ko/training/course-descriptions/developing/',
        },
      ],
    },
    {
      datePeriod: 'Nov 2016',
      title: '강원대 IT대학 졸업 및 전공작품 경진대회 최우수상',
      subTitle: '프레젠테이션 기능 중심 PC 원격 제어 앱',
      desc: [
        'Windows API(C++) 기반 서버 프로그램 개발을 담당했습니다.',
        '앱 클라이언트로부터 동작 센서 값을 UDP로 전송받아 화면 원격 조종 및 페인팅 기능을 구현하였습니다.',
      ].join(' '),
    },
    {
      datePeriod: 'Mar 2013 - Feb 2017',
      title: '네리프(Neriff) 동아리 활동',
      subTitle: '강원대 정보보호 동아리',
      desc: ['정보보호 관련 스터디 활동과 과내 세미나 진행 및 참여'].join(' '),
    },
  ];

  return (
    <div id={NavEnum.Activities} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>Activities</h2>
      <div className={styles.activityList}>
        {contentList.map((c, idx) => renderActivity({ ...c, idx }))}
      </div>
    </div>
  );
});

export default Activities;
