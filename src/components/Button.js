import React from "react";
import { Button as PaperButton } from "react-native-paper";

function Button(props) {
  const { onPress, loading = false, title, style = {}, ...rest } = props;
  return (
    <PaperButton
      loading={loading}
      onPress={onPress}
      style={[{ borderRadius: 5 }, style]}
      {...rest}
    >
      {title}
    </PaperButton>
  );
}

export default Button;
