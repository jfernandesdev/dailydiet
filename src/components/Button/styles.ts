import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity).attrs<Props>({
  activeOpacity: 0.7,
}) <Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.gray_600 : 'transparent'};
  border: ${({ theme, type }) =>
    type === 'PRIMARY' ? 'none' : `1px solid ${theme.COLORS.gray_700}`};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => {
  const color = type === 'PRIMARY' ? theme.COLORS.white : theme.COLORS.gray_600;
  return { size: 24, color };
})`
  margin-right: 8px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${type === 'PRIMARY' ? theme.COLORS.white : theme.COLORS.gray_700};
  `}
`;