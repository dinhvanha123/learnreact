import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import News from '../Components/News';
import NewsDetail from '../Components/NewsDetail';
import Contact from '../Components/Contact';
import Home from '../Components/Home';
class DirectURL extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/home" component={Home} />
                    <Route path="/tinchitiet" component={NewsDetail} />
                    <Route path="/tintuc" component={News} />
                    <Route path="/contact" component={Contact } />
                
                </div>
        );
    }
}

export default DirectURL;