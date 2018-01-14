import React, { Component } from 'react';
import './styles/style.css';
import MastHead from "./components/MastHead/MastHead";
import SectionCta from "./components/SectionCta/SectionCta";
import Slider from "./components/Slider/Slider";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import ContactBlock from "./components/ContactBlock/ContactBlock";

class App extends Component {
  render() {
    return (
      <main>
			  <MastHead />
	      <div className="u-block u-container u-container--narrow">
					<SectionCta />
		      <Slider />
	      </div>
	      <div className="u-block u-container u-container--narrow">
		      <SectionHeader />
		      <ContactBlock />
	      </div>
      </main>
    );
  }
}

export default App;
