import React from 'react';
import {Link} from 'react-router-dom';
import Irunaicon from '../../images/iruna.jpg'

import Navbar from '../navbar';

class Irunastall extends React.Component{
    render(){
        return(
        <div>
            <Navbar/>
            <div style={{marginTop: "20px", marginBottom: "20px"}} class="ui text container">
            <h1>Iruna Global Stall</h1>
            <p><img class="ui medium right floated rounded image" src={Irunaicon} /></p>

            <p>Iruna Global Stall is a web service that I was lucky enough to be involved in a team of 3 people. This project helped me learn how to desgin a good backend code and database.</p>

            <p>Iruna Global Stall is implemented using <a href="https://laravel.com">Laravel</a>, a PHP framework for building web applications. Within 2 months, we created a website that facilitates the proccess of buying and selling in the game Iruna Online.</p>
            <p>We also implmented a chat system, an adminstrator dashboard, and fews cli commands that made the moderation part became much easier</p>
            <p>Iruna Global Stall has approximately around 360 registered users with over 400 items on sale.</p>
            <p>For the frontend part, we decided to use <a href="https://vuejs.org/">VueJS</a> to create a dynamic user interface</p>

            <p>In this project, I gained experience developing fullstack web application, writing unit test and manage server deployment</p>

            <p>Source: <a href="https://github.com/17kibr/Iruna-Stall"><i class="fab fa-github fa-lg"></i> 17kibr/Iruna-Stall</a></p>

            </div>
        </div>
        )
    }

}

export default Irunastall;