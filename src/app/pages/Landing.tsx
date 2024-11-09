import React from 'react';

import AboutMe from '../components/aboutMe/AboutMe';
import CryptosInfo from '../components/cryptosInfo/CryptosInfo';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import { useTheme } from '../components/hooks/useTheme';
import NewPropject from '../components/newProject/NewPropject';
import Propjects from '../components/projects/Propjects';
import Services from '../components/services/Services';
import Skills from '../components/skills/Skills';
import appStyles from './Landing.module.scss';

export interface MainContantContainerProps {
  className: string;
}

const Landing = () => {
  const myRef = React.useRef<HTMLDivElement>(null);
  const [theme, toggleTheme] = useTheme();

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  React.useEffect(() => {
    document.title = 'SaprLand';
  }, []);

  return (
    <div ref={myRef}>
      <main className={appStyles.main}>
        <div className={appStyles.fixed_top}>
          <Header toggleTheme={toggleTheme} />
          <CryptosInfo />
        </div>
        <div className={appStyles.top_content}>
          <Home className={appStyles.main_content_container} />
        </div>
        <AboutMe className={appStyles.main_content_container} />
        <Skills className={appStyles.main_content_container} />
        <Services className={appStyles.main_content_container} />
        <Propjects className={appStyles.main_content_container} />
        <NewPropject className={appStyles.main_content_container} />
        <Footer />
      </main>
    </div>
  );
};

export default Landing;
