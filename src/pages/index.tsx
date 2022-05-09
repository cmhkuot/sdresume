import { GetStaticProps } from 'next';
import { Footer } from '@components/Footer';
import Header from '@components/Header/Header';
import SkillsSection from '@components/SkillsSection';
import WorkExperienceSection from '@components/WorkExperience';
import { IHome } from '@interfaces/Home';
import { en, vi } from '@lang';
import { Container } from '@mui/material';

export default function Home(props: IHome) {
  const data = props.locale === 'en' ? en : vi;
  return (
    <Container maxWidth="md">
      <Header {...data.header} />
      <WorkExperienceSection {...data.workExperience} />
      <SkillsSection {...data.skills} />
      <Footer />
    </Container>
  );
}

export async function getStaticProps(context: GetStaticProps) {
  return {
    props: {
      ...context,
    },
  };
}
