import React, { Component } from 'react';
//import logo from './logo.svg';
import './styles/style.css'
import MastHead from "./components/MastHead/MastHead";
import Slider from "./components/Slider/Slider";
import SectionCta from "./components/SectionCta/SectionCta";

class App extends Component {
  render() {
    return (
      <main>
			  <MastHead />
	      <div className="u-container u-container--narrow">
					<SectionCta />
		      <Slider />
	      </div>
			  {/*<div className="App">
			    <header className="App-header">
			      <img src={logo} className="App-logo" alt="logo" />
			      <h1 className="App-title">Welcome to React</h1>
			    </header>
			    <p className="App-intro">
			      To get started, edit <code>src/App.js</code> and save to reload.
			    </p>
		    </div>*/}
      </main>
    );
  }
}

export default App;
