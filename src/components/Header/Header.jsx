import './Header.css';
import React from 'react';
import logo from '../../assets/img/logo.png'
import {Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap/';

const Header = (props) => {
    return ( 
        <Container>
            <Row className="topBar">
                <Col xs={2}><img alt="ReactTV Logo" src={logo}/></Col>
                <Col xs={{ span: 5, offset: 5 }}>
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
        </Container>
     );
}
 
export default Header;