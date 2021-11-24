import './Header.css';
import React from 'react';
import logo from '../../assets/img/logo.png';
import {Row, Col, Form, FormControl, Button} from 'react-bootstrap/';

const Header = (props) => {
    return ( 
        
            <Row className="topBar">
                <Col xs={12} md={2}><img alt="ReactTV Logo" className="img_logo" src={logo}/></Col>
                <Col xs={12} md={{ span: 5, offset: 5 }}>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="meSearch"
                        aria-label="Search"
                        />
                        <Button variant="outline-success" className="buttton_search">Search</Button>
                    </Form>
                </Col>
            </Row>
       
     );
}
 
export default Header;