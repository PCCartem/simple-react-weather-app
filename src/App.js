import React, {Component} from 'react';

import "bootswatch/dist/journal/bootstrap.css";
import "./App.css";

import {NavItem, Navbar, Nav, Grid, Row, Col, Button} from "react-bootstrap";

import WeatherDisplay from './components/WeatherDisplay';


const PLACES = [
    {name: "Пермь", zip: "614034"},
    {name: "Москва", zip: "101000"},
    {name: "Хельсинки", zip: "00100"}
];

class App extends Component {

    constructor() {
        super();
        this.state = {
            activePlace: 0
        };
    }

    render() {
        const activePlace = this.state.activePlace;
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            React Simple Weather App
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Grid>
                    <Row>
                        <Col md={4} sm={4}>
                            <h4>Выберите город</h4>
                            <Nav
                                navbar
                                stacked
                                activeKey={activePlace}
                                onSelect={index => {
                                    this.setState({activePlace: index});
                                }}
                            >
                                {PLACES.map((place, index) => (
                                    <NavItem className="nav-link" key={index} eventKey={index}>
                                            <Button bsStyle="primary">
                                                {place.name}
                                            </Button>
                                        </NavItem>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} sm={8}>
                            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} name={PLACES[activePlace].name}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
