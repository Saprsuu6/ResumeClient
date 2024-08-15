import '../../../index.scss';

import socialLinks from '../../assets/socialLinks.json';
import RegionHeader from '../regionHeader/RegionHeader';
import aboutMeStyles from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div id="aboutMe" className={`${aboutMeStyles.grid_container} grid_container`}>
      <div className={aboutMeStyles.grid_item}>
        <RegionHeader title="About Me" subTitle="My Introduction" />
      </div>
      <div className={aboutMeStyles.grid_item}></div>
      <div className={aboutMeStyles.grid_item}>
        <p>
          An accomplished Frontend Developer with a passion for creating seamless user experiences. With a solid
          foundation in HTML, CSS, and JavaScript, I specialize in crafting visually captivating and intuitively
          navigable websites. Leveraging my expertise in responsive design and UI/UX principles, I bring concepts to
          life, ensuring each project is a masterpiece of precision and functionality.
        </p>

        <div className={aboutMeStyles.number_info}>
          <div className={aboutMeStyles.info}>
            <p>02+</p>
            <span>Years experience</span>
          </div>
          <div className={aboutMeStyles.info}>
            <p>10+</p>
            <span>Completed projects</span>
          </div>
          <div className={aboutMeStyles.info}>
            <p>03+</p>
            <span>Companies worked</span>
          </div>
        </div>
        <ul className={`${aboutMeStyles.cvs} cvs`}>
          <li>
            <a href={socialLinks.android_developer} target="_blank" rel="noopener noreferrer">
              Android Developer CV
            </a>
          </li>
          <li>
            <a href={socialLinks.net_developer} target="_blank" rel="noopener noreferrer">
              NET Developer CV
            </a>
          </li>
          <li>
            <a href={socialLinks.nodeJs_developer} target="_blank" rel="noopener noreferrer">
              NodeJs Developer CV
            </a>
          </li>
          <li>
            <a href={socialLinks.frontEnd_web} target="_blank" rel="noopener noreferrer">
              FrontEnd Developer CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
