import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text } from 'react-native';

import { HeaderPage } from '@components/HeaderPage';
import { Button } from '@components/Button';
import { IMeal } from '@components/MealCard';
import { ModalConfirmation } from '@components/ModalConfirmation';

import { Container, Content } from './styles';

export function MealDetails() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const { meal } = route.params as { meal: IMeal };
  const headerBackgroundColor = meal?.isWithinDiet ? 'green_100' : 'red_100';

  const onEdit = () => {
    navigation.navigate('mealForm', { type: 'EDIT', meal });
  };

  const onDelete = () => {
    setModalVisible(true);
  };

  const confirmDelete = () => {
    // TODO
    console.log('Refeição a deletar:', meal);
    setModalVisible(false);
  };


  return (
    <>
      <HeaderPage bg={headerBackgroundColor} title="Refeição" />
      <Container>
        <Content>
          <Text>{meal.title}</Text>
          <Text>{meal.description}</Text>
          <Text>{meal.date}</Text>
          <Text>{meal.time}</Text>
          <Text>{meal.isWithinDiet ? 'Dentro da dieta' : 'Fora da dieta'}</Text>
        </Content>

        <Button
          title="Editar refeição"
          icon="edit"
          onPress={onEdit}
        />
        <Button
          title="Excluir refeição"
          icon="delete-outline"
          type='SECONDARY'
          onPress={onDelete}
          style={{ marginTop: 16 }}
        />

        <ModalConfirmation
          title="Deseja realmente excluir o registro da refeição?"
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          onConfirm={confirmDelete}
        />
      </Container>
    </>
  );
}