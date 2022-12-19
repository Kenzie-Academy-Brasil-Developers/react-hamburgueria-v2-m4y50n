import styled from "styled-components";

export const StyledFormContainer = styled.div`
	margin: 0 auto;
	padding: 2.3rem 1rem;
	width: 100%;
	max-width: 43rem;
	display: flex;
	flex-direction: column;
	row-gap: 3rem;

	border-radius: var(--radius);
	box-shadow: 0 0 5px var(--color-tertiary);

	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > a {
			text-decoration: underline;
			transition: all 0.3s ease;

			&:hover {
				filter: brightness(1.1);
			}
		}
	}

	& > p {
		text-align: center;
		color: var(--color-gray-300);
	}
`;
