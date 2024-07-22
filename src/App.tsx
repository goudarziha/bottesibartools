import { Center, Container, Image, Space, Stack, Text } from "@mantine/core";
import "./App.css";
import Botessi from "./assets/bottesi-landing.jpg";
import Footer from "./Footer";

function App() {
  const TextComponent = ({ children }: { children: React.ReactNode }) => (
    <Text size="md" style={{ color: "white" }}>
      {children}
    </Text>
  );
  return (
    <>
      <Container>
        <Center>
          <Stack>
            <Image src={Botessi} alt="botes" h={200} fit="contain" />

            <TextComponent>Coming Soon...</TextComponent>
            <TextComponent>
              We are tirelessly working to get our operations off the ground
              here in New Orleans
            </TextComponent>
            <TextComponent>Deep in our incantations.</TextComponent>
            <TextComponent>
              Thank you for your patience, love and support
            </TextComponent>
          </Stack>
        </Center>
      </Container>
      <Space h={100} />
      <Footer />
    </>
  );
}
export default App;
