import './TourDiv.css';
import React from 'react';
import TourCard from '../TourCard/TourCard';

const divStyle = {
  width: '80%',
  margin: 'auto',
};

const TourDiv = (props) => {
  const { tourList } = props;

  return (
    <div style={divStyle}>
      {tourList.map((tour) => <TourCard key={tour.id} tourData={tour} />)}
    </div>
  );
};
export default TourDiv;
