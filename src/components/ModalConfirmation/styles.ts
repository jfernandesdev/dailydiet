import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  width: 85%;
  background-color: ${({ theme }) => theme.COLORS.white };
  padding: 40px 30px 30px;
  border-radius: 8px;
`;

export const ModalText = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_700};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.lg}px`};
  font-family:  ${({ theme }) => theme.FONT_FAMILY.bold};
  text-align: center;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;
