import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Card, Percentage, TextCard, IconUpRight } from './styles';

interface IPercentCard {
  percentage: number;
}

export function PercentCard({ percentage }: IPercentCard) {
  const isRed = percentage < 50;

  const navigation = useNavigation();

  const handleGoToStatistics = () => {
    navigation.navigate('dashboard');
  };

  return (
    <Card isRed={isRed} onPress={handleGoToStatistics}>
      <IconUpRight isRed={isRed} />
      <Percentage> {percentage !== undefined ? percentage.toFixed(2) : '0.0'}%</Percentage>
      <TextCard>das refeições dentro da dieta</TextCard>
    </Card>
  );
}