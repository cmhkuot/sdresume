import GroupContact from '@components/GroupContact/GroupContact';
import LangSwitch from '@components/LangSwitch';
import ThemeSwitch from '@components/ThemeSwitch/ThemeSwitch';
import { authorImage, authorName, email, github, linkedin } from '@config';
import { IHeader } from '@interfaces/Header';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Header({ heading, description }: IHeader) {
  return (
    <Box component="header">
      <HeadingWrapper>
        <HeadingText variant="h1" sx={theme => ({ [theme.breakpoints.down('sm')]: { fontSize: '2.375rem' } })}>
          {heading}
        </HeadingText>
        {/* <Box
          sx={theme => ({
            [theme.breakpoints.down('sm')]: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
          })}
        >
          <LangSwitch />
          <ThemeSwitch />
        </Box> */}
      </HeadingWrapper>
      <DescriptionWrapper>
        <Avatar sx={{ width: 64, height: 64 }} src={authorImage.default.src} alt={authorName} />
        <Box ml={2}>
          <Typography mb={0} paragraph dangerouslySetInnerHTML={{ __html: description }}></Typography>
          <GroupContact {...{ email, github, linkedin }} sizeIcon="small" />
        </Box>
      </DescriptionWrapper>
    </Box>
  );
}

const HeadingWrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.palette.text.primary};
  margin-top: ${theme.spacing(3)};
  margin-bottom: ${theme.spacing(3)};
`,
);

const HeadingText = styled(Typography)(
  ({ theme }) => `
  font-weight: bold;
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
  letter-spacing: ${theme.typography.h3.letterSpacing};
  text-transform: none;
  background-clip: text;
  background-image: linear-gradient(25deg, ${theme.palette.text.primary} 10%, ${theme.palette.primary.main} 60%);
  -webkit-text-fill-color: transparent;
`,
);

const DescriptionWrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  color: ${theme.palette.text.primary};
  margin-bottom: ${theme.spacing(3)};
`,
);
