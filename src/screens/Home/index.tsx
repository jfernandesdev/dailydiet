import { Header } from '@components/Header';
import { PercentCard } from '@components/PercentCard';

import { Container, Wrapper, Text } from './styles';
import { Button} from '@components/Button';

export function Home(){
  return (
    <Container>
      <Header />
      <PercentCard percentage={90.86} />

      <Wrapper>
        <Text>Refeições</Text>
        <Button title="Nova refeição" icon="add" />
      </Wrapper>
    </Container>
  );
}