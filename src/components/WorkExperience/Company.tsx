import { ICompany } from '@content/Work-Experience';
import { Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

function Company({ name, position, startDate, endDate, description }: Omit<ICompany, 'projects'>) {
  const theme = useTheme();
  return (
    <CompanyCard>
      <Typography component="h3" variant="h5">
        {name}
      </Typography>
      <Typography variant="caption" gutterBottom>
        {startDate} ~ {endDate}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {position}
      </Typography>

      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
        {description}
      </Typography>
    </CompanyCard>
  );
}

export default Company;

const CompanyCard = styled('div')(
  ({ theme }) => `
  position: sticky;
  top: 2rem;
  padding-right: 2rem;

  display: flex;
  flex-direction: column;
  width: 18.75rem;

  ${theme.breakpoints.down('sm')} {
    width: 100%;
    padding-right: 0;
  }
`,
);
