import React, { useState } from 'react';
import {  useNavigation, useRoute } from '@react-navigation/native';
import { View, Alert } from 'react-native';
import { format } from 'date-fns';

import { HeaderPage } from '@components/HeaderPage';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { addNewMeal, IMeal } from '@storage/addNewMeal';
import { updateMeal } from '@storage/updateMeal';

import { CheckboxContainer, CheckboxIndicator, CheckboxText, CheckboxWrapper, Container, Content, Label, RowWrapper } from './styles';

export function MealForm() {
  const navigation = useNavigation();
  const route = useRoute();

  const { type, meal } = route.params as { type: 'ADD' | 'EDIT'; meal?: IMeal };

  const formatDate = (date: Date) => format(date, 'yyyy-MM-dd');
  const formatTime = (date: Date) => format(date, 'HH:mm');

  const currentDate = formatDate(new Date());
  const currentTime = formatTime(new Date());

  const [title, setTitle] = useState(meal?.title || '');
  const [description, setDescription] = useState(meal?.description || '');
  const [date, setDate] = useState(meal?.date || currentDate);
  const [time, setTime] = useState(meal?.time || currentTime);
  const [isWithinDiet, setIsWithinDiet] = useState<boolean>(meal?.isWithinDiet ?? true);

  const pageTitle = type === 'ADD' ? 'Nova Refeição' : 'Editar Refeição';
  const buttonTitle = type === 'ADD' ? 'Cadastrar refeição' : 'Salvar edições';

  const handleMealAction = async () => {
    try {
      if (type === 'ADD') {
        const newMeal: IMeal = {
          id: Date.now().toString(), 
          title,
          description,
          date: date,
          time: time,
          isWithinDiet,
        };

        await addNewMeal(newMeal);
       
        navigation.navigate('feedback', { type: isWithinDiet ? 'SUCCESS' : 'FAIL' });
      } else if (type === 'EDIT' && meal) {
        const updatedMeal: IMeal = {
          id: meal.id, // ID original
          title,
          description,
          date: date,
          time: time,
          isWithinDiet,
        };

        await updateMeal(updatedMeal);
        navigation.navigate('feedback', { type: isWithinDiet ? 'SUCCESS' : 'FAIL' });
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao adicionar a refeição.');
      console.error(error);
    }
  };

  const handleSelectDiet = (value: boolean) => {
    setIsWithinDiet(value);
  };

  return (
    <>
      <HeaderPage bg="gray_200" title={pageTitle} />
      <Container>
        <Content>
          <View>
            <Input
              label="Nome:"
              value={title}
              onChangeText={setTitle}
            />
            <Input
              label="Descrição:"
              type="textarea"
              multiline={true}
              numberOfLines={3}
              value={description}
              onChangeText={setDescription}
            />
            <RowWrapper>
              <Input
                label="Data:"
                placeholder="dd/mm/aaaa"
                type="date"
                width="half"
                value={date}
                onChangeText={setDate}
              />
              <Input
                label="Hora:"
                placeholder="hh:mm"
                type="time"
                width="half"
                value={time}
                onChangeText={setTime}
              />
            </RowWrapper>

            <Label>Está dentro da dieta?</Label>

            <CheckboxContainer>
              <CheckboxWrapper
                isSelected={isWithinDiet}
                type="yes"
                onPress={() => handleSelectDiet(true)}
              >
                <CheckboxIndicator isSelected={isWithinDiet} type="yes" />
                <CheckboxText>Sim</CheckboxText>
              </CheckboxWrapper>
              <CheckboxWrapper
                isSelected={!isWithinDiet}
                type="no"
                onPress={() => handleSelectDiet(false)}
              >
                <CheckboxIndicator isSelected={!isWithinDiet} type="no" />
                <CheckboxText>Não</CheckboxText>
              </CheckboxWrapper>
            </CheckboxContainer>
          </View>
        </Content>
        <Button
          title={buttonTitle}
          onPress={handleMealAction}
        />
      </Container>
    </>
  );
}