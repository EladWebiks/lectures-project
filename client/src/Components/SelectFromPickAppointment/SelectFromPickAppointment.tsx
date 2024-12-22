import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectInterface{
    setDescription: (kind: string)=>void,
}

const SelectFromPickAppointment :React.FC<SelectInterface>=({setDescription})=> {

 

  const handleChange = (event: SelectChangeEvent) => {
    setDescription(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">type of treatment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="type of treatment"
          onChange={handleChange}
        >
          <MenuItem value=''></MenuItem>
          <MenuItem value='nails'>nails</MenuItem>
          <MenuItem value='eyebrows'>eyebrows</MenuItem>
          <MenuItem value='feet'>feet</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectFromPickAppointment;