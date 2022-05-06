import Section from '@components/Section';
import { IWorkExperience } from '@content/Work-Experience';
import { Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

import Company from './Company';
import Project from './Project';

function WorkExperienceSection({ title, list }: IWorkExperience) {
  const theme = useTheme();

  return (
    <Section>
      <Typography component="h2" variant="h4">
        {title}
      </Typography>
      {list.map((company, index) => (
        <CompanyWrapper key={index}>
          <div>
            <Company {...company} />
          </div>
          <ProjectWrapper theme={theme}>
            {company.projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </ProjectWrapper>
        </CompanyWrapper>
      ))}
    </Section>
  );
}

export default WorkExperienceSection;

const CompanyWrapper = styled('div')(
  ({ theme }) => `
  display: flex;
  margin-bottom: 2rem;

  & > div:first-of-type {
    height: auto;
  }

  ${theme.breakpoints.down('sm')}{
    flex-direction: column;
  }
`,
);

const ProjectWrapper = styled('div')(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;

  ${theme.breakpoints.down('sm')} {
    padding-left: 1rem;
    border-left: solid 3px ${theme.palette.primary.main};
  }
`,
);
