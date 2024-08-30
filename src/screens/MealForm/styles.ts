import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  justify-content: space-between;
  padding: 40px 30px 30px;
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  justify-content: flex-start;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => `${theme.FONT_SIZE.sm}px`};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  color: ${({ theme }) => theme.COLORS.gray_600};
  margin: 8px 0;
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CheckboxWrapper = styled(TouchableOpacity) <{ isSelected: boolean, type: 'yes' | 'no' }>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isSelected, type }) =>
  isSelected ? (type === 'yes' ? theme.COLORS.green_100 : theme.COLORS.red_100) : theme.COLORS.gray_100};
  border: 1px solid ${({ theme, isSelected, type }) =>
  isSelected ? (type === 'yes' ? theme.COLORS.green_500 : theme.COLORS.red_500) : theme.COLORS.gray_200};
  border-radius: 6px;
  padding: 5px 10px;
  width: 48%;
  height: 50px;
`;

export const CheckboxIndicator = styled.View<{ isSelected: boolean, type: 'yes' | 'no' }>`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  background-color: ${({ theme, isSelected, type }) =>
  isSelected ? (type === 'yes' ? theme.COLORS.green_500 : theme.COLORS.red_500) : theme.COLORS.gray_300};
  margin-right: 10px;
`;

export const CheckboxText = styled.Text`
  font-size: ${({ theme }) => `${theme.FONT_SIZE.sm}px`};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  color: ${({ theme }) => theme.COLORS.gray_700};
`;
