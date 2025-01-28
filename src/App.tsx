import React from 'react';
import Slider from './components/Slider/Slider';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="dark">
      <Slider />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;