import React from 'react';

import portfolioItemStyles from './PortfolioItem.module.css';

interface Props {
  backImg: string;
  header: string;
  text: string;
}

const PortfolioItem: React.FC<Props> = ({ backImg, header, text }) => {
  const image = {
    backgroundImage: `url(${backImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  return (
    <div className={portfolioItemStyles.portfolio_item}>
      <div style={image} />
      <div className={portfolioItemStyles.info}>
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
