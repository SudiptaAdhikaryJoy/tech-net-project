import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState{
  count: number,
}

const initialState: CounterState = {
  count: 2,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers:{
    increment: (state)=>{
      state.count += 7
    },
    decrement: (state)=>{
      state.count -= 2
    },
    incrementByAmount: (state, action: PayloadAction<number>)=>{
      state.count += action.payload
    }
  }

})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;