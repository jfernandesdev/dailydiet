import { ArrowLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';

interface IHeaderProps {
  bg?: 'red_100' | 'green_100' | 'gray_200';
}

export const Container = styled.View<IHeaderProps>`
  width: 100%;
  height: 132px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme, bg = 'gray_200' }) => theme.COLORS[bg]};
  padding: 25px 30px 0; 
`;

export const IconLeft = styled(ArrowLeft)`
  color: ${({ theme }) => theme.COLORS.gray_600 };
  margin-right: auto;
  margin-bottom: -10px;
  width: 15px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_700};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.lg}px`};
  font-family:  ${({ theme }) => theme.FONT_FAMILY.bold};
`;

export const Blank = styled.View`
  width: 15px;
`;
