import React, { useState } from 'react';
import { Platform, TextInputProps } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { DateInput, DateText, InputWrapper, Label, StyledTextInput } from './styles';

interface IInput extends TextInputProps {
  label?: string;
  multiline?: boolean;
  numberOfLines?: number;
  type?: 'text' | 'textarea' | 'date' | 'time';
  width?: 'full' | 'half';
}

export function Input({ label, type = 'text', multiline, numberOfLines, width = 'full', ...props }: IInput) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showPicker = () => {
    setShow(true);
  };

  return (
    <InputWrapper width={width}>
      <Label>{label}</Label>

      {type === 'textarea' ? (
        <StyledTextInput multiline={true} numberOfLines={numberOfLines} {...props} />
      ) : type === 'text' ? (
        <StyledTextInput multiline={multiline} {...props} />
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
            <DateTimePicker
              value={date}
              mode={type}
              is24Hour={false}
              display="default"
              onChange={onChange}
              locale="pt-BR"
            />
          )}
        </>
      )}
    </InputWrapper>
  );
}
