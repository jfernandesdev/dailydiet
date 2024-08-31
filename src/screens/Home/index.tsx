import { SectionList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { HeaderWithAvatar } from '@components/HeaderWithAvatar';
import { PercentCard } from '@components/PercentCard';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';

import { getGroupedMeals, getDietPercentage } from '@services/mealService';
import { IMeal } from '@storage/addNewMeal';

import { Container, Wrapper, Text, SectionHeader, FooterGradient } from './styles';

import { useCallback, useState } from 'react';
import { mealsGetAll } from '@storage/mealsGetAll';

export function Home() {
  const [meals, setMeals] = useState<IMeal[]>([]);
  const [dietPercentage, setDietPercentage] = useState(0);
  const navigation = useNavigation();

  // Função para buscar as refeições
  const fetchMeals = useCallback(async () => {
    try {
      const fetchedMeals = await mealsGetAll();
      setMeals(fetchedMeals);

      const percentage = getDietPercentage(fetchedMeals);
      setDietPercentage(percentage);
    } catch (error) {
      console.error("Não foi possível carregar as refeições ==>", error);
    }
  }, []);

  // Atualizar a lista de refeições quando a tela for focada
  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [fetchMeals])
  );

  const groupedMeals = getGroupedMeals(meals);

  const handleNewMeal = () => {
    navigation.navigate('mealForm', { type: 'ADD'});
  };

  return (
    <Container>
      <HeaderWithAvatar />
      <PercentCard percentage={dietPercentage} />

      <Wrapper>
        <Text>Refeições</Text>
        <Button 
          title="Nova refeição" 
          icon="add"
          onPress={handleNewMeal} 
        />
      </Wrapper>

      <SectionList
        sections={groupedMeals}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
        renderItem={({ item }) => (
          <MealCard meal={item} />
        )}
        contentContainerStyle={{ paddingBottom: 100 }} 
      />

      <FooterGradient />
    </Container>
  );
}