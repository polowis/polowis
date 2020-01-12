import React from 'react'

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

        const numberOfProject = 5;

        return(
            <div style={mainStyle} class="ui middle aligned grid ">

    <div class="column">

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
          I am studying at Gungahlin College, I expect to graduate in December, 2020
        </div>
      </div>
      <div class="center aligned content">
        <div class="description">
          Interests:
          
            Data Science,
            Web development
          

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
        <a href="/projects">
          <button class="ui basic button">Projects {numberOfProject}</button>
        </a>
        <a href="/template/essays/">
          <button class="ui basic button">Essays (3)</button>
        </a>
        <a href="/template/bio/">
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