import React, { useState } from 'react';
import { Platform, TextInputProps } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import { DateInput, DateText, InputWrapper, Label, StyledTextInput } from './styles';

interface IInput extends TextInputProps {
  label?: string;
  multiline?: boolean;
  numberOfLines?: number;
  type?: 'text' | 'textarea' | 'date' | 'time';
  width?: 'full' | 'half';
}

export function Input({
  label,
  type = 'text',
  multiline,
  numberOfLines,
  width = 'full',
  value,
  onChangeText,
  ...props
}: IInput) {

  const [date, setDate] = useState(() => {
    if (value) {
      if (type === 'date') {
        return new Date(value + 'T00:00:00');
      } else if (type === 'time') {
        const [hours, minutes] = value.split(':').map(Number);
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
      }
    }
    return new Date();
  });

  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
      let formattedValue = '';
      if (type === 'date') {
        formattedValue = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD
      } else if (type === 'time') {
        formattedValue = selectedDate.toTimeString().split(' ')[0].substring(0, 5); // HH:mm
      }
      onChangeText?.(formattedValue);
    }
  };

  const showPicker = () => {
    setShow(true);
  };

  return (
    <InputWrapper width={width}>
      <Label>{label}</Label>

      {type === 'textarea' ? (
        <StyledTextInput
          multiline={true}
          numberOfLines={numberOfLines}
          value={value}
          onChangeText={onChangeText}
          {...props}
        />
      ) : type === 'text' ? (
        <StyledTextInput
          multiline={multiline}
          value={value}
          onChangeText={onChangeText}
          {...props}
        />
      ) : (
        <>
          <DateInput onPress={showPicker}>
            <DateText>
              {type === 'date'
                ? date.toLocaleDateString('pt-BR')
                : date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
            </DateText>
          </DateInput>
          {show && (
            <RNDateTimePicker
              value={date}
              mode={type} // 'date' ou 'time'
              is24Hour={false} 
              display="default"
              onChange={onChange}
              locale="pt-BR"
              positiveButton={{ label: 'OK', textColor: '#000' }}
              negativeButton={{ label: 'Cancelar', textColor: 'gray' }}
            />
          )}
        </>
      )}
    </InputWrapper>
  );
}
