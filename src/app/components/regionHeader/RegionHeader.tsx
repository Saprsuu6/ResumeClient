import React from 'react';

interface Props {
  title: string;
  subTitle: string;
}

const RegionHeader: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
    </div>
  );
};

export default RegionHeader;
