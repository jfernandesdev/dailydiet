import { HeaderWithPercent } from '@components/HeaderWithPercent';

import { getDietPercentage, getDietStats } from '@services/mealService';

import { Container, Wrapper, Text, Content, Title, Amount, Row } from './styles';

import { mealData } from '@storage/data-mock'; // mock

export function Dashboard() {
  const { totalMeals, mealsWithinDiet, mealsOutsideDiet, bestStreak } = getDietStats(mealData);
  const dietPercentage = getDietPercentage(mealData);

  return (
    <Container>
      <HeaderWithPercent percentage={dietPercentage} />
      
      <Content>
        <Title>Estatísticas gerais</Title>

        <Wrapper fullWidth>
          <Amount>{bestStreak}</Amount>
          <Text>melhor sequência de pratos dentro da dieta</Text>
        </Wrapper>

        <Wrapper fullWidth>
          <Amount>{totalMeals}</Amount>
          <Text>refeições registradas</Text>
        </Wrapper>

      <Row>
          <Wrapper bg="green_100">
            <Amount>{mealsWithinDiet}</Amount>
            <Text>refeições dentro da dieta</Text>
          </Wrapper>

          <Wrapper bg="red_100">
            <Amount>{mealsOutsideDiet}</Amount>
            <Text>refeições fora da dieta</Text>
          </Wrapper>
      </Row>
      </Content>
    </Container>
  );
}