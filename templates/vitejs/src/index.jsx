import React from 'react'
import { createRoot } from 'react-dom/client'
import Pages from './pages'
import { env } from 'utils'
import { logger } from 'nextia'

logger(env.VITE_LOGGER)

createRoot(document.getElementById('root')).render(<Pages />)
