import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  justify-content: flex-start;
  padding: 0 30px;
`;

export const Wrapper = styled.View`
  padding: 40px 0 30px;
`;

export const Text = styled.Text`
  color: ${( { theme } ) => theme.COLORS.gray_700};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.md}px`};
`;
