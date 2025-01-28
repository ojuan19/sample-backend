import React from 'react';

const Slider: React.FC = () => {
  return (
    <div className="w-full flex overflow-x-scroll">
      <img src="/images/slide1.jpg" alt="Slide 1" className="w-full" />
      <img src="/images/slide2.jpg" alt="Slide 2" className="w-full" />
      <img src="/images/slide3.jpg" alt="Slide 3" className="w-full" />
    </div>
  );
};

export default Slider;