import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { store } from '../app/store/store.ts'
import { ThemeProvider } from '../features/ui/ThemeContext/ThemeContext.tsx'

import './index.css'

import { AnimatePresence, motion } from 'framer-motion'
import TaskSubmit from '../entities/TaskSubmit/TaskSubmit.tsx'
import Home from '../pages/Home/Home.tsx'
import Landing from '../pages/Landing/Landing.tsx'
import NotFound from '../pages/NotFound/NotFound.tsx'
import Tasks from '../pages/Tasks/Tasks.tsx'
import ThemeButton from '../widgets/ui/ThemeButton.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<Provider store={store}>
			<ThemeButton />
			<Router>
				<AnimatePresence>
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<Home />}>
							<Route
								path='/tasks'
								element={
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.5 }}
									>
										<Tasks />
									</motion.div>
								}
							/>
							<Route path='tasks/:id' element={<TaskSubmit />} />
						</Route>
						

						<Route path='/landing' element={<Landing />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</AnimatePresence>
			</Router>
		</Provider>
	</ThemeProvider>
)