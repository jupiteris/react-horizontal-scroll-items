import React, { useReducer, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Wrapper, CarouselContainer, CarouselSlot, PREV, NEXT } from './components';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const getOrder = ({ index, pos, numItems }) => {
	return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const initialState = { pos: 0, sliding: false, dir: NEXT };

const Carousel = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [move, setMove] = useState(false);
	const numItems = React.Children.count(props.children);

	const slide = (dir) => {
		dispatch({ type: dir, numItems });
		setTimeout(() => {
			dispatch({ type: 'stopSliding' });
		}, 50);
	};
	const handlers = useSwipeable({
		onSwipedLeft: () => slide(NEXT),
		onSwipedRight: () => slide(PREV),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});
	let timeout;
	const handleMouseMove = () => {
		setMove(true);
		clearTimeout(timeout);
		timeout = setTimeout(() => setMove(false), 500);
	};

	return (
		<div {...handlers} style={{ height: '100%' }}>
			<Wrapper onMouseMove={handleMouseMove} move={move}>
				{/* listen the mouse scroll event */}
				<ReactScrollWheelHandler
					upHandler={() => slide(PREV)}
					downHandler={() => slide(NEXT)}
					style={{ height: '100%' }}
				>
					<CarouselContainer dir={state.dir} sliding={state.sliding}>
						{React.Children.map(props.children, (child, index) => (
							<CarouselSlot
								key={index}
								order={getOrder({ index: index, pos: state.pos, numItems })}
							>
								{child}
							</CarouselSlot>
						))}
					</CarouselContainer>
				</ReactScrollWheelHandler>
				<ArrowBackIosIcon onClick={() => slide(PREV)} style={{ marginLeft: 10, left: 0 }} />
				<ArrowForwardIosIcon onClick={() => slide(NEXT)} style={{ right: 0 }} />
			</Wrapper>
		</div>
	);
};

function reducer(state, { type, numItems }) {
	switch (type) {
		case 'reset':
			return initialState;
		case PREV:
			return {
				...state,
				dir: PREV,
				sliding: true,
				pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
			};
		case NEXT:
			return {
				...state,
				dir: NEXT,
				sliding: true,
				pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
			};
		case 'stopSliding':
			return { ...state, sliding: false };
		default:
			return state;
	}
}

export default Carousel;
