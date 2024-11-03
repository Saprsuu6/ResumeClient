import '../../../index.scss';

import React from 'react';

import RegionHeader from '../regionHeader/RegionHeader';
import PortfolioItem from './portfolioItem/PortfolioItem';
import projectStyles from './Projects.module.scss';

const Propjects = () => {
  const portfolio = [
    {
      img: 'https://s3.tebi.io/resume-site-pictures/a86e1e1e-1b23-467d-ba65-0fa35444700d_calculator_of_calories.jpg',
      header: 'Calculator of calories',
      text: 'This is a convenient mobile application designed for those who strive for a healthy lifestyle and want to control their diet. It is a solar tool for counting calories, substances, proteins and substances in your daily diet to help you maintain your ideal weight.'
    },
    {
      img: 'https://s3.tebi.io/resume-site-pictures/e0cc0f9e-114d-417b-a528-e5ad00c6252d_gallow.jpg',
      header: 'Gallow',
      text: 'This is a classic word puzzle game where players have to guess the words to save a little man from virtual execution. The goal of the game is simple, but it requires players to have logic, intuition and a good vocabulary.'
    },
    {
      img: 'ttps://s3.tebi.io/resume-site-pictures/8e849d3b-aa42-47c6-a1a1-c88d98cf209a_instagram.jpg',
      header: 'Instagram',
      text: 'This is a world famous photo and video sharing app that allows users to share their life moments with friends, family and the world.'
    },
    {
      img: 'ttps://s3.tebi.io/resume-site-pictures/4ff34977-4f19-452f-b27f-cd1bea58a74d_monopoly.jpg',
      header: 'Monopoly',
      text: 'This is a famous board game invented in the early 20th century that has become one of the most popular and best-selling family entertainment in the world. The game simulates economic activity, where players move around the playing field, buying, selling and renting real estate, aiming to monopolize the market and bankrupt their rivals.This is a famous board game invented in the early 20th century that has become one of the most popular and best-selling family entertainment in the world. The game simulates economic activity, where players move around the playing field, buying, selling and renting real estate, aiming to monopolize the market and bankrupt their rivals.'
    },
    {
      img: 'https://s3.tebi.io/resume-site-pictures/b763e0b3-2410-48b1-b1b4-88b09c6e46b9_wallets.jpg',
      header: 'Wallets',
      text: 'This is a universal financial tool designed for convenient management of personal finances directly from your smartphone. This powerful app allows users to not only track their expenses and income, but also plan a budget, create financial goals, and analyze their financial habits with in-depth analysis and intuitive charts.'
    },
    {
      img: 'https://s3.tebi.io/resume-site-pictures/4626ecca-1c1f-4c6a-b385-b39da2a688dc_asicxchange.png',
      header: 'AsicxChange',
      text: 'ASICXchange is one of the largest miner distributors, specializing in offline sales. With five years of experience in the cryptocurrency mining industry, we are working to making crypto mining accessible to all. From start to finish, we are your trusted partner for all your mining needs. ASICXchange’s handle everything from land and power solutions to hosting facilities and mining infrastructure, including transformers, containers, immersion solutions, miner sales, and parts. <a target="_blank" href="https://asicxchange.com/">https://asicxchange.com</a>'
    },
    {
      img: 'https://s3.tebi.io/resume-site-pictures/d9fd6375-8a15-427d-89a1-c414307dcebf_html&css&js.jpg',
      header: 'ASICXchange',
      text: 'ASICXchange is a leading distributor of cryptocurrency mining equipment, dedicated to making mining accessible for everyone. With over five years in the industry, we specialize in offline sales and provide comprehensive solutions to meet all mining needs. Our services include land and power solutions, hosting facilities, and advanced mining infrastructure. We offer a complete range of products such as transformers, containers, immersion cooling systems, miners, and parts. From setup to maintenance, ASICXchange is your reliable partner in the world of crypto mining. <a target="_blank" href="https://saprsuu6.github.io/Html-CssPractice/">https://saprsuu6.github.io/Html-CssPractice/</a>.'
    }
  ];

  const slide = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [startX, setStartX] = React.useState(0);
  const [swiping, setSwiping] = React.useState(false);

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setSwiping(false);
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.touches && e.touches.length === 1) {
      setSwiping(true);
    }
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const touch = e.changedTouches[0];
    const endX = touch.clientX;

    if (swiping) {
      if (startX - endX > 50) {
        toggleSlide(goToPrevious);
      } else if (endX - startX > 50) {
        toggleSlide(goToNext);
      }
    }
  };

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? portfolio.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === portfolio.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToCurrent = (index?: number) => {
    if (index !== undefined) setCurrentIndex(index);
  };

  const toggleSlide = (callback: (index?: number) => void, index?: number) => {
    if (slide.current?.classList.contains('fade-in')) slide.current?.classList.remove('fade-in');
    slide.current?.classList.add('fade-out');

    setTimeout(() => {
      callback(index);

      slide.current?.classList.remove('fade-out');
      slide.current?.classList.add('fade-in');
    }, 1000);
  };

  return (
    <div id="projects">
      <RegionHeader title="Portfolio" subTitle="Most recent work" />
      <div
        className={projectStyles.carousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={projectStyles.slides}>
          <div ref={slide} className={projectStyles.slide}>
            <PortfolioItem
              backImg={portfolio[currentIndex].img}
              header={portfolio[currentIndex].header}
              text={portfolio[currentIndex].text}
            />
          </div>
        </div>

        <div className={projectStyles.navigation}>
          <input
            type="radio"
            id="radio1"
            checked={currentIndex === 0}
            onChange={() => toggleSlide(goToCurrent, 0)}
            name="slides"
          />
          <label htmlFor="radio1" className={projectStyles.radio_custom_label} />
          <input
            type="radio"
            id="radio2"
            checked={currentIndex === 1}
            onChange={() => toggleSlide(goToCurrent, 1)}
            name="slides"
          />
          <label htmlFor="radio2" className={projectStyles.radio_custom_label} />
          <input
            type="radio"
            id="radio3"
            checked={currentIndex === 2}
            onChange={() => toggleSlide(goToCurrent, 2)}
            name="slides"
          />
          <label htmlFor="radio3" className={projectStyles.radio_custom_label} />
          <input
            type="radio"
            id="radio4"
            checked={currentIndex === 3}
            onChange={() => toggleSlide(goToCurrent, 3)}
            name="slides"
          />
          <label htmlFor="radio4" className={projectStyles.radio_custom_label} />
          <input
            type="radio"
            id="radio5"
            checked={currentIndex === 4}
            onChange={() => toggleSlide(goToCurrent, 4)}
            name="slides"
          />
          <label htmlFor="radio4" className={projectStyles.radio_custom_label} />
        </div>

        <button onClick={() => toggleSlide(goToPrevious)} className={projectStyles.prev}>
          &#10094;
        </button>
        <button onClick={() => toggleSlide(goToNext)} className={projectStyles.next}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Propjects;
