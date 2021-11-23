import React, { Component } from 'react';
import Header from './Header/Header';
//import {Button, Card} from 'react-bootstrap/';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Header></Header>
         );
    }
}
 
export default App;