import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, Separator, MealTime, MealTitle, StatusIndicator, TimeAndTitleContainer } from './styles';

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
