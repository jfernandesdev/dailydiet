import {  useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { HeaderPage } from '@components/HeaderPage';
import { Button } from '@components/Button';
import { IMeal } from '@components/MealCard';
import { Input } from '@components/Input';

import { Container, Content, RowWrapper } from './styles';

export function MealForm() {
  const navigation = useNavigation();
  const route = useRoute();

  const { type, meal } = route.params as { type: 'ADD' | 'EDIT'; meal?: IMeal };

  const pageTitle = type === 'ADD' ? 'Nova Refeição' : 'Editar Refeição';
  const buttonTitle = type === 'ADD' ? 'Cadastrar refeição' : 'Salvar edições';

  const handleMealAction = () => {
    navigation.navigate('feedback', { type: 'SUCCESS'});
  };

  return (
    <>
      <HeaderPage bg="gray_200" title={pageTitle} />
      <Container>
        <Content>
          {type === 'EDIT' && meal ? (
            <View>
              <Text>Título: {meal.title}</Text>
              <Text>Descrição: {meal.description}</Text>
              <Text>Data: {meal.date}</Text>
              <Text>Hora: {meal.time}</Text>
              <Text>Status: {meal.isWithinDiet ? 'Dentro da dieta' : 'Fora da dieta'}</Text>
            </View>
          ) : (
              <View>
                <Input 
                  label="Nome:"
                />
                <Input
                  label="Descrição:"
                  type="textarea"
                  multiline={true}
                  numberOfLines={3}
                />
                <RowWrapper>
                  <Input 
                    label="Data:" 
                    placeholder="dd/mm/aaaa" 
                    type="date" 
                    keyboardType="numeric" 
                    width="half" 
                  />
                  <Input 
                    label="Hora:" 
                    placeholder="hh:mm" 
                    type="time" 
                    keyboardType="numeric" 
                    width="half" 
                  />
                </RowWrapper>
              </View>
          )}
        </Content>
        <Button 
          title={buttonTitle}
          onPress={handleMealAction}
        ></Button>
      </Container>
    </>
  );
}