import React from 'react'
import ParticleComponents from './ParticleComponents'
import {Link} from 'react-router-dom';

class Introduction extends React.Component{
    render(){
        const ImgStyle = {
            position: "relative", 
            top: "75px", 
            zIndex: "1"
            
        }

        const boxStyle ={
            maxWidth: "500px", 
            paddingTop: "75px", 
            marginTop: "0px"
        }
        const mainStyle = {
            height: "100%",
            marginTop: "-75px"
        }

        const numberOfProject = 6;
        const numberOfArticles = 7;

        return(
           
            <div style={mainStyle} class="ui middle aligned grid ">
                

    <div class="column">
    <ParticleComponents />
    <div style={ImgStyle} class="ui fluid centered small circular image">
      <img src="https://avatars0.githubusercontent.com/u/39208974?s=460&v=4"/>
    </div>


    <div style={boxStyle} class="ui fluid centered card">

      <div class="center aligned content">
        <span class="header">Hung Tran</span>
        <div class="meta">
          <span class="date">Student</span>
        </div>
        <div class="left aligned description">
          I am studying at Gungahlin College, I expect to graduate in December, 2020. I'm making pet projects on Github these days, just to learn some new languages and tools for future development works
        </div>
      </div>
      <div class="center aligned content">
        <div class="description">
          Interests:
          
            Data Science,
            Web development


        </div>
        <div class="description">
          Programming languages:
            Python, 
            Php, 
            JavaScript,
            Java
            
          

        </div>
      </div>
      <div class="center aligned extra content">


   <a href="https://github.com/polowis"> <i class="fab fa-github fa-lg"></i> </a>

   <a href="http://linkedin.com/in/changeme"> <i class="big linkedin icon icon-color"></i> </a>

   <a href="https://www.facebook.com/polowis.hungtran"> <i class="fab fa-facebook fa-lg"></i> </a>

   <a href="https://twitter.com/HungTra51048517"> <i class="fab fa-twitter fa-lg"></i> </a>



  <a href="mailto:molly@hawaii.edu"> <i class="big mail square icon icon-color"></i> </a>

      </div>
      <div class="center aligned content">
        <Link to="/projects">
          <button class="ui basic button">Projects {numberOfProject}</button>
        </Link>
        <Link to="/articles/">
          <button class="ui basic button">Articles {numberOfArticles}</button>
        </Link>
         <a href="/resume/">
          <button class="ui basic button">Resume</button>
        </a>
      </div>
    </div>
  </div>

</div>
        );
    }
}

export default Introduction;