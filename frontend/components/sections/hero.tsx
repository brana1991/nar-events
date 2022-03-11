import Markdown from "react-markdown";
import Button from "../elements/button";
import NextImage from "../elements/image";
import { Box, Container, Grid, Heading, Text } from "@chakra-ui/layout";

interface HeroDataProps {
  data: {
    buttons: {
      text: string;
      type: any;
      id: string;
    }[];
    label: string;
    title: string;
    description: string;
    smallTextWithLink: any;
    picture: any;
  };
}

const Hero = ({
  data: { buttons, label, title, description, smallTextWithLink, picture },
  data,
}: HeroDataProps) => {
  console.log(data);
  return (
    <Container>
      <Grid as="main" grid-templateColumns="1fr 1fr" py="40px">
        <Box>
          <Text variant="p-lead">{label}</Text>
          <Heading as="h1" variant="heading">
            {title}
          </Heading>
          <Text as="p" mb="30px">
            {description}
          </Text>
          <Grid grid-templateColumns={["1fr 1fr", "1fr 1fr 1fr"]}>
            {buttons.map((button) => (
              <Button button={button} variant={button.type} key={button.id} />
            ))}
          </Grid>
          <Markdown>{smallTextWithLink}</Markdown>
        </Box>
        {/* Right column for the image */}
        <NextImage media={picture} />
      </Grid>
    </Container>
  );
};

export default Hero;
