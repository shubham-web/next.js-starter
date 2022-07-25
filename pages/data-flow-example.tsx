import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import NameInput from "../components/data-flow-example/NameInput";
import WelcomeMessage from "../components/data-flow-example/WelcomeMessage";
import config from "../config";
import { useAppState } from "../data";

const DataFlow: NextPage = () => {
	const appState = useAppState();
	return (
		<>
			<Head>
				<title>Data Flow Example • {config.siteTitle}</title>
			</Head>
			<Wrapper>
				<h3>Global State</h3>
				<AppStateJSON>{JSON.stringify(appState, null, "  ")}</AppStateJSON>

				<Flex>
					<div>
						<NameInput />
					</div>
					<div>
						<WelcomeMessage />
					</div>
				</Flex>
			</Wrapper>
		</>
	);
};

// Styled Components
const Wrapper = styled.div`
	padding: 2rem;
`;
const AppStateJSON = styled.pre`
	border: 1px solid gray;
	padding: 1rem;
	font-size: 2rem;
	display: inline-block;
	border-radius: 0.5rem;
	margin: 1rem 0 1rem;
`;
const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	& > div {
		padding: 1rem;
		border: 1px solid;
	}
`;

export default DataFlow;
