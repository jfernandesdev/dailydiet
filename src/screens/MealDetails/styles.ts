import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 40px 30px 30px;
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
`;

