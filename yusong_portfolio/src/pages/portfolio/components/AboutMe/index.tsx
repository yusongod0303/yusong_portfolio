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
            <span className={styles.keyword}>if</span>,
            ' (',
            <span className={styles.function}>sad</span>,
            '() === ',
            <span className={styles.boolean}>true</span>,
            ') {',
            <br />,
            <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;sad</span>,
            '().',
            <span className={styles.function}>stop</span>,
            '();',
            <br />,
            <span className={styles.function}>&nbsp;&nbsp;&nbsp;&nbsp;beAwesome</span>,
            '();',
            <br />,
            '}',
          ].map((e, i) => React.createElement('span', { key: `code-${i}` }, e))}
        </div>
      </div>
      <div className={styles.introWrapper}>
        <Animate translateX={toggled ? 0 : -width} friction={80} tension={500}>
          <p className={styles.mainPoint}>
            백엔드 개발자로서 시스템을 보다 <span>안정적</span>이고 <span>효율적</span>으로 개발할
            때 보람을 느낍니다
          </p>
        </Animate>
        <p className={styles.intro}>
          {[
            `안녕하세요, 백엔드 개발자 `,
            <span className={styles.withColor}>이지송</span>,
            `입니다.`,
            <br />,
            `개발자로 일한지 햇수로 6년이 지나는 과정 속에서 `,
            <span className={styles.codeBlock}>비즈니스 로직 설계 및 구현</span>,
            ', ',
            <span className={styles.codeBlock}>데이터베이스 설계</span>,
            ', ',
            <span className={styles.codeBlock}>리팩토링</span>,
            ', ',
            <span className={styles.codeBlock}>디자인 패턴</span>,
            ', ',
            <span className={styles.codeBlock}>테스트 코드</span>,
            `를 비롯한 다양한 개발 경험을 해왔습니다. `,
            `백엔드 개발자는 시스템의 무결성을 위해 신중해야 하며, `,
            `더 나은 아키텍처와 코드에 대해 끊임없이 고민하고 지향해야 한다는 마음가짐으로 일해왔습니다. `,
            `또한 빠르게 변화하는 이 업계에서 새로운 기술을 습득하고 문제 해결을 위한 기반을 튼튼히 다지기 위해 `,
            `제 개인적으로도 스터디를 병행하고 있습니다. `,
            `이외에도 `,
            <span className={styles.codeBlock}>애자일 프로세스</span>,
            ', ',
            <span className={styles.codeBlock}>코드 리뷰</span>,
            ', ',
            <span className={styles.codeBlock}>Git flow</span>,
            '등을 통해 함께 개발 문화를 만들어 나가는 것을 좋아합니다.',
          ].map((e, i) => React.createElement('span', { key: `text-${i}` }, e))}
        </p>
      </div>
    </div>
  );
});

export default AboutMe;
