import React from 'react';
import { Animate } from 'react-rebound';
import { NavEnum } from '../../data';
import styles from './style.module.less';

export interface AboutProps {
  toggled?: boolean;
  width?: number;
}

const AboutMe = React.forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  const { toggled = false, width = 0 } = props;
  return (
    <div id={NavEnum.About} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>About Me</h2>
      <div className={styles.codeWrapper}>
        <div className={styles.code}>
          {[
            <span className={styles.comment}>//life motto</span>,
            <br />,
            <span className={styles.keyword}>do</span>,
            ' {',
            <br />,
            <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;experiment</span>,
            '();',
            <br />,
            <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;fail</span>,
            '();',
            <br />,
            <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;learn</span>,
            '();',
            <br />,
            <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;succeed</span>,
            '();',
            <br />,
            '} ',
            <span className={styles.keyword}>while</span>,
            ' (',
            <span className={styles.variable}>passion</span>,
            ' > ',
            <span className={styles.number}>0</span>,
            ');',
          ].map((e, i) => React.createElement('span', { key: `code-${i}` }, e))}
        </div>
      </div>
      <div className={styles.introWrapper}>
        <Animate translateX={toggled ? 0 : -width} friction={80} tension={500}>
          <p className={styles.mainPoint}>
            데이터를 이용하여 <span>가치</span>를 창출하는 모든 과정에 큰<span></span><span>분석, </span><span>파이프라인 구축</span>
            <span>모델링</span>까지 데이터를 이용한 가치를 창출하는 전 과정을 수행할 수 있는 <span>데이터 사이언티스트</span>입니다.
  
          </p>
        </Animate>
        <p className={styles.intro}>
          {[
            `안녕하세요, 데이터 사이언티스트를 꿈꾸는 `,
            <span className={styles.withColor}>이유송</span>,
            `입니다. `,
            <br/>,
            `저는 다양한 빅데이터 분석 및 모델링 프로젝트를 수행하며 직무 역량을 쌓아왔습니다. `,
            '프로젝트에 참여하면서, 새로운 기술과 부족한 부분을 배우는 과정에서 큰 흥미를 느끼고 ',
            '다양한 도메인의 프로젝트에 참여하여 팀원들과의 ',
            <span className={styles.codeBlock}>문제 해결 능력</span>,
            '과 ', 
            <span className={styles.codeBlock}>의사소통 능력</span>,
            '을 키웠습니다.', 
            `빠르게 변화하는 업계 속에서 성장하고자 지속적으로 새로운 기술을 습득하며, `,
            `데이터를 통해 가치를 창출하는 데 진심으로 열정을 가지고 있습니다. `
          ].map((e, i) => React.createElement('span', { key: `text-${i}` }, e))}
        </p>
      </div>
    </div>
  );
});

export default AboutMe;
