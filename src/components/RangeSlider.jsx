import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}`; 
}

export default function RangeSlider({ minPrice, maxPrice, setMinPrice, setMaxPrice,products }) {
const value = [Number(minPrice), Number(maxPrice)]
const maxProductPrice = Math.max(...products.map(p => p.price));
  const handleChange = (event, newValue) => {
    setMinPrice(newValue[0]); 
    setMaxPrice(newValue[1]); 
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0} 
        max={maxProductPrice} 
        step={10}
      />
    </Box>
  );
}