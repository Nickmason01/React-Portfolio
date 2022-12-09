    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.css';
    import Carousel from 'react-bootstrap/Carousel';
      
    export default function App() {
      return (
        <div style={{ display: 'block', width: 700, padding: 30 }}>
          <h4>What I Have Created!</h4>
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
    src="/JATE2.png"
                alt="One"
              />
              <Carousel.Caption>
                <h3>Text-Editor</h3>
                <p>A simple PWA text-editor</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
    src="/JATE2.png"
                alt="Two"
              />
              <Carousel.Caption>
                <h3>How does it work?</h3>
                <p>Allows the user to write text to the interface and saves that info to MongoDB for storage and usage offline</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
    src="/JATE2.png"
                alt="Three"
              />
              <Carousel.Caption>
                <h3>Links!</h3>
                <a href="https://github.com/Nickmason01/Party-Planner">github</a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      );
    }



