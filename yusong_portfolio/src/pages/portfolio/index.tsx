import React, { useEffect, useState, useRef, useCallback } from 'react';
import { NavEnum } from './data';
import styles from './style.module.less';
import AboutMe from './components/AboutMe';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Loading from './components/Loading';
// import Projects from './components/Projects';
import Skills from './components/Skills';
import Title from './components/Title';

declare type NavEnumKey = keyof typeof NavEnum;

const PortfolioPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nav, setNav] = useState<NavEnum>(NavEnum.Home);
  const [hideNav, setHideNav] = useState<boolean>(false);
  const [toggle, setToggle] = useState<Map<NavEnum, boolean>>(new Map());
  const refMap = Object.fromEntries(
    Object.values(NavEnum).map((v) => [v, useRef<null | HTMLDivElement>(null)]),
  );

  const finishLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(), 5000);
    return () => clearTimeout(timeout);
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const map = new Map();
    let i = 0;
    let escape = false;

    if (currentScrollY > 0 && refMap[NavEnum.Home].current?.clientHeight) {
      if (currentScrollY + 24 > refMap[NavEnum.Home].current!.clientHeight) {
        if (hideNav) {
          setHideNav(false);
        }
      } else if (currentScrollY > refMap[NavEnum.Home].current!.clientHeight / 5) {
        if (!hideNav) {
          setHideNav(true);
        }
      } else if (hideNav) {
        setHideNav(false);
      }
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const k in NavEnum) {
      if (NavEnum.hasOwnProperty(k)) {
        const height = refMap[NavEnum[k as NavEnumKey]]?.current?.clientHeight || 0;
        i += height;

        map.set(
          NavEnum[k as NavEnumKey] || NavEnum.Home,
          currentScrollY - 200 < i && currentScrollY + 200 > i - height,
        );

        if (currentScrollY + 24 < i && !escape) {
          setNav(NavEnum[k as NavEnumKey] || NavEnum.Home);
          escape = true;
        }
      }
    }

    setToggle(map);
  }, [hideNav, setHideNav, refMap, setToggle]);

  useEffect(() => {
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [handleScroll]);

  const handleLeadDown = (e: NavEnum) => {
    refMap[e].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const dynamicStyle = isLoading
    ? {
        opacity: 0,
        height: 0,
        overflow: 'hidden',
      }
    : {
        opacity: 1,
      };

  return (
    <>
      {isLoading ? <Loading /> : null}
      <div style={dynamicStyle}>
        <div className={styles.wrapper}>
          <Title
            onLeadDown={handleLeadDown}
            nav={nav}
            ref={refMap[NavEnum.Home]}
            hideNav={hideNav}
          />
          <AboutMe
            ref={refMap[NavEnum.About]}
            toggled={toggle.get(NavEnum.About)}
            width={refMap[NavEnum.About]?.current?.clientWidth}
          />
          <Experience
            ref={refMap[NavEnum.Experience]}
            toggled={toggle.get(NavEnum.Experience)}
            width={refMap[NavEnum.Experience]?.current?.clientWidth}
          />
          <Education ref={refMap[NavEnum.Education]} />
          {/* 향후 사이드 프로젝트 추가
           *  <Projects ref={refMap[NavEnum.Projects]} />
           */}
          <Skills ref={refMap[NavEnum.Skills]} />
          <Activities ref={refMap[NavEnum.Activities]} />
          <Contact ref={refMap[NavEnum.Contact]} />
          <Footer onLeadDown={handleLeadDown} />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
