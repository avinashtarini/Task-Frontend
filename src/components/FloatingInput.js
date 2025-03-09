import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

const FloatingInput = (props) => {
  const {
    showHelperText = false,
    helperType = "error",
    helperMessage = "",
    containerStyle = {},
    ...rest
  } = props;
  return (
    <View style={[{ rowGap: 5 }, containerStyle]}>
      <TextInput
        outlineStyle={{
          borderWidth: 0.8,
          borderRadius: 5,
        }}
        outlineColor={"transparent"}
        mode={"outlined"}
        {...rest}
      />
      {showHelperText ? (
        <HelperText
          type={helperType}
          visible={showHelperText}
          padding="none"
          {...rest}
        >
          {helperMessage}
        </HelperText>
      ) : null}
    </View>
  );
};

export default FloatingInput;
