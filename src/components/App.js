import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Home from './Home';
import About from './About';
import Header from './Header';
import Courses from './Courses';
import Teachers from './Teachers';
import NotFound from './NotFound';

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                {/*You use render when you want to pass on props*/}
                <Route path="/about" render={() => <About title="About" />} />
                <Route path="/teachers" component={Teachers} />
                <Route path="/courses" component={Courses} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
