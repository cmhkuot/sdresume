import { authorName } from '@config';
import { Box, styled, Typography } from '@mui/material';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '100px',
      }}
    >
      <Typography variant="overline">Build by {authorName}</Typography>
      <Typography variant="caption">Build by {authorName}</Typography>
    </Box>
  );
}
