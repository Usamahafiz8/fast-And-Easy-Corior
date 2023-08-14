import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import CustomTheme from './theme/CustomTheme.tsx'
import { AppRoutes } from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={CustomTheme}>
    <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
)
