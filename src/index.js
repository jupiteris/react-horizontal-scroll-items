import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Item, AppContainer } from './components';
import Carousel from './Carousel';
import './style.css';

const projects = [
	{
		backgroundImg: 'https://unsplash.it/475/205',
		projectName: 'Project 1',
		aboutUs:
			"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
		projectContent:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
	},
	{
		backgroundImg: 'https://unsplash.it/476/205',
		projectName: 'Project 2',
		aboutUs:
			"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
		projectContent:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
	},
	{
		backgroundImg: 'https://unsplash.it/477/205',
		projectName: 'Project 3',
		aboutUs:
			"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
		projectContent:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
	},
	{
		backgroundImg: 'https://unsplash.it/478/205',
		projectName: 'Project 4',
		aboutUs:
			"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
		projectContent:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
	},
];

function Project({ name, content, reversed, position }) {
	const [show, setShow] = useState(false);
	const [stableShow, setStabelShow] = useState(false);

	return (
		<div
			style={{
				...position,
			}}
			className='item'
		>
			<div
				style={{
					textAlign: reversed ? 'right' : 'left',
					order: reversed ? 2 : 1,
				}}
				className='name'
				onMouseEnter={() => setShow(true)}
				onMouseLeave={() => setShow(false)}
				onClick={() => setStabelShow(!stableShow)}
			>
				{name}
			</div>
			<div style={{ order: reversed ? 1 : 2 }} className='content'>
				{(show || stableShow) && content}
			</div>
		</div>
	);
}

function App() {
	return (
		<AppContainer>
			<Carousel title='Carousel'>
				{projects &&
					projects.length &&
					projects.map((p, index) => {
						const { backgroundImg, projectContent, projectName, aboutUs } = p;
						return (
							<Item img={backgroundImg} key={index}>
								<Project
									name={projectName}
									content={projectContent}
									position={{ top: 0, left: 0 }}
								/>
								<Project
									name='About Us'
									content={aboutUs}
									position={{ bottom: 0, right: 0 }}
									reversed
								/>
							</Item>
						);
					})}
			</Carousel>
		</AppContainer>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
