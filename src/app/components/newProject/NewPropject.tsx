import '../../../index.scss';

import socialLinks from '../../assets/socialLinks.json';
import { MainContantContainerProps } from '../../pages/Landing';
import MapLibre from './map/MapLibre';
import newProjectStyle from './NewProjectStyle.module.scss';

const NewPropject: React.FC<MainContantContainerProps> = ({ className }) => {
  return (
    <div id="hireMe" className={`${newProjectStyle.container} ${className}`}>
      <div className={newProjectStyle.min_border}>
        <div>
          <h3>Do you have a new project?</h3>
          <p>Contact me, let's conquer the world with a project.</p>
          <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer">
            <button>Contact Me</button>
          </a>
        </div>
        <div className={newProjectStyle.hire_me_picture} />
        <div className={newProjectStyle.map_block}>
          <MapLibre />
          <button id="goHome">Fly to me:)</button>
        </div>
      </div>
    </div>
  );
};

export default NewPropject;
