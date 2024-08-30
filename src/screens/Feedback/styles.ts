import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Content = styled.View`
  width: 75%;
`;

export const IllustrationFeedback = styled.Image`
  width: 90%;
  height: 50%;
  object-fit: contain;
  margin: 30px 0;
`;

export const Title = styled.Text<{ type: boolean }>`
  color: ${({ type, theme }) => type === false ? theme.COLORS.red_500 : theme.COLORS.green_500};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.xl}px`};
  margin-bottom: 8px;
  text-align: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_600};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.sm}px`};
  text-align: center;
`;

export const Bold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
`;
