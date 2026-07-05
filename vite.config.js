import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function devApi() { 

  return { 
    name: 'dev-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url.startsWith('/api/')) return next()
        const u = new URL(req.url, 'http://localhost')
        const fn = u.pathname.replace('/api/', '')
        try { 
          const mod = await server.ssrLoadModule(`/api/${fn}.js`)
          req.query = Object.fromEntries(u.searchParams)
          res.status = (c) => { res.statusCode = c; return res }
          res.json = (o) => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(o)) }
          await mod.default(req, res) 
        } catch (e) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({error: e.message }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => { 

  object.assign(process.env, loadEnv(mode, process.cwd(), ''))
  return { plugins: [react(), devAPI()]}
})