import GroupContact from '@components/GroupContact';
import LangSwitch from '@components/LangSwitch';
import ThemeSwitch from '@components/ThemeSwitch';
import { email, github, linkedin } from '@config';
import { Box, Divider } from '@mui/material';

export function Footer() {
  return (
    <>
      <Divider />
      <Box
        component="footer"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
        }}
      >
        <GroupContact {...{ email, github, linkedin }} sizeIcon="medium" />
        <ThemeSwitch />
        <LangSwitch />
      </Box>
    </>
  );
}
