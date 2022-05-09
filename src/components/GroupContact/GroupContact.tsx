import IGroupContact from '@interfaces/GroupContact';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

export default function GroupContact({ email, github, linkedin, sizeIcon }: IGroupContact) {
  return (
      <Box>
      <IconButton href={`mailto:${email}`} size={sizeIcon} aria-label="email">
        <Email fontSize="inherit" />
      </IconButton>

      <IconButton href={github} target="_blank" size={sizeIcon} aria-label="email">
        <GitHub fontSize="inherit" />
      </IconButton>

      <IconButton href={linkedin} target="_blank" size={sizeIcon} aria-label="email">
        <LinkedIn fontSize="inherit" />
      </IconButton>
    </Box>
  );
}
