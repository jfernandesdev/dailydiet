import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  margin-top: 30px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 46px;
`;

export const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  border: 2px solid ${({ theme }) => theme.COLORS.gray_700};
`;