import React from 'react';
import { memo } from 'react';
import { NextPage } from 'next';
import { AvatarComponent } from '../components/avatar';
import { Container } from './index/style';

export const Index: NextPage = () => {
  return (
    <>
      <div>index</div>
      <AvatarComponent />
      <Container>X_X</Container>
    </>
  );
};

export default memo(Index);
