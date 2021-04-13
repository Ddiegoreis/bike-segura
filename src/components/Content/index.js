import {
	Container,
	LeftContent,
	Title,
	Descript,
	ButtonContainer,
	Button,
	RightContent,
	Image,
} from './style'

import bike from '../../assets/bike.svg'

export default function Content() {
	return (
		<Container>
			<LeftContent>
				<Title>Fique seguro durante sua pedalada</Title>
				<Descript>
					O primeiro wearable que oferece segurança na sua caminhada
					de bicicleta
				</Descript>
				<ButtonContainer>
					<Button active whileHover={{ scale: 1.2 }}>
						Baixar Aplicativo
					</Button>
					<Button whileHover={{ scale: 1.2 }}>Assistir Demo</Button>
				</ButtonContainer>
			</LeftContent>
			<RightContent>
				<Image src={bike} alt='Bike' />
			</RightContent>
		</Container>
	)
}
