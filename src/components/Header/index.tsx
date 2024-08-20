import { Container, Avatar, Logo } from './styles';

import logoImg from '@assets/logo-daily-diet.png';
import avatarImg from '@assets/avatar.png';

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Avatar source={avatarImg} />
    </Container>
  );
}