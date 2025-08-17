import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import items from './items.json'; 

export default function List() {
  
  const [selectedCategories, selectCategories] = useState([]);
  const handleCategorySelect = (category) => {
    // selectCategories((prev) =>
    //   prev.includes(category)
    //     ? prev.filter((c) => c !== category)
    //     : [...prev, category]
    // );
    selectCategories(prev => {
      if (prev.includes(category)) {
        // 이미 선택된 카테고리면 제거
        return prev.filter(c => c !== category); 
      } else {
        // 선택되지 않은 카테고리면 추가. 모든 카테고리 선택 시 빈 배열로 초기화
        return prev.length === 2 ? [] : [...prev, category];
      }
    });
  };
  
  const isSelected = category => selectedCategories.includes(category);

  const filteredItems = items.filter(item => {
    if (selectedCategories.length === 0) return true; // Show all if no category is selected
    return selectedCategories.includes(item.category);
  });

  return (
    <div className="App">
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
      <Box sx={{ height: 72 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <ImageList 
          sx={{ width: '100%', maxWidth: 606 }} 
          cols={3} 
          rowHeight="auto" 
          gap={2}
        >
        {filteredItems.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              aspectRatio: '1 / 1'
            }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                aspectRatio: '1 / 1'
              }}
            >
              <img
                srcSet={`${process.env.PUBLIC_URL}/images/${item.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
                src={`${process.env.PUBLIC_URL}/images/${item.img}?w=400&h=400&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  cursor: 'pointer',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  aspectRatio: '1 / 1',
                  display: 'block'
                }}
              />
            </a>
          </ImageListItem>
        ))}
        </ImageList>  
      </Box>    
    </div>
  );
}