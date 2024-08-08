import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { store } from '../app/store/store.ts'
import { ThemeProvider } from '../features/ui/ThemeContext/ThemeContext.tsx'
import './index.css'

import Home from '../pages/Home/Home.tsx'
import Landing from '../pages/Landing/Landing.tsx'
import NotFound from '../pages/NotFound/NotFound.tsx'
import ThemeButton from '../widgets/ui/ThemeButton.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<Provider store={store}>
			<Router>
				<ThemeButton />
				<Routes>
					<Route path='/landing' element={<Landing />} />
					<Route path='/' element={<Home />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</Provider>
	</ThemeProvider>
)
