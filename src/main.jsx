import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  <MantineProvider>
    <App />
  </MantineProvider>
  </BrowserRouter>
  </>,
)
