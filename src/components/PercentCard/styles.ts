import styled from 'styled-components/native';

interface CardProps {
  isRed: boolean;
}

export const Card = styled.View<CardProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isRed }) =>
    isRed ? theme.COLORS.red_100 : theme.COLORS.green_100};
  height: 100px;
  border-radius: 8px;
`;

export const Percentage = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.xxl};
  font-family:  ${({ theme }) => theme.FONT_FAMILY.bold};
  margin-bottom: 10px;
`;

export const TextCard = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;