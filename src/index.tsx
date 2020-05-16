import React from 'react';
import ReactDOM from 'react-dom';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
import image11 from './images/11.jpg';
import image12 from './images/12.jpg';

const IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
]

function Container() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image />
    </div>
  )
}

function Image() {
  const index = Math.floor(Math.random() * IMAGES.length);
  const image = IMAGES[index];

  return (
    <img src={image} style={{maxWidth: '80%', maxHeight: '80%'}} alt="nature!"/>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('root')
);
