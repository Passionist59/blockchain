import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel3';

const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: false,
  dots: true,
  autoplay: true,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

const AboutTestimonial = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
  }, []);
  return (
    <>
      <div className='testimonial-area-two ptb-100'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>What Creators Have To Say</h2>
          </div>

          <div className='testimonial-slider-two owl-theme pt-45'>
            {display ? (
              <OwlCarousel {...options}>
                <div className='testimonial-slider-item'>
                  <div className='row align-items-center'>
                    <div className='col-lg-9'>
                      <div className='testimonial-slider-content'>
                        <img
                          src={require('../../assets/imgs/testimonial/testimonial-line.png')}
                          alt='image'
                        />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Elementum lacus, tempus aliquam turpis diam amet
                          leo enim. Nisi enim lorem condimentum tincidunt ornare
                          nam adipiscing. Volutpat lacus, est hendrerit elit sed
                          interdum.
                        </p>
                        <ul>
                          <li>Rennie Wood </li>
                          <li>Founder</li>
                        </ul>
                      </div>
                    </div>

                    <div className='col-lg-3'>
                      <div className='testimonial-slider-img'>
                        <img
                          src={require('../../assets/imgs/testimonial/testimonial-img.png')}
                          alt='Images'
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='testimonial-slider-item'>
                  <div className='row align-items-center'>
                    <div className='col-lg-9'>
                      <div className='testimonial-slider-content'>
                        <img
                          src={require('../../assets/imgs/testimonial/testimonial-line.png')}
                          alt='image'
                        />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Elementum lacus, tempus aliquam turpis diam amet
                          leo enim. Nisi enim lorem condimentum tincidunt ornare
                          nam adipiscing. Volutpat lacus, est hendrerit elit sed
                          interdum.
                        </p>
                        <ul>
                          <li>Macie Mood </li>
                          <li>Ex Manager</li>
                        </ul>
                      </div>
                    </div>

                    <div className='col-lg-3'>
                      <div className='testimonial-slider-img'>
                        <img
                          src={require('../../assets/imgs/testimonial/testimonial-img2.png')}
                          alt='Images'
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='testimonial-slider-item'>
                  <div className='row align-items-center'>
                    <div className='col-lg-9'>
                      <div className='testimonial-slider-content'>
                        <img
                          src={require('../../assets/imgs/testimonial/testimonial-line.png')}
                          alt='image'
                        />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Elementum lacus, tempus aliquam turpis diam amet
                          leo enim. Nisi enim lorem condimentum tincidunt ornare
                          nam adipiscing. Volutpat lacus, est hendrerit elit sed
                          interdum.
                        </p>
                        <ul>
                          <li>Olivia Jenar</li>
                          <li>CEO and Director</li>
                        </ul>
                      </div>
                    </div>

                    <div className='col-lg-3'>
                      <div className='testimonial-slider-img'>
                        <img
                          src={require('../../assets/imgs/testimonial/testimonial-img3.png')}
                          alt='Images'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTestimonial;
