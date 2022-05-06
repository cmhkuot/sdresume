import ThemeSwitch from '@components/ThemeSwitch/ThemeSwitch';
import { authorImage, authorName } from '@config';
import { IHeader } from '@content/Header';
import { Avatar, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Header({ heading, description }: IHeader) {
  return (
    <>
      <HeadingWrapper>
        <HeadingText variant="h1">{heading}</HeadingText>
        <ThemeSwitch />
      </HeadingWrapper>
      <DescriptionWrapper>
        <Avatar sx={{ width: 64, height: 64 }} src={authorImage.default.src} alt={authorName} />
        <Typography ml={2} mb={0} paragraph dangerouslySetInnerHTML={{ __html: description }}></Typography>
      </DescriptionWrapper>
    </>
  );
}

const HeadingWrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.palette.text.primary};
  margin-bottom: ${theme.spacing(3)}
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
  margin-bottom: ${theme.spacing(3)}
`,
);
