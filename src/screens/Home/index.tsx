import { SectionList } from 'react-native';

import { HeaderWithAvatar } from '@components/HeaderWithAvatar';
import { PercentCard } from '@components/PercentCard';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';

import { getGroupedMeals, getDietPercentage } from '@services/mealService';

import { Container, Wrapper, Text, SectionHeader, FooterGradient } from './styles';

import { mealData } from '@storage/data-mock'; // mock

export function Home() {
  const groupedMeals = getGroupedMeals(mealData);
  const dietPercentage = getDietPercentage(mealData);

  return (
    <Container>
      <HeaderWithAvatar />
      <PercentCard percentage={dietPercentage} />

      <Wrapper>
        <Text>Refeições</Text>
        <Button title="Nova refeição" icon="add" />
      </Wrapper>

      <SectionList
        sections={groupedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard meal={item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
        contentContainerStyle={{ paddingBottom: 100 }} 
      />

      <FooterGradient />
    </Container>
  );
}