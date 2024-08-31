import React, { useState, useEffect, useCallback } from 'react';

import { getDietPercentage, getDietStats } from '@services/mealService';
import { mealsGetAll } from '@storage/mealsGetAll';
import { HeaderWithPercent } from '@components/HeaderWithPercent';

import { Container, Wrapper, Text, Content, Title, Amount, Row } from './styles';


export function Dashboard() {
  const [dietPercentage, setDietPercentage] = useState(0);
  const [dietStats, setDietStats] = useState({
    totalMeals: 0,
    mealsWithinDiet: 0,
    mealsOutsideDiet: 0,
    bestStreak: 0,
  });

  const fetchMealData = useCallback(async () => {
    try {
      const meals = await mealsGetAll();
      const stats = getDietStats(meals);
      setDietStats(stats);
      setDietPercentage(getDietPercentage(meals));
    } catch (error) {
      console.error("Não foi possível carregar as refeições ==>", error);
    }
  }, []);

  useEffect(() => {
    fetchMealData();
  }, [fetchMealData]);

  return (
    <Container>
      <HeaderWithPercent percentage={dietPercentage} />
      
      <Content>
        <Title>Estatísticas gerais</Title>

        <Wrapper fullWidth>
          <Amount>{dietStats.bestStreak}</Amount>
          <Text>melhor sequência de pratos dentro da dieta</Text>
        </Wrapper>

        <Wrapper fullWidth>
          <Amount>{dietStats.totalMeals}</Amount>
          <Text>refeições registradas</Text>
        </Wrapper>

      <Row>
          <Wrapper bg="green_100">
            <Amount>{dietStats.mealsWithinDiet}</Amount>
            <Text>refeições dentro da dieta</Text>
          </Wrapper>

          <Wrapper bg="red_100">
            <Amount>{dietStats.mealsOutsideDiet}</Amount>
            <Text>refeições fora da dieta</Text>
          </Wrapper>
      </Row>
      </Content>
    </Container>
  );
}