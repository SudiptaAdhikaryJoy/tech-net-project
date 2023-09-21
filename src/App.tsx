import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const {count} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();
  return (
		<div>
			<div className="flex-1">
				<button
					className="border-2 rounded border-green-300"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<div>{count}</div>
				<button
					className="border-2 rounded border-red-300"
					onClick={() => dispatch(incrementByAmount(6))}
				>
					IncrementByValue
				</button>
				<button
					className="border-2 rounded border-red-300"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	);
}

export default App
