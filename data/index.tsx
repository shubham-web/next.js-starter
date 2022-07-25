import { createContext, Dispatch, useContext, useReducer } from "react";
import defaultState from "./defaultState";
import mainReducer, { Action } from "./mainReducer";

const AppStateContext = createContext(defaultState);
const DispatchContext = createContext(null as unknown as Dispatch<Action>);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	let [data, dispatch] = useReducer(mainReducer, defaultState);
	return (
		<AppStateContext.Provider value={data}>
			<DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
		</AppStateContext.Provider>
	);
};

// Hooks to use context
export const useAppState = () => {
	return useContext(AppStateContext);
};
export const useDispatch = () => {
	return useContext(DispatchContext);
};
