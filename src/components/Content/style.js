import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.section`
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
`

export const LeftContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	padding: 11rem;
`

export const Title = styled.h1`
	font-size: 7rem;
	margin-bottom: 2.5rem;
`

export const Descript = styled.p`
	font-size: 1.7rem;
	font-weight: bold;
	color: #949494;
	width: 20em;
`

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: row;
	margin-top: 2.5rem;
`

export const Button = styled(motion.button)`
	padding: 1.3rem 3.8rem;
	background: ${(props) => (props.active ? '#1370E7' : '#EBFDF1')};
	border: none;
	border-radius: 8px;
	color: ${(props) => (props.active ? '#fff' : '#000')};
	font-size: 1.6rem;
	font-weight: bolder;
	cursor: pointer;
`

export const RightContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Image = styled.img`
	width: 70rem;
`
