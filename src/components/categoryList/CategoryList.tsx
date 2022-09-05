import React from 'react';
import './CategoryList.scss';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export const CategoryList = React.memo(() => {

  const radioStyle = {
    color: '#DFDFDF',
    '&.Mui-checked': {
      color: '#000000',
    },
  }

  return (
    <div className={'categoryFilter'} onClick={e => e.stopPropagation()}>
      <div className={'content'}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="sculpture" control={<Radio sx={radioStyle}/>} label="Sculpture"/>
            <FormControlLabel value="architecture" control={<Radio sx={radioStyle}/>} label="Architecture"/>
            <FormControlLabel value="landscape" control={<Radio sx={radioStyle}/>} label="Landscape"/>
            <FormControlLabel value="graphicArts" control={<Radio sx={radioStyle}/>} label="Graphic arts"/>
            <FormControlLabel value="portrait" control={<Radio sx={radioStyle}/>} label="Portrait"/>
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
})
