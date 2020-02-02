import React from 'react';
import {Link} from 'react-router-dom';


export default ()=>(
	<div>
            <div class="nonprintable">
			
		<nav class="ui stackable menu" style={{backgroundColor: "#1b2431"}}>
			<Link to="/" class="brand item">
			<img class="ui avatar image" src="https://avatars0.githubusercontent.com/u/39208974?s=460&v=4" alt="polowis"/><span style={{color: "white"}}>Hung Tran</span>
			</Link>
			
			<Link to="/projects" class="active item" style={{color: "white"}}>Projects (6)</Link>
			
			
			<Link to="/articles" class="item" style={{color: "white"}}>Articles (7)</Link>
			
			<a href="/resume" class="  item" style={{color: "white"}}>Resume</a>
		</nav>
		</div>
        </div>
);