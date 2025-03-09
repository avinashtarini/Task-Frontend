import React from "react";
import { Snackbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../redux/appSlice";
import { toastTime } from "../utils/constants";

function Toast() {
  const { toastProps = false } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onDismissToast = () => {
    dispatch(hideToast());
  };
  return (
    <Snackbar
      visible={toastProps.show}
      onDismiss={onDismissToast}
      duration={toastTime}
      style={{
        marginHorizontal: 15,
      }}
    >
      {toastProps?.message}
    </Snackbar>
  );
}

export default Toast;
