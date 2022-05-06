import { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';

export default interface IApp extends AppProps {
  emotionCache?: EmotionCache;
}
