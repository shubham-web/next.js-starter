import styled from "styled-components";
import { useAppState, useDispatch } from "../../data";
import { ActionTypes } from "../../data/mainReducer";
import FilePath from "../FilePath";

const NameInput: React.FC = () => {
	const state = useAppState();
	const dispatch = useDispatch();

	const setName = (newValue: string) => {
		dispatch({ type: ActionTypes.SET_NAME, payload: { name: newValue } });
	};

	return (
		<>
			<h3>
				Component 1 <FilePath>&lt;NameInput /&gt;</FilePath>
			</h3>
			<Wrapper>
				<input placeholder="user.name" value={state.user.name} onChange={(e) => setName(e.target.value)} />
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	display: inline-block;
	margin: 1rem 0;

	& input {
		font-size: 2rem;
		padding: 1rem;
		border-radius: 1rem;
		border: none;
		background: #26262620;
	}
`;
export default NameInput;
