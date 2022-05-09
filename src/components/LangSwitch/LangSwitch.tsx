import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { useCookies } from 'react-cookie';

export default function LangSwitch() {
  const [cookie, setCookie] = useCookies(['NEXT_LOCALE']);
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const nextLocale = locale === 'en' ? 'vi' : 'en';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push({ pathname, query }, asPath, { locale: nextLocale });
    if (cookie.NEXT_LOCALE !== nextLocale) {
      setCookie('NEXT_LOCALE', nextLocale, { path: '/' });
    }
  };

  return (
    <Button size="small" onClick={handleClick}>
      {locale === 'en' ? 'VN' : 'EN'}
    </Button>
  );
}
