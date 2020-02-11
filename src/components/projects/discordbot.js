import React from 'react';
import {Link} from 'react-router-dom';
import Discordicon from '../../images/discord.png'

import Navbar from '../navbar';

class DiscordBot extends React.Component{
    render(){
        return(
        <div>
            <Navbar/>
            <div style={{marginTop: "20px", marginBottom: "20px"}} class="ui text container">
            <h1>Pooh9 - A multi-purpose discord bot</h1>
            <p><img class="ui medium right floated rounded image" src={Discordicon} /></p>

            <p>Pooh9 started out as a simple bot, it received commands and do simple action such as responding to text without any special. </p>
            <p>There are many discord bots but none of them satisfy me, I usually had to invite lots of bots but with each of them only responsible for limited commands</p>

            <p>Pooh9 is implemented using<a href="https://discord.js.org/#/">DiscordJS</a>, a powerful NodeJS library that allow people to interact with Discord API easier 
            </p>

            <p>Within 2 weeks and a few days reading the documentation, I created a bot that can handle everything I need. From the very basic stuff to very advanced things. </p>
            <p>I also created a web dashboard for the bot, which allows me to easily moderate the bot manually. I can reply to other users as a bot and directly receive messages from them. </p>
            <p>Pooh9 is a personal bot, I only use it in my own server or whenever I need it. </p>
            <p>Before I created Pooh9, I did create another bot a few months before Pooh9. I took most of the code from that and refactor it and as well as adding more feature to make the bot more complicated. <a href="https://vuejs.org/">VueJS</a> to create a dynamic user interface</p>

            <p>Through this project, I gained the knowledge of API, and how to interact with them. I also learnt a lot of things about ES6 features and MongoDB database </p>

            <p>Source: <a href="https://github.com/17kibr/Iruna-Stall"><i class="fab fa-github fa-lg"></i> 17kibr/Iruna-Stall</a></p>

            </div>
        </div>
        )
    }

}

export default DiscordBot;