import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, IconLeft, Title, Subtitle, StyledTouchableOpacity } from './styles';

interface IPercentCard {
  percentage: number;
}

export function HeaderWithPercent({ percentage }: IPercentCard) {
  const isRed = percentage < 50;

  const navigation = useNavigation();
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container isRed={isRed}>

      <StyledTouchableOpacity onPress={handleGoBack}>
        <IconLeft isRed={isRed} />
      </StyledTouchableOpacity>
      
      <Title> {percentage !== undefined ? percentage.toFixed(2) : '0.0'}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}