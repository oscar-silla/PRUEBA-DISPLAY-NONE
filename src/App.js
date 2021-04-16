import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import FooterComponent from './components/shared/footer';
import NavbarComponent from './components/shared/navbar'
import WorkPageComponent from './pages/Work'
import ScrollHandlerComponent from './components/shared/scroll';

const App = () => {
    return (
        <div className='container'>
            <header>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
            </header>
            <Router>
                <div>
                    <NavbarComponent></NavbarComponent>
                    <ScrollHandlerComponent />
                    <div className='content'>
                        <Route exact path="/" component={WorkPageComponent} />
                    </div>
                    <FooterComponent />
                </div>
            </Router>
        </div>
    );
}

export default App;
