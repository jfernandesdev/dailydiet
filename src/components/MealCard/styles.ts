import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.white};
  flex: 1;
  border: 1px solid ${({ theme }) => theme.COLORS.gray_300};
  margin-bottom: 8px;
  border-radius: 6px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 20px;
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.COLORS.gray_300 };
  height: 75%;
  width: 1px;
  margin: 0 8px;
`;

export const MealTime = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  color: ${({ theme }) => theme.COLORS.gray_700};
`;

export const MealTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.regular};
  color: ${({ theme }) => theme.COLORS.gray_600};
  flex: 1;
`;

export const StatusIndicator = styled.View<{ isWithinDiet: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, isWithinDiet }) =>
    isWithinDiet ? theme.COLORS.green_100 : theme.COLORS.red_100};
`;
