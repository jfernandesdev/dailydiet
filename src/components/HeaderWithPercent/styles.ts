import { ArrowLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';

interface ICardProps {
  isRed: boolean;
}

export const Container = styled.View<ICardProps>`
  width: 100%;
  height: 230px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isRed }) =>
    isRed ? theme.COLORS.red_100 : theme.COLORS.green_100};
 padding: 30px;
`;

export const IconLeft = styled(ArrowLeft)<ICardProps>`
  color: ${({ theme, isRed }) => isRed ? theme.COLORS.red_500 : theme.COLORS.green_500};
  margin-right: auto;
  margin-bottom: -10px;
  width: 15px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_700};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.xxl}px`};
  font-family:  ${({ theme }) => theme.FONT_FAMILY.bold};
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_600};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.sm}px`};
`;

