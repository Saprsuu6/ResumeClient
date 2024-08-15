import '../../../index.scss';

import React from 'react';

import ThemeToggle from '../themeToggle/ThemeToggle';
import headerStyles from './Header.module.scss';

interface Props {
  toggleTheme: (value: string) => void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const [isVisibleDropMenu, setIsVisibleDropMenu] = React.useState(false);

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.text_container}>
        <div className={headerStyles.menu} onClick={() => setIsVisibleDropMenu(!isVisibleDropMenu)} />
        <div className={`${headerStyles.logo} logo`}>
          <a href="#home">Home</a>
        </div>
        <div className={headerStyles.image_container}>
          <div className={headerStyles.logo_img}></div>
        </div>
      </div>
      <nav className={`${headerStyles.navbar} navbar`}>
        <ul className={isVisibleDropMenu ? headerStyles.visible : headerStyles.invisible}>
          <li>
            <a onClick={() => setIsVisibleDropMenu(!isVisibleDropMenu)} href="#aboutMe">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setIsVisibleDropMenu(!isVisibleDropMenu)} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => setIsVisibleDropMenu(!isVisibleDropMenu)} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={() => setIsVisibleDropMenu(!isVisibleDropMenu)} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => setIsVisibleDropMenu(!isVisibleDropMenu)} href="#hireMe">
              Hire me
            </a>
          </li>
          <li>
            <ThemeToggle setTheme={toggleTheme} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
