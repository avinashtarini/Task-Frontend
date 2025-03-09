import { Text as PaperText } from "react-native-paper";
import { textSizes } from "../utils/constants";

const Text = (props) => {
  const { title, size = textSizes.titleMedium, children, ...rest } = props;

  return (
    <PaperText variant={size} {...rest}>
      {children ? children : title}
    </PaperText>
  );
};

export default Text;
