
import ImageListItem from '@mui/material/ImageListItem';

export default function Item({ item, handleSelectItem }) {
  return (
    <ImageListItem
      key={item.img}
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        aspectRatio: '1 / 1'
      }}
    >
      <img
        srcSet={`${process.env.PUBLIC_URL}/images/${item.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
        src={`${process.env.PUBLIC_URL}/images/${item.img}?w=400&h=400&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
        onClick={() => handleSelectItem(item)}
        style={{
          cursor: 'pointer',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          aspectRatio: '1 / 1',
          display: 'block'
        }}
      />
    </ImageListItem>
  );
};