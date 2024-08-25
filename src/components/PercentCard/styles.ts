import { ArrowUpRight } from 'phosphor-react-native';
import styled from 'styled-components/native';

interface ICardProps {
  isRed: boolean;
}

export const Card = styled.View<ICardProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isRed }) =>
    isRed ? theme.COLORS.red_100 : theme.COLORS.green_100};
  border-radius: 8px;
 padding: 5px 15px 25px 15px;
`;

export const IconUpRight = styled(ArrowUpRight)<ICardProps>`
  color: ${({ theme, isRed }) => isRed ? theme.COLORS.red_500 : theme.COLORS.green_500};
  margin-left: auto;
  margin-bottom: -10px;
  width: 15px;
`;

export const Percentage = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_700};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.xxl}px`};
  font-family:  ${({ theme }) => theme.FONT_FAMILY.bold};
  margin-bottom: 10px;
`;

export const TextCard = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_600};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.md}px`};
`;

