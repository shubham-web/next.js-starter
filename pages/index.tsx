import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import FilePath from "../components/FilePath";
import NextLink from "next/link";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>MyApp • Home</title>
			</Head>
			<Wrapper>
				<Heading>You&apos;re Almost Done!</Heading>
				<Steps>
					<Step>
						Edit <FilePath>config/index.ts</FilePath> to set app name and meta data.
					</Step>
					<Step>
						Edit <FilePath>config/theme.ts</FilePath> to set color, fonts, etc.
					</Step>
					<Step>Start Coding! 👨‍💻</Step>
				</Steps>
				<NextLink href={"/data-flow-example"}>View Data Flow Example</NextLink>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	padding: 3rem;

	& a {
		color: dodgerblue;
		padding: 1rem;
		background: #1da1f216;
		border-radius: 0.5rem;
	}
`;
const Heading = styled.h1`
	color: var(--color-primary);
`;

const Steps = styled.ul`
	margin: 2rem 0;
	display: grid;
	gap: 1rem;
`;
const Step = styled.li``;

export default Home;
