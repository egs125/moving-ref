import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Buttons({ handleCategorySelect, isSelected }) {
  return (
    <React.Fragment>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          bgcolor: '#fff',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          py: 2, // 상하 여백
        }}
      >
        <ButtonGroup variant="text" aria-label="Basic button group">
          {/* <Button onClick={() => handleCategorySelect('A')} variant={isSelected('A') ? 'contained' : 'outlined'}>전체</Button> */}
          <Button onClick={() => handleCategorySelect('B')} variant={isSelected('B') ? 'contained' : 'outlined'}>욕실</Button>
          <Button onClick={() => handleCategorySelect('L')} variant={isSelected('L') ? 'contained' : 'outlined'}>스위치&조명</Button>
          <Button onClick={() => handleCategorySelect('E')} variant={isSelected('E') ? 'contained' : 'outlined'}>ETC</Button>
        </ButtonGroup>
      </Box>
    </React.Fragment>
  );
};
