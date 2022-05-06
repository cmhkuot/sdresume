import Header from '@components/Header/Header';
import WorkExperienceSection from '@components/WorkExperience';
import { data as headerData } from '@content/Header';
import { data as otherExperienceDate } from '@content/Other-Experience';
import { data as skillsData } from '@content/Skills';
import { data as workExperienceData } from '@content/Work-Experience';
import IHome from '@interfaces/Home';
import { Container } from '@mui/material';

export default function Home({ header, workExperience, skills, otherExperience }: IHome) {
  return (
    <Container maxWidth="md">
      <Header {...header} />
      <WorkExperienceSection {...workExperience} />
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {
      header: headerData,
      workExperience: workExperienceData,
      skills: skillsData,
      otherExperience: otherExperienceDate,
    },
  };
}
