import { Group, ActionIcon, Container, Center } from "@mantine/core";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

function Footer() {
  return (
    <Container>
      <Center>
        <Group dir="row">
          <ActionIcon
            component="a"
            href="https://www.instagram.com/bottesi.bartools"
            color="white"
            variant="default"
            size="xl"
            onClick={(event) => event.preventDefault()}
          >
            <IconBrandInstagram />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.facebook.com/BottesiBartools/"
            color="white"
            variant="default"
            size="xl"
            onClick={(event) => event.preventDefault()}
          >
            <IconBrandFacebook />
          </ActionIcon>
        </Group>
      </Center>
    </Container>
  );
}

export default Footer;
