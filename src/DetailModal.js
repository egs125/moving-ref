import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

export default function DetailModal({
  open,
  handleClose,
  selectedItem,
}) {

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: 300,
          textAlign: 'center',
          p: 2,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div style={{ cursor: 'pointer' }} onClick={handleClose}>
            <Typography variant="h6" sx={{ color: 'text.primary' }}>X</Typography>
          </div>
        </Box>
        <Box sx={{ mt: 2 }}>
          <a
            href={selectedItem.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              srcSet={`${process.env.PUBLIC_URL}/images/${selectedItem?.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
              src={`${process.env.PUBLIC_URL}/images/${selectedItem?.img}?w=400&h=400&fit=crop&auto=format`}
              alt={selectedItem?.title}
              loading="lazy"
              style={{ maxHeight: '80vh', maxWidth: '90vw', display: 'block', margin: '0 auto' }} 
            />
          </a>
        </Box>
      </Box>
    </Modal>
  );
};