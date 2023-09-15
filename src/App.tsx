import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const {count} = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch();
  return (
		<div>
			<div className="flex-1">
				<button className="border-2 rounded border-green-300" onClick={() => dispatch(increment())}>Increment</button>
				<div>{count}</div>
				<button className="border-2 rounded border-red-300" onClick={() => dispatch(decrement())}>Decrement</button>
			</div>
		</div>
	);
}

export default App
