'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export function CommentSection() {
  const { theme } = useTheme();

  return (
    <Giscus
      repo="xFalzz/sinopsisp"
      repoId="R_kgDOO_5i7Q"
      category="General"
      categoryId="DIC_kwDOO_5i7c4Cr2Cz"
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme === 'dark' ? 'dark' : 'light'}
      lang="id"
      loading="lazy"
    />
  );
} 