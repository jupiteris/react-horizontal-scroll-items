import styled from 'styled-components';

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const Item = styled.div`
	position: relative;
	text-align: center;
	height: 100%;
	background-image: ${(props) => `url(${props.desktopImg})`};
	@media (max-width: 568px) {
		background-image: ${(props) => `url(${props.mobileImg})`};
	}
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const CarouselContainer = styled.div`
	display: flex;
	height: 100%;
	transition: ${(props) => (props.sliding ? 'none' : 'transform 1s ease')};
	transform: ${(props) => {
		if (!props.sliding) return 'translateX(calc(-100%))';
		if (props.dir === PREV) return 'translateX(calc(2 * (-100%)))';
		return 'translateX(0%)';
	}};
`;

export const Wrapper = styled.div`
	// position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
	:hover {
		svg {
			opacity: ${(props) => (props.move ? 0.5 : 0)};
		}
	}
	svg {
		position: absolute;
		top: 50%;
		color: #ffe600;
		height: 40px;
		width: 40px;
		opacity: 0;
		:hover {
			opacity: 1;
		}
	}
	@media (max-width: 568px) {
		svg {
			opacity: 0;
		}
	}
`;

export const CarouselSlot = styled.div`
	flex: 1 0 100%;
	flex-basis: 100%;
	height: 100%;
	order: ${(props) => props.order};
`;

export const AppContainer = styled.div`
	font-family: sans-serif;
	text-align: center;
	height: 100%;
`;
