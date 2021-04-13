import styled from 'styled-components'

export const Container = styled.div`
	height: 10vh;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	font-size: 4.2rem;
	padding: 4rem 4rem;
    background-color: transparent;
    position: absolute;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
	width: 8rem;
	cursor: pointer;
`

export const MenuContainer = styled.ul`
	display: flex;
	list-style: none;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

export const MenuItem = styled.li`
	font-weight: bolder;
	cursor: pointer;
	padding: 0 4rem;

	transition: color ease-in 0.2s;
    
    &:hover {
        color: #1370E7;
	}
`
