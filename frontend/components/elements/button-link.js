import { Button } from "@chakra-ui/button";
import classNames from "classnames";
import PropTypes from "prop-types";
import { buttonLinkPropTypes } from "utils/types";
import CustomLink from "./custom-link";

const ButtonContent = ({ button, variant, compact }) => {
  return <Button>{button.text}</Button>;
};

const ButtonLink = ({ button, appearance, compact = false }) => {
  return (
    <CustomLink link={button}>
      <ButtonContent button={button} appearance={appearance} compact={compact} />
    </CustomLink>
  );
};

ButtonLink.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf(["dark", "white-outline", "white", "dark-outline"]),
  compact: PropTypes.bool,
};

export default ButtonLink;
