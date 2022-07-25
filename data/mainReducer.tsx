import { Reducer } from "react";
import { AppState } from "./defaultState";

// Types
export enum ActionTypes {
	SET_NAME = "SET_NAME",
}
export type Action = { type: ActionTypes.SET_NAME; payload: { name: string } };

// Reducer function
const mainReducer: Reducer<AppState, Action> = (prevState, action) => {
	switch (action.type) {
		case ActionTypes.SET_NAME:
			prevState.user.name = action.payload.name;

			return { ...prevState };
		default:
			return prevState;
	}
};

export default mainReducer;
