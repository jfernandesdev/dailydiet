import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

import illustrationFailure from '@assets/illustration-failure.png';
import illustrationSuccess from '@assets/illustration-success.png';

import { Container, IllustrationFeedback, Title, Text, Bold, Content } from './styles';


export function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();

  const { type } = route.params as { type: "SUCCESS" | "FAIL" };

  const isSuccess = type === 'SUCCESS';

  const handleGoToHome = () => {
    navigation.navigate('home');
  };

  return (
    <Container>
      <Content>
        <Title type={isSuccess}>{isSuccess ? 'Continue assim!' : 'Que pena!'}</Title>
        <Text>
          {isSuccess
            ? <>Você continua <Bold>dentro da dieta</Bold>. Muito bem!</>
            : <>Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando e não desista!</>
          }
        </Text>
        <IllustrationFeedback source={isSuccess ? illustrationSuccess : illustrationFailure} />
        
        <Button 
          title="Ir para a página inicial" 
          onPress={handleGoToHome}
        />
      </Content>
    </Container>
  );
}