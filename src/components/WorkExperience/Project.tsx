import Li from '@components/Li';
import TitleTooltip from '@components/TitleTooltip';
import { IProject } from '@interfaces/WorkExperience';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function Project({ title, description, startDate, endDate, which, techStack }: IProject) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 3,
        '&:last-child': {
          mb: 0,
        },
      }}
    >
      <TitleTooltip {...title} />
      <Typography variant="caption" gutterBottom>
        {startDate} ~ {endDate}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      {which.length > 0 && (
        <ul style={{ marginTop: '.75rem', marginBottom: '.75rem' }}>
          {which.map((each, index) => (
            <Li key={index}>{each}</Li>
          ))}
        </ul>
      )}

      {techStack && techStack.length > 0 && (
        <TechDiv>
          {techStack.map((tech, index) => (
            <TechSpan key={index}>{tech}</TechSpan>
          ))}
        </TechDiv>
      )}
    </Box>
  );
}

export default Project;

const TechDiv = styled('div')(`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`);

const TechSpan = styled('span')(
  ({ theme }) => `
  padding: 0.125rem 0.5rem;
  border-radius: 32px;
  font-size: 0.75rem;
  background-color: ${theme.palette.mode === 'light' ? `#f4f4f4` : `#2e2e2e`};
`,
);
