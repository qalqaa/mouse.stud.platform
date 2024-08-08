import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '../app/store/store.ts'
import { ThemeProvider } from '../features/ui/ThemeContext/ThemeContext.tsx'
import './index.css'

import Landing from '../pages/Landing.tsx'
import ThemeButton from '../widgets/ui/ThemeButton.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<ThemeButton />
				<Landing />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
)
