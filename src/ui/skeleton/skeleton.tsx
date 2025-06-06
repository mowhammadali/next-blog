import React from 'react';
import css from '@/ui/skeleton/skeleton.module.css';

type SkeletonProps = {
  width?: string;
  height?: string;
  variant?: 'text' | 'circle' | 'rect';
  theme?: 'light' | 'dark';
};

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  variant = 'text',
  theme = 'light',
}) => {
  const classNames = [
    css.skeleton,
    css[variant],
    css[theme],
  ].join(' ');

  return (
    <div
      className={classNames}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
