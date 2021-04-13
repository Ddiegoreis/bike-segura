import React from 'react'

import logo from '../../assets/logo.svg'

import {
	Container,
	LogoContainer,
	Logo,
	MenuContainer,
	MenuItem
} from './style'

export default function Navbar() {
	return (
		<Container>
			<LogoContainer>
				<Logo src={logo} alt='Logo'/>
			</LogoContainer>
			<MenuContainer>
				<MenuItem>Nossas Vantagens</MenuItem>
				<MenuItem>Produto</MenuItem>
				<MenuItem>Preços</MenuItem>
			</MenuContainer>
		</Container>
	)
}
