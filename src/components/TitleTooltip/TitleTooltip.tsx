import { Box, Typography } from '@mui/material';

import TooltipContent from './TooltipContent';

interface ITitleTooltip {
  text: string;
  githubLink: string | null;
  otherLink: string | null;
}

function TitleTooltip({ text, githubLink, otherLink }: ITitleTooltip) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography component="h3" variant="h5" fontWeight="bold" gutterBottom>
        {text}
      </Typography>
      {githubLink !== null || otherLink !== null ? (
        <TooltipContent githubLink={githubLink} otherLink={otherLink} />
      ) : null}
    </Box>
  );
}

export default TitleTooltip;
