import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';

export interface IApp extends AppProps {
  emotionCache?: EmotionCache;
}
