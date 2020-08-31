import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Item, AppContainer } from './components';
import Carousel from './Carousel';
import './style.css';

const projects = [
	{
		backgroundImg: 'img/1-Skiljelinjer.jpg',
		projectName: 'Skiljelinjer',
		projectContent: `
			<b style="font-style: italic;">Ongoing</b><br/><br/>
			Lines of demarcation - architectural research project in collaboration with curator Sebastian Dahlqvist. 
			Through a collaborative design tool that actualizes only the controversial proposals the project explores agonism, 
			political lack of consensus, as a decision-making principle in collaborative design. 
			Different architectural interventions are designed with the tool,
			and a final design will be realized as a built project in spring 2021.<br/><br/>
			<b style="font-style: italic;">“All forms of consensus are by necessity based on acts of exclusion.” </b><br/>
			Chantal Mouffe
		`,
	},
	{
		backgroundImg: 'img/2-Silurus.jpg',
		projectName: 'Silurus',
		projectContent: `
			<b style="font-style: italic;">27 November 2020</b><br/><br/>
			An interactive augmented reality experience commissioned by Naturum Vattenriket in Kristianstad, Sweden. 
			The visitors to the museum are greeted by virtual animals, which teach them about the flora and fauna 
			and bring them out into the nature reserve. The animals have their own stories and dramas, 
			and invites in the visitors into an experience that is equal parts educative game and animated movie.
		`,
	},
	{
		backgroundImg: 'img/3-AWordIsPerched.jpg',
		projectName: 'A word is perched',
		projectContent: `
			<b style="font-style: italic;">Upcoming</b><br/><br/>
			Augmented reality social media network that aim to subvert the linguistic production of meaning 
			within digital communication. By applying real world physics to the written messages the ownership is expanded 
			and the structure of the text is reshaped, introducing a new spatial uncertainty in an otherwise rigid space.
		`,
	},
	{
		backgroundImg: 'img/4-ApparatusLudens.jpg',
		projectName: 'Apparatus Ludens',
		projectContent: `
			<b style="font-style: italic;">Upcoming</b><br/><br/>
			Online open-world game exploring what happens in virtual worlds after we humans leave. 
			Fragments of previous visitors are jumbled with your online footprint,
			your personalized advertisements mixed with those of other players, 
			your recommended videos slowly infiltrating the textures and materials of the world. 
			Instagram posts of strangers glitching through the gameplay, while the landscape slowly deteriorates 
			and disappears into noise.
		`,
	},
];

const aboutUs = `
	<a href="mailto:studio@untold.garden" target="_top">studio@untold.garden</a><br/><br/>
	Untold Garden builds tools to explore intersections and feedback loops between virtual and physical worlds, 
	through mixed reality interfaces and processes for decentralized decision-making. 
	We are a design collective by Max Čelar and Jakob Skote. 
`;

function Project({ name, content, reversed, position }) {
	const [show, setShow] = useState(false);
	const [stableShow, setStabelShow] = useState(false);
	const stopCrashEvent = (event) => {
		event.stopPropagation();
		event.preventDefault();
	};

	const handleShow = (e) => {
		stopCrashEvent(e);
		setShow(true);
	};

	const handleClose = (e) => {
		stopCrashEvent(e);
		setShow(false);
	};

	const handleStableShow = (e) => {
		stopCrashEvent(e);
		setStabelShow(!stableShow);
		setShow(false);
	};

	return (
		<div style={{ ...position }} className='item'>
			<div
				style={{ textAlign: reversed ? 'right' : 'left', order: reversed ? 2 : 1 }}
				className='name'
				onMouseEnter={handleShow}
				onMouseLeave={handleClose}
				onClick={handleStableShow}
			>
				{name}
			</div>
			<div
				style={{ order: reversed ? 1 : 2 }}
				className='content'
				dangerouslySetInnerHTML={{ __html: show || stableShow ? content : '' }}
			></div>
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
						const { backgroundImg, projectContent, projectName } = p;
						return (
							<Item img={backgroundImg} key={index}>
								<Project
									name={projectName}
									content={projectContent}
									position={{ top: 0, left: 0 }}
								/>
								<Project
									name='Untold Garden'
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
