import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IMeal } from '@storage/addNewMeal';

import { Container, Content, Separator, MealTime, MealTitle, StatusIndicator, TimeAndTitleContainer } from './styles';

interface MealCardProps extends TouchableOpacityProps {
  meal: IMeal;
}

export function MealCard({ meal, ...rest }: MealCardProps) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('mealDetails', { meal });
  };

  return (
    <Container {...rest} onPress={handlePress}>
      <Content>
        <TimeAndTitleContainer>
          <MealTime>{meal.time}</MealTime>
          <Separator />
          <MealTitle>{meal.title}</MealTitle>
        </TimeAndTitleContainer>
        <StatusIndicator isWithinDiet={meal.isWithinDiet} />
      </Content>
    </Container>
  );
}
