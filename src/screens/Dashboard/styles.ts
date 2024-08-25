import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  justify-content: flex-start;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  justify-content: flex-start;
  padding: 60px 30px 30px;
  border-radius: 30px 30px 0 0;
  margin-top: -30px;
`;

interface IWrapperProps {
  bg?: 'red_100' | 'green_100' | 'gray_200'; 
  fullWidth?: boolean;
}

export const Wrapper = styled.View<IWrapperProps>`
  padding: 25px 8px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, bg = 'gray_200' }) => theme.COLORS[bg]}; 
  border-radius: 8px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '48%')};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
  padding: 0 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_700};
  font-family: ${({theme}) => theme.FONT_FAMILY.bold};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.sm}px`};
  margin-bottom: 24px;
  text-align: center;
`;

export const Text = styled.Text`
  color: ${( { theme } ) => theme.COLORS.gray_600};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.sm}px`};
  text-align: center;
`;

export const Amount = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.xl}px`};
  margin-bottom: 8px;
`;