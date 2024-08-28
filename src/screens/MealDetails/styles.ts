import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 20px 30px 30px;
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_600};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.md}px`};
  font-family:  ${({ theme }) => theme.FONT_FAMILY.regular};
  margin: 4px 0 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_700};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.lg}px`};
  font-family:  ${({ theme }) => theme.FONT_FAMILY.bold};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_700};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.sm}px`};
  font-family:  ${({ theme }) => theme.FONT_FAMILY.bold};
`;

export const FlagDiet = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.gray_200};;
  padding: 8px 12px;
  border-radius: 16px;
  width: 125px;
  margin-top: 16px;
`;

export const CircleFlag = styled.View<{ isWithinDiet: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, isWithinDiet }) => (isWithinDiet ? theme.COLORS.green_500 : theme.COLORS.red_500)};
  margin-right: 8px;
`;

export const LabelFlag = styled.Text`
  font-size: ${({ theme }) => `${theme.FONT_SIZE.sm}px`};
  color: ${({ theme }) => theme.COLORS.gray_700};
`;
