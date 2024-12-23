import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectInterface {
  setDescription: (kind: string) => void;
}

const SelectFromPickAppointment: React.FC<SelectInterface> = ({ setDescription }) => {
  const [selectedValue, setSelectedValue] = useState<string>(''); // Ensure default value is defined

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setSelectedValue(value); // Update local state
    setDescription(value); // Pass the selected value to the parent
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type of treatment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue} // Controlled component with a default value
          onChange={handleChange}
          label="Type of treatment"
        >
          <MenuItem value="nails">Nails</MenuItem>
          <MenuItem value="eyebrows">Eyebrows</MenuItem>
          <MenuItem value="feet">Feet</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFromPickAppointment;
