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
      <Header toggleTheme={toggleTheme} />
      <CryptosInfo />
      <main className={appStyles.main}>
        <Home />
        <AboutMe />
        <Skills />
        <Services />
        <Propjects />
        <NewPropject />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
