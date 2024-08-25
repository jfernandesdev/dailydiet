import React from 'react';
import { Card, Percentage, TextCard, IconUpRight } from './styles';

interface IPercentCard {
  percentage: number;
}

export function PercentCard({ percentage }: IPercentCard) {
  const isRed = percentage < 50;

  return (
    <Card isRed={isRed}>
      <IconUpRight isRed={isRed} />
      <Percentage> {percentage !== undefined ? percentage.toFixed(2) : '0.0'}%</Percentage>
      <TextCard>das refeições dentro da dieta</TextCard>
    </Card>
  );
}