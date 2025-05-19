//import React from 'react';

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className || 'slick-arrow'}
      style={{ ...style, display: 'block', right: '10px', zIndex: 10 }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className || 'slick-arrow'}
      style={{ ...style, display: 'block', left: '10px', zIndex: 10 }}
      onClick={onClick}
    />
  );
}

export { NextArrow, PrevArrow };