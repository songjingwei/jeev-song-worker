import { Hono } from 'hono'
import { renderer } from './renderer'
import HomePage from '@/pages/Homepage'

const app = new Hono()

app.use(renderer)

// * routers
app.get('/', (c) => {
  return c.render(<HomePage />)
})

export default app
