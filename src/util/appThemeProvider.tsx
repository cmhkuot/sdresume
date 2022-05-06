import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { ReactNode, useEffect, useMemo, useState } from 'react';

import { ColorModeContext } from './colorModeContext';

interface Props {
  children: ReactNode;
}

const MODE = 'mode';

export default function AppThemeProvider(props: Props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState<'dark' | 'light'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => {
          const nextMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem(MODE, nextMode);
          return nextMode;
        });
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
      }),
    [mode],
  );

  useEffect(() => {
    const localTheme = localStorage.getItem(MODE);
    if (localTheme !== undefined) {
      setMode(localTheme === 'dark' ? 'dark' : 'light');
    } else {
      setMode(prefersDarkMode ? 'dark' : 'light');
    }
  }, [prefersDarkMode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
