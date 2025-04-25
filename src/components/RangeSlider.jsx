import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// Funkce pro formátování hodnoty (např. pro ceny)
function valuetext(value) {
  return `${value}`; // Můžete přidat měnu, např. `${value} Kč` nebo `${value} $`
}

export default function RangeSlider({ minPrice, maxPrice, setMinPrice, setMaxPrice,products }) {
const value = [Number(minPrice), Number(maxPrice)]
const maxProductPrice = Math.max(...products.map(p => p.price));
  const handleChange = (event, newValue) => {
    setMinPrice(newValue[0]); // Aktualizuje minPrice
    setMaxPrice(newValue[1]); // Aktualizuje maxPrice
  };

  return (
    <Box sx={{ width: 300 }}>
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