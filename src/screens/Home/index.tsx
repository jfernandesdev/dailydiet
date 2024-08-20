import { Header } from '@components/Header';

import { Container, Title } from './styles';
import { PercentCard } from '@components/PercentCard';

export function Home(){
  return (
    <Container>
      <Header />
      <PercentCard percentage={90.86} />
      <Title>Home</Title>
    </Container>
  );
}