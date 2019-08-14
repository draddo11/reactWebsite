import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import PageWrapper from '../src/components/PageWrapper'
import Banner from '../src/components/Banner'
import About from '../src/components/pages/About.js'
import Stats from '../src/components/pages/Stats.js'
function App() {
  return (
    <div>
      <Router>
      <PageWrapper>
      <Banner />
      <Stats />
      <About />
      </PageWrapper>
      </Router>
      
    </div>
  );
}

export default App;
