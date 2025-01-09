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
            e.link ? (
              <a href={e.link} target="_blank" rel="noopener noreferrer">
                {e.content}
              </a>
            ) : (
              e.content
            ),
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
      title: '자격증 획득',
      subTitle: '획득한 자격증 목록:',
      desc: [
        {
          content: '정보처리기사 (Jun 2024)',
          link: '',
        },
        {
          content: 'SQL 개발자 - SQLD (Sep 2024)',
          link: '',
        },
        {
          content: '데이터 분석 준전문가 - ADsP (Sep 2024)',
          link: '',
        },
      ],
    },
    {
      datePeriod: 'Jul 2024 - 2025 Jan',
      title: 'LG U+ WHY NOT SW CAMP 빅데이터&클라우드 2기',
      subTitle: '신재생 에너지 설비(접속반) 건전성 평가 모델 개발',
      desc: [
        '클라우드 기초 지식 및 통계 기본 지식에 대해 학습하였습니다.',
        'docker 및 aws 에 대해 학습하였습니다.',
        'git을 활용한 협업 관리에 대해 학습하였습니다.',
        '파이썬 기초 프로그래밍 및 flask와 fastapi를 활용한 웹 프레임워크에 대해 학습하였습니다.',
        '3개의 미니 프로젝트 및 서비스 기획, 대형 프로젝트 1회 참여하였습니다.',
      ].join(' '),
    },
    {
      datePeriod: 'Sep 2022',
      title: '제 10회 공공데이터 활용 비즈니스 아이디어 공모전 - 빅데이터 분석 부문 - 장려상',
      subTitle: '신재생 에너지 설비(접속반) 건전성 평가 모델 개발',
      desc: [
        '접속반 고장을 미리 예측하여 주의, 경고, 위험을 알려주는 모델을 개발했습니다.',
        '랜덤포레스트와 회귀 분석을 이용하여 모델을 개발했고 두 모델을 평가하여 성능이 더 뛰어난 선형 회귀를 이용했습니다.',
      ].join(' '),
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
