import React from 'react';

function CustomPagination({ totalSlides, activeSlide, onBulletClick, yearsArray }) {
  const bullets = [];

  for (let i = 0; i < totalSlides; i++) {
    const isActive = i === activeSlide;
    bullets.push(
      <div
        key={i}
        className={`pagination-bullet ${isActive ? 'active' : ''}`}
        onClick={() => onBulletClick(i)}
      >{yearsArray[i]}</div>
    );
  }

  return (
    <div className="custom-pagination">
      {bullets}
    </div>
  );
}

export default CustomPagination;
