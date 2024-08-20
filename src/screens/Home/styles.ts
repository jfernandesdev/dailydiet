import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  color: ${( { theme } ) => theme.COLORS.green_500};
  font-size: 45px;
`;
