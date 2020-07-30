import React from 'react';
import NextLink from 'next/link';

export const Link = ( children, to, ...props ) => (
  <NextLink href={to}>
    <a {...props}>{children}</a>
  </NextLink>
);
