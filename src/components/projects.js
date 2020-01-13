import React from 'react'
import {Link} from 'react-router-dom'
import Irunaicon from '../images/iruna.jpg'
import Discordicon from '../images/discord.png'
import Game2D from '../images/2dgame.gif'
import MainParticleComponent from './mainParticleComponent'

class Projects extends React.Component{
    render(){
        return (
			<div>
				<MainParticleComponent/>
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
		

		<div style={{paddingTop: "20px"}} class="ui container">

		<div class="ui stackable centered four cards">
		<div class="card">
		
			<div class="image">
			<img src={Irunaicon} alt="Iruna global stall"/>
			</div>
		
		<div class="content">
			<span class="header">Iruna Global Stall</span>
			<div class="meta">
			<span class="date">2019-10-10</span>
			</div>

			<div class="description">
			A responsive web application that aims to facilitate the process of buying and selling items from the game Iruna Online. 
			Iruna Stall is a platform to find, buy and sell in-game items. 
			</div>
		</div>

		<div class="extra content">
			<div class="ui mini labels">
			
				<div class="ui basic label">Laravel</div>
			
				<div class="ui basic label">VueJS</div>
			
				<div class="ui basic label">MariaDB</div>
			
				<div class="ui basic label">GitHub</div>
				
				<div class="ui basic label">Php</div>

				<div class="ui basic label">JavaScript</div>

				<div class="ui basic label">Python</div>
			
			</div>
		</div>
			
			<Link class="ui bottom attached button" to="/projects">Read More</Link>
			

		</div>
			
			
			

		<div class="card">
		
			<div class="image">
			<img src={Discordicon} alt="Pooh9"/>
			</div>
		
		<div class="content">
			<span class="header">Pooh9</span>
			<div class="meta">
			<span class="date">2019-5-19</span>
			</div>

			<div class="description">
			I developed a multi-purpose Discord bot and eventually turned this into an AI
			</div>
		</div>

		<div class="extra content">
			<div class="ui mini labels">
			
				<div class="ui basic label">NodeJS</div>
			
				<div class="ui basic label">MongoDB</div>
			
				<div class="ui basic label">API</div>

				<div class="ui basic label">JavaScript</div>
			
			</div>
		</div>
			
			<Link class="ui bottom attached button" to="/projects">Read More</Link>
			

		</div>

		<div class="card">
		
			<div class="image">
			<img src={Game2D} alt="game2D"/>
			</div>
		
		<div class="content">
			<span class="header">Escape</span>
			<div class="meta">
			<span class="date">2019-11-1</span>
			</div>

			<div class="description">
			A 2D platform game I developed for school assignment
			</div>
		</div>

		<div class="extra content">
			<div class="ui mini labels">
			
				<div class="ui basic label">Python</div>

				<div class="ui basic label">Pygame</div>
			
				<div class="ui basic label">GitHub</div>
			
			</div>
		</div>
			
			<Link class="ui bottom attached button" to="/projects">Read More</Link>
			

		</div>
			
			
		</div>
		</div>
		</div>
		
        )
    }
}
export default Projects