import React, { useState, useEffect } from 'react';

const PositionIndicator = ({scrollPosition}) => {
  

  return (
    <div style={{ width: `${scrollPosition}%` }} className='position'>
      {/* Indicator */}
    </div>
  );
};

export default PositionIndicator;
