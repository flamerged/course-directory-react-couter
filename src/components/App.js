import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Home from './Home';
import About from './About';
import Header from './Header';
import Courses from './Courses';
import Teachers from './Teachers';

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
            {/*You use render when you want to pass on props*/}
            <Route path="/about" render={() => <About title="About" />} />
            <Route path="/teachers" component={Teachers} />
            <Route path="/courses" component={Courses} />
        </div>
    </BrowserRouter>
);

export default App;
