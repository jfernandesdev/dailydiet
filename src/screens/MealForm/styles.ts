import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  justify-content: space-between;
  padding: 40px 30px 30px;
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  justify-content: flex-start;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;