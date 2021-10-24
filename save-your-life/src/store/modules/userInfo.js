import { createSlice } from '@reduxjs/toolkit';

const randData = [];
for (let i = 0; i < 30; i++) {
  randData.push({
    Date: `2021-${Math.floor(9 + i / 27)}-${i % 27 + 1}`,
    value: Math.floor(Math.random() * 10 + 100 + i * 3)
  });
}

export const counterSlice = createSlice({
  name: 'userInfo',
  initialState: {
    weight: randData,
    height: 168
  },
  reducers: {
    addWeight: (state, action) => {
      const lastDate = state.weight[state.weight.length - 1].Date;
      const d = new Date(lastDate);
      d.setDate(d.getDate() + 1);
      state.weight = [
        ...state.weight,
        {
          Date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
          value: action.payload
        }
      ];
    }
  }
});

// Action creators are generated for each case reducer function
export const { addWeight } = counterSlice.actions;

export default counterSlice.reducer;
