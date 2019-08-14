import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import PageWrapper from '../src/components/PageWrapper'
import Banner from './components/Home'
import About from '../src/components/pages/About.js'
function App() {
  return (
    <div>
      <Router>
        <PageWrapper>
        <Route exact path='/' component={Banner}>
        </Route> 
        <Route path='/about' component={About} />
       </PageWrapper>
      </Router>
      
    </div>
  );
}

export default App;
