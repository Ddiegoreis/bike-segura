import { FiBluetooth, FiAlertTriangle, FiNavigation2 } from 'react-icons/fi'

import {
	Container,
	Title,
	ItensContainer,
	TitleItem,
	DescriptItem,
} from './style'

function Advantage() {
	return (
		<Container>
			<Title>Nossas Vantagens</Title>
			<ItensContainer>
				<div>
					<div>
						<FiBluetooth
							size='42'
							style={{
								color: '#fff',
								background: '#1370E7',
                                borderRadius: 8,
                                padding: 8
							}}
						/>
					</div>
					<TitleItem>Sincronização Simples</TitleItem>
					<DescriptItem>
						Para conectar o capacete ao aplicativo basta ligar o
						bluetooth
					</DescriptItem>
				</div>
				<div>
					<div>
						<FiNavigation2
							size='42'
							style={{
								color: '#fff',
								background: '#1370E7',
                                borderRadius: 8,
                                padding: 8
							}}
						/>
					</div>
					<TitleItem>Rota Inteligente</TitleItem>
					<DescriptItem>
						A rota inteligente vai te ajudar a não se perder e te
						deixar seguro
					</DescriptItem>
				</div>
				<div>
					<div>
						<FiAlertTriangle
							size='42'
							style={{
								color: '#fff',
								background: '#1370E7',
                                borderRadius: 8,
                                padding: 8
							}}
						/>
					</div>
					<TitleItem>Avisos Sonoros</TitleItem>
					<DescriptItem>
						Você estará 100% com os avisos sonoros e luminosos
					</DescriptItem>
				</div>
			</ItensContainer>
		</Container>
	)
}

export default Advantage
