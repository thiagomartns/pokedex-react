import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CardColor } from '../context/CardColor';
import { useContext } from 'react';

export default function SelectSmall() {
  const { generation, handleChange } = useContext(CardColor)

  // const handleChange = (event) => {
  //   setGeneration(event.target.value);
  // };

  return (
    <FormControl sx={{ minWidth: 175, mb: '1rem' }} size="small">
      <InputLabel id="demo-select-small">Generations</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={generation}
        label="Generation"
        onChange={handleChange}
      >
        <MenuItem value={'1'}>First</MenuItem>
        <MenuItem value={'2'}>Second</MenuItem>
        <MenuItem value={'3'}>Third</MenuItem>
        <MenuItem value={'4'}>Fourth</MenuItem>
        <MenuItem value={'5'}>Fifth</MenuItem>
        <MenuItem value={'6'}>Sixth</MenuItem>
        <MenuItem value={'7'}>Seventh</MenuItem>
        <MenuItem value={'8'}>Eighth</MenuItem>
      </Select>
    </FormControl>
  );
}
