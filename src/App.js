import "./App.css";
import React, { useState } from "react";
import {
	Dropdown,
	FormControl,
	DropdownButton,
	SplitButton,
	Carousel
} from "react-bootstrap";
 
function App() {
	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<a
			href=""
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
			&#x25bc;
		</a>
	));

	// forwardRef again here!
	// Dropdown needs access to the DOM of the Menu to measure it
	const CustomMenu = React.forwardRef(
		({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
			const [value, setValue] = useState("");
			return (
				<div
					ref={ref}
					style={style}
					className={className}
					aria-labelledby={labeledBy}
				>
					<FormControl
						autoFocus
						className="mx-3 my-2 w-auto"
						placeholder="Type to filter..."
						onChange={(e) => setValue(e.target.value)}
						value={value}
					/>
					<ul className="list-unstyled">
						{React.Children.toArray(children).filter(
							(child) =>
								!value || child.props.children.toLowerCase().startsWith(value),
						)}
					</ul>
				</div>
			);
		},
	);

	const [plats,setPlats]=useState('Plats');
  const handleSelect=(e)=>{
    console.log(e);
    setPlats(e)
  }

	const [tv,setTV]=useState('TV');
  const tvSelect=(e)=>{
    console.log(e);
    setTV(e)
  }
	
	return (
		<div>
		<div className="App">
			<div class="dropdowns">
				<Dropdown drop="down">
					<Dropdown.Toggle 
					variant="success" 
					as={CustomToggle} 
					id="dropdown-custom-components"
					alignRight
					onSelect={handleSelect}>
					{plats}
					</Dropdown.Toggle>

					<Dropdown.Menu	as={CustomMenu}>
						<Dropdown.Item eventKey="Frölunda" onSelect={handleSelect}>Frölunda</Dropdown.Item>
						<Dropdown.Item eventKey="Mölndal" onSelect={handleSelect}>Mölndal</Dropdown.Item>
						<Dropdown.Item eventKey="Göteborg" onSelect={handleSelect}>Göteborg</Dropdown.Item>
						<Dropdown.Item eventKey="Angered" onSelect={handleSelect}>Angered</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>

			<div>
				<Dropdown>
					<Dropdown.Toggle 
					variant="success" 
					id="dropdown-basic"
					alignRight
					onSelect={tvSelect}
					>
						{tv}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1" eventKey="Intern" onSelect={tvSelect}>Intern</Dropdown.Item>
						<Dropdown.Item href="#/action-2"  eventKey="Extern" onSelect={tvSelect}>Extern</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
		<div>
		<Carousel
		indicators={false}
		controls={false}
		pause="false">
<Carousel.Item interval={1500}>
	<img
		className="d-block w-100"
		src="https://static.wikia.nocookie.net/overlordmaruyama/images/3/3a/Robed_Ainz_Databook.png/revision/latest?cb=20180930043427"
		alt="First slide"
	/>
	<Carousel.Caption>
		<h3>First slide label</h3>
		<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
	</Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={1500}>
	<img
		className="d-block w-100"
		src="https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1576109959614-JQLPDAFVBOOMM1MRIPOD/ke17ZwdGBToddI8pDm48kIHWgU7HpBspsWWCBPTMc80UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcL_JBFHD4udJ5V2axh2xLAhL9PznQzEybMhg3o13D5xf2jH5PJVelxoWfZFqNYr-j/Cover3.jpg"
		alt="Second slide"
	/>
	<Carousel.Caption>
		<h3>Second slide label</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={1500}>
	<img
		className="d-block w-100"
		src="https://digistatement.com/wp-content/uploads/2020/12/Overlord-Saison-4-1024x576-1.jpg"
		alt="Third slide"
	/>
	<Carousel.Caption>
		<h3>Third slide label</h3>
		<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
	</Carousel.Caption>
</Carousel.Item>
</Carousel>
		</div>
		</div>
	);
}

export default App;
