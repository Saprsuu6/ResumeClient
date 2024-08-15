import '../../../index.scss';

import footerStyles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.tooltip}>
        &copy; 2024 Моя Компания. Все права защищены.
        <p className={footerStyles.tooltiptext}>
          Включая право на шутку. Если вы найдете где-то наш копирайт без шутки, значит, он потерялся по пути.
          Пожалуйста, верните его нам, мы обещаем быть смешнее!
          <br />
          <strong>Oh yes, if you are an English speaker translate in a translator please.</strong>
        </p>
      </div>
      <ul>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <div className={footerStyles.text_container}>
        <p>By Andry Sapryhin - React</p>
        <div className={`${footerStyles.image_container} image_container`}>
          <div className={`${footerStyles.logo_img} logo_img`}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
