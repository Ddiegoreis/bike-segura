import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './styles/themes'
import { GlobalStyles } from './styles/global'

import Navbar from './components/Navbar'
import Content from './components/Content'
import Advantage from './components/Advantage'

export default function App() {
	const [theme, setTheme] = useState('light')

	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<Navbar />
			
      <Content />

      <Advantage />
			<GlobalStyles />
		</ThemeProvider>
	)
}
