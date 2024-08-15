import React from 'react';

import RegionHeader from '../regionHeader/RegionHeader';
import ModalWindow from './modalWindow/ModalWindow';
import servicesStyles from './Services.module.scss';

const Services = () => {
  const [modalInfo, setModalInfo] = React.useState<number>();
  const [isClose, setIsClose] = React.useState(true);

  const modalWindowContext = [
    {
      title: 'Frontend development',
      services: [
        'Responsive Web Design',
        'Interactive User Interfaces',
        'SEO-Friendly Implementations',
        'Accessibility and UX Enhancement'
      ]
    },
    {
      title: 'Backend development',
      services: [
        'Development and support of server logic applications',
        'Working with databases',
        'Ensuring application security',
        'Performance optimization'
      ]
    },
    {
      title: 'Musician',
      services: ['Everything related to music']
    }
  ];

  return (
    <div id="services">
      <RegionHeader title="Services" subTitle="What I offer" />
      <div className={servicesStyles.cardContainer}>
        <div className={`${servicesStyles.card} card`}>
          <div className={servicesStyles.front_end}></div>
          <p className={servicesStyles.cardText}>Frontend development</p>
          <p
            onClick={() => {
              setIsClose(false);
              setModalInfo(0);
            }}
          >
            Read more
          </p>
        </div>
        <div className={`${servicesStyles.card} card`}>
          <div className={servicesStyles.back_end}></div>
          <p className={servicesStyles.cardText}>Backend development</p>
          <p
            onClick={() => {
              setIsClose(false);
              setModalInfo(1);
            }}
          >
            Read more
          </p>
        </div>
        <div className={`${servicesStyles.card} card`}>
          <div className={servicesStyles.musician}></div>
          <p className={servicesStyles.cardText}>Musician</p>
          <p
            onClick={() => {
              setIsClose(false);
              setModalInfo(2);
            }}
          >
            Read more
          </p>
        </div>
      </div>
      {modalInfo !== undefined && (
        <ModalWindow
          header={modalWindowContext[modalInfo].title}
          context={modalWindowContext[modalInfo].services}
          isClose={isClose}
          setIsClose={setIsClose}
        />
      )}
    </div>
  );
};

export default Services;
