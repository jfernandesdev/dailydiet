import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Content, Separator, MealTime, MealTitle, StatusIndicator } from './styles';

export interface IMeal {
  id: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  isWithinDiet: boolean;
}

interface MealCardProps extends TouchableOpacityProps {
  meal: IMeal;
}

export function MealCard({ meal, ...rest }: MealCardProps) {
  return (
    <Container {...rest}>
      <Content>
        <MealTime>{meal.time}</MealTime>
        <Separator></Separator>
        <MealTitle>{meal.title}</MealTitle>
        <StatusIndicator isWithinDiet={meal.isWithinDiet} />
      </Content>
    </Container>
  );
}
