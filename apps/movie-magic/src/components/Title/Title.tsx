import type * as React from 'react';

export interface TitleProps {
  children?: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <h1 className="mb-8 text-3xl font-bold">{children}</h1>;
}
