import { Button } from '@components/Button';

import illustrationFailure from '@assets/illustration-failure.png';
import illustrationSuccess from '@assets/illustration-success.png';

import { Container, IllustrationFeedback, Title, Text, Bold, Content } from './styles';

interface IFeedback {
  type?: "SUCCESS" | "FAIL"
}

export function Feedback({ type = "SUCCESS" }: IFeedback) {
  const isSuccess = type === 'SUCCESS';
  return (
    <Container>
      <Content>
        <Title type={type}>{isSuccess ? 'Continue assim!' : 'Que pena!'}</Title>
        <Text>
          {isSuccess
            ? <>Você continua <Bold>dentro da dieta</Bold>. Muito bem!</>
            : <>Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando e não desista!</>
          }
        </Text>
        <IllustrationFeedback source={isSuccess ? illustrationSuccess : illustrationFailure} />
        
        <Button title="Ir para a página inicial" />
      </Content>
    </Container>
  );
}