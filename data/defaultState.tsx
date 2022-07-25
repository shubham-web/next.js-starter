export interface AppState {
	user: {
		name: string;
	};
}

const defaultState: AppState = {
	user: {
		name: "",
	},
};

export default defaultState;
