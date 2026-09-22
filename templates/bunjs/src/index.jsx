import { createRoot } from 'react-dom/client'
import Pages from './pages'

const root = createRoot(document.getElementById('root'))
if (import.meta.hot) import.meta.hot.data.root = root

root.render(<Pages />)
