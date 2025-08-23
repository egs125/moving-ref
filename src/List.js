import { useState } from 'react';

import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';

import items from './items.json';

import DetailModal from './DetailModal'; 
import Buttons from './Buttons';
import Item from './Item';

export default function List() {
  
  const [selectedCategories, selectCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleCategorySelect = (category) => {
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

  const handleClose = () => {
    setOpen(false);
    setSelectedItem({});
  };

  const handleSelectItem = item => {
    setSelectedItem(item);
    setOpen(true);
  }

  return (
    <div className="App">
      <DetailModal
        open={open}
        handleClose={handleClose}
        selectedItem={selectedItem}
      />
      <Buttons 
        handleCategorySelect={handleCategorySelect} 
        isSelected={isSelected}
      />
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
          cols={2} 
          rowHeight="auto" 
          gap={2}
        >
        {filteredItems.map((item, idx) => (
          <Item 
            key={idx} 
            item={item} 
            handleSelectItem={handleSelectItem} 
          /> 
        ))}
        </ImageList>  
      </Box>    
    </div>
  );
}