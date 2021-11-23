import React, { Component } from 'react';
import Header from './Header/Header';
import {Container} from 'react-bootstrap/';
//import {Button, Card} from 'react-bootstrap/';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container>
                <Header></Header>
            </Container>
         );
    }
}
 
export default App;