import { Button as ButtonChakra } from "@chakra-ui/button";

const Button = ({ button, loading = false, ...rest }: any): JSX.Element => {
  return (
    <ButtonChakra {...rest} variant="primary">
      {button.text}
    </ButtonChakra>
  );
};

export default Button;
