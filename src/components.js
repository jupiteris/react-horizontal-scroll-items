import styled from 'styled-components';

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const Item = styled.div`
	position: relative;
	text-align: center;
	height: 100vh;
	background-image: ${(props) => `url(${props.img})`};
	background-size: cover;
`;

export const CarouselContainer = styled.div`
	display: flex;
	transition: ${(props) => (props.sliding ? 'none' : 'transform 1s ease')};
	transform: ${(props) => {
		if (!props.sliding) return 'translateX(calc(-100%))';
		if (props.dir === PREV) return 'translateX(calc(2 * (-100%)))';
		return 'translateX(0%)';
	}};
`;

export const Wrapper = styled.div`
	width: 100%;
	overflow: hidden;
	box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
`;

export const CarouselSlot = styled.div`
	flex: 1 0 100%;
	flex-basis: 100%;
	height: 100vh;
	order: ${(props) => props.order};
`;

export const AppContainer = styled.div`
	font-family: sans-serif;
	text-align: center;
`;
