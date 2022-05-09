import Li from '@components/Li';
import { ISkill } from '@interfaces/Skills';
import { Box, Typography, useTheme } from '@mui/material';

function Skill({ name, descriptions }: ISkill) {
  const theme = useTheme();
  return (
    <Box>
      <Typography component="h3" variant="h5" fontWeight="bold">
        {name}
      </Typography>
      <ul>
        {descriptions.map((description, index) => (
          <Li key={index} theme={theme}>
            {description}
          </Li>
        ))}
      </ul>
    </Box>
  );
}

export default Skill;
