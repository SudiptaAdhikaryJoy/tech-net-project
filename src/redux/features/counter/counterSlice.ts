import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState{
  count: number,
}

const initialState: CounterState = {
  count: 82,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers:{
    increment: (state)=>{
      state.count += 9
    },
    decrement: (state)=>{
      state.count -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>)=>{
      state.count += action.payload
    }
  }

})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;