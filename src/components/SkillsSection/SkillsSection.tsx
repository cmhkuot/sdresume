import Section from '@components/Section';
import { ISkills } from '@content/Skills';
import { Typography } from '@mui/material';

import Skill from './Skill';

function SkillsSection({ title, list }: ISkills) {
  return (
    <Section>
      <Typography component="h2" variant="h4">{title}</Typography>
      {list.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </Section>
  );
}

export default SkillsSection;
