import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Blank, Container, IconLeft, Title  } from './styles';

interface IHeaderProps {
  bg?: 'red_100' | 'green_100' | 'gray_200';
  title: string;
}

export function HeaderPage({ bg, title }: IHeaderProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container bg={bg}>
      <TouchableOpacity onPress={handleGoBack}>
        <IconLeft/>
      </TouchableOpacity>
      <Title> {title}</Title>
      <Blank></Blank>
    </Container>
  );
}