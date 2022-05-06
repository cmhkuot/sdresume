import { GitHub, LinkOff } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface TooltipProps {
  githubLink: string | null;
  otherLink: string | null;
}

export default function TooltipContent({ githubLink, otherLink }: TooltipProps) {
  const theme = useTheme();

  return (
    <Box sx={{ ml: 3 }}>
      {githubLink && (
        <IconButton
          href={githubLink}
          rel="noreferrer"
          target="_blank"
          sx={{ color: theme.palette.text.primary }}
          aria-label="github"
        >
          <GitHub fontSize="small" />
        </IconButton>
      )}
      {otherLink && (
        <IconButton
          href={otherLink}
          rel="noreferrer"
          target="_blank"
          sx={{ color: theme.palette.text.primary }}
          aria-label="github"
        >
          <LinkOff fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
}
