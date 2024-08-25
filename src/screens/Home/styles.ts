import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  justify-content: flex-start;
  padding: 0 30px;
`;

export const FooterGradient = styled.View`
  height: 100px; 
  background: ${({ theme }) => theme.COLORS.white};
  opacity: 0.5;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Wrapper = styled.View`
  padding: 40px 0 30px;
  margin-bottom: 36px;
`;

export const Text = styled.Text`
  color: ${( { theme } ) => theme.COLORS.gray_700};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.md}px`};
  margin-bottom: 8px;
`;

export const SectionHeader = styled.Text`
  font-size: ${({ theme }) => `${theme.FONT_SIZE.md}px`};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  color: ${({ theme }) => theme.COLORS.gray_700};
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 8px 0;
  margin-top: 16px;
`;