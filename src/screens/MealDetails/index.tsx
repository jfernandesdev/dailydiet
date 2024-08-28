import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

import { HeaderPage } from '@components/HeaderPage';
import { Button } from '@components/Button';
import { IMeal } from '@components/MealCard';
import { ModalConfirmation } from '@components/ModalConfirmation';

import { CircleFlag, Container, Content, FlagDiet, Label, LabelFlag, Text, Title } from './styles';

export function MealDetails() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const { meal } = route.params as { meal: IMeal };
  const headerBackgroundColor = meal?.isWithinDiet ? 'green_100' : 'red_100';

  const formattedDateTime = format(new Date(`${meal.date}T${meal.time}`), "dd/MM/yyyy 'às' HH:mm");

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
          <Title>{meal.title}</Title>
          <Text>{meal.description}</Text>

          <Label>Date e hora</Label>
          <Text>{formattedDateTime}</Text>

          <FlagDiet>
            <CircleFlag isWithinDiet={meal.isWithinDiet} />
            <LabelFlag>{meal.isWithinDiet ? 'dentro da dieta' : 'fora da dieta'}</LabelFlag>
          </FlagDiet>
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