import React from 'react';
import './App.css';
import Nav from './components/navbar';

const introText= [
        <p id="nstl">"A micro regional green economy development foundation, building sustainable ecosystems..."</p>,
 <p id="nstl">Areas of interest include the local government areas of Akwa Ibom State and Cross River State in Nigeria. <br/><br/>
    See the maps of both Akwa Ibom state and Cross River State respectively in the next slides... =></p>, 
       <img src="https://nigeriazipcodes.com/wp-content/uploads/2012/07/Akwa_Ibom-map-720x1024.jpg" alt="map of akwa ibom"/>,
  <img src="https://nigeriazipcodes.com/wp-content/uploads/2012/07/Cross-River-State-Postcode-Map-766x1024.jpg" alt="map of cross river"/>
      ];

class CaliApp extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      intro:introText,
      index:0
    }
  this.changeIntro=this.changeIntro.bind(this);
   }
  changeIntro(){
    if(this.state.index < 3){
    this.setState({
      intro: this.state.intro,
      index: this.state.index+1
    });
   }else{
     this.setState({
       index:this.state.index *0
     });
   }
  }
  render(){
    const introTxt = introText[this.state.index];
    
    return(
    <div className="main">
         <Nav projects="#projects" system="#system" products="#products" intervention="#interv" about="#about" contact="#contact"/>
        <main>
        <section id="intro">
          <div id="intCont">
            <p onChange={this.changeIntro} value={this.state.intro}>{introTxt}</p></div><i className="fa fa-chevron-right" id="secondarr" onClick={this.changeIntro} onChange={this.changeIntro}></i>
        </section><br/>
          <a href="#projects"><i className="fa fa-angle-double-down" id="arrowdown"></i></a>
        <section id="break">
          <div className="container">
            <h1>Make <span className="highlight">An</span> Enquiry.</h1>
            <form>
              <textarea placeholder=" Enter Enquiry..." /><br />
              <button type="submit" className="button_1"><a href="mailto:info@calibom.com"> Submit Your Enquiry</a></button>
            </form>
          </div>
    </section><br/>
          <section id="projects">
            <h2 className="title">Projects</h2>
          </section>
        <section id="system">
          <h2 className="title">System</h2>
          </section>
          <section id="products">
          <h2 className="title">Products</h2>
          </section>
          <section id="interv">
          <h2 className="title">Intervention Areas</h2>
          </section>
          <section id="about">
          <h2 className="title">About Us</h2>
          </section>
          <section id="contact">
          <h2 className="title">Contact Us</h2>
          </section>
       <footer>
      <p>Calibom.org, Copyright &copy; 2020</p>
    </footer>
        </main>
       </div>
    )
  }
};

export default CaliApp;
