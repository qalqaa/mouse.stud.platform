import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '../features/ui/ThemeContext/ThemeContext.tsx'
import Landing from '../pages/Landing.tsx'
import ThemeButton from '../widgets/ui/ThemeButton.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<ThemeButton />
			<Landing />
		</ThemeProvider>
	</React.StrictMode>
)
