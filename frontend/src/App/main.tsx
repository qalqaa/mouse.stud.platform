import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '../Features/ui/ThemeContext/ThemeContext.tsx'
import Landing from '../Pages/Landing.tsx'
import ThemeButton from '../Widgets/ui/ThemeButton.tsx'
import './index.css'
import Table from '../components/Table'
import { columns, data } from '../components/Table/testProps.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<ThemeButton />
			<Table columns={columns} data={data}/>
		</ThemeProvider>
	</React.StrictMode>
)
