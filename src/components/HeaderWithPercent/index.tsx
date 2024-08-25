import React from 'react';
import { Container, IconLeft, Title, Subtitle } from './styles';

interface IPercentCard {
  percentage: number;
}

export function HeaderWithPercent({ percentage }: IPercentCard) {
  const isRed = percentage < 50;

  return (
    <Container isRed={isRed}>
      <IconLeft isRed={isRed} />
      <Title> {percentage !== undefined ? percentage.toFixed(2) : '0.0'}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}