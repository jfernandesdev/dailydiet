import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { Container, Icon, ButtonTypeStyleProps, Title } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string,
  icon?: keyof typeof MaterialIcons.glyphMap,
  type?: ButtonTypeStyleProps
}

export function Button({ title, icon, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {icon && <Icon name={icon} type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  )
}