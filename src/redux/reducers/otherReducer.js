import { createReducer } from '@reduxjs/toolkit';

export const otherReducer = createReducer(
  {},
  {
    contactRequest: state => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    contactFail: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },
    courseRequest: state => {
      state.loading = true;
    },
    courseSuccess: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    courseFail: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
