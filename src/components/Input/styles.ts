import styled from 'styled-components/native';

export const InputWrapper = styled.View<{ width?: 'full' | 'half' }>`
  width: ${(props) => (props.width === 'half' ? '48%' : '100%')};
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => `${theme.FONT_SIZE.sm}px`};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  color: ${({ theme }) => theme.COLORS.gray_600};
  margin-bottom: 8px;
`;

export const StyledTextInput = styled.TextInput<{ multiline?: boolean }>`
  background-color: ${({ theme }) => theme.COLORS.white};
  border: 1px solid ${({ theme }) => theme.COLORS.gray_300};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.md}px`};
  color: ${({ theme }) => theme.COLORS.gray_700};
  border-radius: 6px;
  padding: ${(props) => (props.multiline ? '8px 16px' : '12px 16px')};
  min-height: ${(props) => (props.multiline ? 'auto' : '48px')};
  max-height: ${(props) => (props.multiline ? 'auto' : '48px')};
  ${(props) =>
    props.multiline &&
    `
    height: ${props.numberOfLines! * 24}px;
  `}
`;

export const DateInput = styled.TouchableOpacity`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fff;
  min-height: 48px;
  justify-content: center;
`;

export const DateText = styled.Text`
  color: #333;
`;