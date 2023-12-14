import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface bayDinSlice {
  questionId: number;
  questionName: string;
  answerNo: number;
}

const initialState: bayDinSlice = {
  questionId: 0,
  questionName: '',
  answerNo: 0,
};

export const bayDinSlice = createSlice({
  name: 'bayDin',
  initialState,
  reducers: {
    questionData: (
      state,
      action: PayloadAction<{id: number; name: string}>,
    ) => {
      state.questionId = action.payload.id;
      state.questionName = action.payload.name;
    },
    answerNo: (state, action: PayloadAction<number>) => {
      state.answerNo = action.payload;
    },
  },
});

export const {questionData, answerNo} = bayDinSlice.actions;

export default bayDinSlice.reducer;
