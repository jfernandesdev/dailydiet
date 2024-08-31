import React, { useState } from 'react';
import { Alert } from 'react-native';
import { format, parse, isValid } from 'date-fns';
import { useNavigation, useRoute } from '@react-navigation/native';

import { HeaderPage } from '@components/HeaderPage';
import { Button } from '@components/Button';
import { ModalConfirmation } from '@components/ModalConfirmation';

import { IMeal } from '@storage/addNewMeal';
import { deleteMeal } from '@storage/deleteMeals';

import { CircleFlag, Container, Content, FlagDiet, Label, LabelFlag, Text, Title } from './styles';

export function MealDetails() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const { meal } = route.params as { meal: IMeal };
  const headerBackgroundColor = meal?.isWithinDiet ? 'green_100' : 'red_100';

  const formatDateTime = (date?: string, time?: string) => {
    if (!date || !time) return 'Data e hora inválidas';

    const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
    const validDate = isValid(parsedDate) ? parsedDate : new Date();

    const parsedTime = parse(time, 'HH:mm', new Date());
    const validTime = isValid(parsedTime) ? parsedTime : new Date();

    const combinedDate = new Date(`${validDate.toISOString().split('T')[0]}T${validTime.toISOString().split('T')[1]}`);
    return isValid(combinedDate) ? format(combinedDate, "dd/MM/yyyy 'às' HH:mm") : 'Data e hora inválidas';
  };

    const formattedDateTime = formatDateTime(meal.date, meal.time);


  const onEdit = () => {
    navigation.navigate('mealForm', { type: 'EDIT', meal });
  };

  const onDelete = () => {
    setModalVisible(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteMeal(meal.id);
      setModalVisible(false);
  
      navigation.goBack();
      
    } catch (error) {
      console.error('Erro ao excluir a refeição:', error);
      Alert.alert(
        'Erro ao excluir',
        'Ocorreu um erro ao tentar excluir a refeição. Tente novamente.',
        [{ text: 'OK' }]
      );
      setModalVisible(false);
    }
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