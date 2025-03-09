import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    toastProps: {
      show: false,
      message: "",
    },
    userDetails: null,
  },
  reducers: {
    showToast(state, action) {
      state.toastProps = {
        show: !state.toastProps.show,
        message: action.payload,
      };
    },
    hideToast(state) {
      state.toastProps = {
        show: false,
        message: "",
      };
    },
    updateUserDetails(state, action) {
      state.userDetails = action.payload;
    },
    resetUserData(state) {
      state.userDetails = null;
    },
  },
});

export const { showToast, updateUserDetails, resetUserData, hideToast } =
  appSlice.actions;

export default appSlice.reducer;
