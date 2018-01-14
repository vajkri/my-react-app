import React, { Component } from 'react';
import './styles/style.css';
import MastHead from "./components/MastHead/MastHead";
import SectionCta from "./components/SectionCta/SectionCta";
import Slider from "./components/Slider/Slider";

class App extends Component {
  render() {
    return (
      <main>
			  <MastHead />
	      <div className="u-container u-container--narrow">
					<SectionCta />
		      <Slider />
	      </div>
      </main>
    );
  }
}

export default App;
