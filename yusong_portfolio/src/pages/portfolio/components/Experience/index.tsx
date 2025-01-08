import React from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Animate } from 'react-rebound';
import { NavEnum } from '../../data';
import styles from './style.module.less';
import { ExperienceContent } from './model';

export interface ExperienceProps {
  toggled?: boolean;
  width?: number;
}

const Experience = React.forwardRef<HTMLDivElement, ExperienceProps>((props, ref) => {
  const { toggled = false, width = 0 } = props;

  const renderExperience = (content: ExperienceContent) => {
    return (
      <div className={styles.experienceWrapper} key={content.idx}>
        <Animate
          translateX={toggled ? 0 : -width}
          friction={80}
          tension={500}
          delay={(content?.idx || 0) * 300}
        >
          <div className={styles.datePeriod}>{content.datePeriod}</div>
        </Animate>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
        </div>
        <Animate
          translateX={toggled ? 0 : width}
          friction={80}
          tension={500}
          delay={(content?.idx || 0) * 300}
        >
          <div className={styles.experience}>
            <div className={styles.title}>{content.title}</div>
            <div className={styles.subTitle}>{content.subTitle}</div>
            <div className={styles.desc}>{content.desc}</div>
            {content.projects && (
              <div className={styles.projectList}>
                <span>수행 프로젝트 목록</span>
                <ul>
                  {content!.projects.map((e, i) =>
                    React.createElement('li', { key: `project-${i}` }, e.title),
                  )}
                </ul>
              </div>
            )}
          </div>
        </Animate>
      </div>
    );
  };

  const contentList: ExperienceContent[] = [
    {
      datePeriod: 'April 2021 – Current',
      title: '팀블라인드',
      subTitle: '서버 개발자',
      desc: [
        '팀블라인드에서 운영하는 서비스 서버 개발을 담당했습니다.',
        'Node.js, Express 기반으로 한 백엔드 개발과',
        'Vue 프레임워크를 적용한 웹페이지 및 어드민 개발 업무를 수행했습니다.',
        '이외에도 젠킨스를 활용한 CI/CD 자동화도 경험했습니다.',
      ].join(' '),
      projects: [
        {
          title: '온라인 취미 클래스 서비스 서버 개발',
        },
        {
          title: '데이팅앱 서비스 서버 개발',
        },
      ],
    },
    {
      datePeriod: 'February 2017 – April 2021',
      title: '유엔젤',
      subTitle: 'CBS개발부 / 대리',
      desc: [
        '통신사 CS, OCS, Provisioning 개발을 담당했습니다.',
        'Scala, PHP, Node.js 등을 기반으로 하는 다양한 프레임워크, 라이브러리를 활용해 백엔드 개발 업무를 수행했으며',
        'React를 활용한 클라이언트 개발도 경험했습니다.',
        '이외에도 ELK, Grafana를 비롯한 오픈소스를 활용해 모니터링 시스템을 구축하고 AWS·OCI 상에서',
        '서버리스 아키텍처를 구현한 경험이 있습니다.',
      ].join(' '),
      projects: [
        {
          title: 'Global SIM 서비스 백엔드 개발',
        },
        {
          title: '몽골 MTC IN 선불서비스 개발',
        },
        {
          title: '몽골 MTC 빌링솔루션 CS(Customer Care System) 개발',
        },
        {
          title: 'SKT Smart[Fleet] - Swing 시스템 연동 개발',
        },
        {
          title: 'SKT Smart[Fleet] 플랫폼 개발',
        },
        {
          title: '몽골 Unitel CBS Provisioning SM',
        },
      ],
    },
    {
      datePeriod: 'January 2017',
      title: 'NHN Technology Services',
      subTitle: 'UI 개발 인턴',
      desc: ['HTML, CSS 위주로 UI개발 관련 실무 중심의 교육을 받았습니다.'].join(' '),
    },
    {
      datePeriod: 'June 2016 – August 2016',
      title: 'HappyTuk Co., Ltd.',
      subTitle: '플랫폼 개발실 / 인턴',
      desc: [
        'Spring Framework 기반 웹 서비스 페이지 유지보수를 맡았으며,',
        '게임 쿠폰 지급 관련 컨트롤러 및 뷰를 개발했습니다.',
      ].join(' '),
    },
  ];

  return (
    <div id={NavEnum.Experience} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>Experience</h2>
      <div className={styles.experienceList}>
        {contentList.map((c, idx) => renderExperience({ ...c, idx }))}
      </div>
    </div>
  );
});

export default Experience;
