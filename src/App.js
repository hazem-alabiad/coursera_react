import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar dark color="primary">
					<div class="container">
						<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
					</div>
				</Navbar>
			</div>
		);
	}
}
