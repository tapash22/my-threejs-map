import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const SliderComponent = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    <div className="slider-container">
      <div className="slider-line">Your Road, Your Rules, Your Car. </div>
      {data.map((slide, index) => (
        <div key={slide.id} className={`slider-content ${currentIndex === index ? 'visible' : ''}`}>
          <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
          <div className="text-container">
            <div className="left-part">
              <div >
                <h2 style={{ fontSize: '62px', fontWeight: 700, color: slide.color, letterSpacing: '1px', padding: 0, margin: 0, textAlign: 'start' }}>
                  {slide.text}
                </h2>
            <div className='py-2 flex justify-start'>
            <Link to={`/slider_car/${slide.id}}`} style={{background: slide.color}} className='px-8 py-3 text-lg font-bold tracking-wide rounded-md shadow-lg shadow-indigo-900 text-white'>
                    {slide.button}
                </Link>
            </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderComponent;
