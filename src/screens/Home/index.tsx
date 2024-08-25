import { Header } from '@components/Header';
import { PercentCard } from '@components/PercentCard';

import { Container, Wrapper, Text } from './styles';

export function Home(){
  return (
    <Container>
      <Header />
      <PercentCard percentage={90.86} />

      <Wrapper>
        <Text>Refeições</Text>
      </Wrapper>
    </Container>
  );
}