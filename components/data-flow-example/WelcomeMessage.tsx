import styled from "styled-components";
import config from "../../config";
import { useAppState } from "../../data";
import FilePath from "../FilePath";

const WelcomeMessage: React.FC = () => {
	const state = useAppState();

	return (
		<>
			<h3>
				Component 2 <FilePath>&lt;WelcomeMessage /&gt;</FilePath>
			</h3>
			<Wrapper>
				<h4>
					Welcome to {config.siteTitle}, {state.user.name}
				</h4>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	display: inline-block;
	margin: 1rem 0;
`;
export default WelcomeMessage;
